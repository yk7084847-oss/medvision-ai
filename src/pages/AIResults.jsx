import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AIResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const querySnapshot = await getDocs(collection(db, "aiResults"));
    const list = [];

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setResults(list);
  };

  const getConfidenceNumber = (confidence) => {
    if (!confidence) return 0;
    return Number(String(confidence).replace("%", ""));
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          AI Diagnostic History
        </p>

        <h1 className="text-5xl font-black">
          AI Results Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Review saved scan predictions, confidence levels, tumor size estimates,
          and AI-generated diagnostic summaries.
        </p>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">Total AI Analyses</p>
          <h2 className="text-5xl font-black text-cyan-400">
            {results.length}
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">Tumor Alerts</p>
          <h2 className="text-5xl font-black text-red-300">
            {results.filter((item) =>
              item.result?.toLowerCase().includes("tumor")
            ).length}
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">System Status</p>
          <h2 className="text-3xl font-black text-emerald-300">
            Active
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => {
          const confidenceValue = getConfidenceNumber(item.confidence);

          return (
            <div
              key={item.id}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Scan File
                  </p>

                  <h2 className="mt-1 line-clamp-1 text-xl font-black text-cyan-300">
                    {item.fileName}
                  </h2>
                </div>

                <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-bold text-red-300">
                  Review
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-500">AI Result</p>
                  <p className="mt-1 font-bold text-white">
                    {item.result}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">Confidence</span>
                    <span className="font-bold text-cyan-300">
                      {item.confidence}
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${confidenceValue}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-500">
                      Tumor Size
                    </p>
                    <p className="mt-1 text-lg font-black text-cyan-300">
                      {item.tumorSize}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-500">
                      Stage
                    </p>
                    <p className="mt-1 text-lg font-black text-red-300">
                      {item.stage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {results.length === 0 && (
          <p className="text-slate-400">
            No AI results found yet.
          </p>
        )}
      </div>
    </div>
  );
}