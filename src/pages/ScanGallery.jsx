import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ScanGallery() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetchScans();
  }, []);

  const fetchScans = async () => {
    const querySnapshot = await getDocs(collection(db, "scans"));

    const scanList = [];

    querySnapshot.forEach((doc) => {
      scanList.push({
        id: doc.id,
        ...doc.data(),
        aiResult: null,
        loading: false,
      });
    });

    setScans(scanList);
  };

  const analyzeScan = async (scan) => {
    try {
      setScans((prev) =>
        prev.map((item) =>
          item.id === scan.id ? { ...item, loading: true } : item
        )
      );

      const imageResponse = await fetch(scan.imageUrl);
      const blob = await imageResponse.blob();

      const formData = new FormData();
      formData.append("file", blob, scan.fileName);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setScans((prev) =>
        prev.map((item) =>
          item.id === scan.id
            ? {
                ...item,
                loading: false,
                aiResult: data,
              }
            : item
        )
      );
    } catch (error) {
      alert(error.message);

      setScans((prev) =>
        prev.map((item) =>
          item.id === scan.id ? { ...item, loading: false } : item
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-black text-cyan-400 mb-10">
        Scan Gallery
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scans.map((scan) => (
          <div key={scan.id} className="bg-slate-900 p-5 rounded-3xl">
            <img
              src={scan.imageUrl}
              alt={scan.fileName}
              className="w-full h-64 object-cover rounded-2xl mb-4"
            />

            <h2 className="text-xl font-bold text-cyan-400">
              {scan.fileName}
            </h2>

            <p className="text-slate-300 mb-4">Status: {scan.status}</p>

            <button
              onClick={() => analyzeScan(scan)}
              className="w-full bg-cyan-500 hover:bg-cyan-400 p-3 rounded-xl font-bold mb-4"
            >
              {scan.loading ? "Analyzing..." : "Analyze With AI"}
            </button>

            {scan.aiResult && (
              <div className="bg-slate-800 p-4 rounded-2xl">
                <h3 className="text-lg font-bold text-red-400 mb-2">
                  AI Analysis Result
                </h3>

                <p>Result: {scan.aiResult.result}</p>
                <p>Confidence: {scan.aiResult.confidence}</p>
                <p>Tumor Size: {scan.aiResult.tumor_size}</p>
                <p>Stage: {scan.aiResult.stage}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}