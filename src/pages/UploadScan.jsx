import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function UploadScan() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setAiResult(null);
  };

  const analyzeScan = async () => {
    if (!file) {
      alert("Please select a scan image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      await addDoc(collection(db, "aiResults"), {
        fileName: file.name,
        result: data.result,
        confidence: data.confidence,
        tumorSize: data.tumor_size,
        stage: data.stage,
        createdAt: new Date(),
      });

      setAiResult(data);
      setLoading(false);
      alert("AI result saved to database");
    } catch (error) {
      setLoading(false);
      alert("AI backend not running or database save failed.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          AI Medical Imaging
        </p>

        <h1 className="text-5xl font-black">
          MRI Scan Analysis
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Upload a scan image locally and send it to the FastAPI AI engine for analysis.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-6 text-3xl font-black text-cyan-400">
            Upload Scan
          </h2>

          <label className="flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-cyan-400/40 bg-slate-900/70 p-8 text-center transition-all hover:border-cyan-300 hover:bg-cyan-500/10">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/20 text-3xl">
              +
            </div>

            <p className="text-xl font-bold">
              Click to select MRI image
            </p>

            <p className="mt-2 text-sm text-slate-400">
              PNG, JPG, JPEG supported
            </p>
          </label>

          {file && (
            <div className="mt-5 rounded-2xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Selected file</p>
              <p className="font-semibold text-cyan-300">{file.name}</p>
            </div>
          )}

          <button
            onClick={analyzeScan}
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-cyan-500 p-4 text-xl font-black text-slate-950 transition-all hover:scale-[1.02] hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Analyzing Scan..." : "Analyze With AI"}
          </button>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-6 text-3xl font-black text-cyan-400">
            Scan Preview
          </h2>

          {preview ? (
            <img
              src={preview}
              alt="Scan Preview"
              className="h-[360px] w-full rounded-[28px] object-cover"
            />
          ) : (
            <div className="flex h-[360px] items-center justify-center rounded-[28px] bg-slate-900/80 text-slate-500">
              No scan selected
            </div>
          )}

          {aiResult && (
            <div className="mt-6 rounded-[28px] border border-red-400/20 bg-red-500/10 p-6">
              <h2 className="mb-4 text-2xl font-black text-red-300">
                AI Analysis Result
              </h2>

              <div className="space-y-3 text-slate-200">
                <p>Result: {aiResult.result}</p>
                <p>Confidence: {aiResult.confidence}</p>
                <p>Tumor Size: {aiResult.tumor_size}</p>
                <p>Stage: {aiResult.stage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}