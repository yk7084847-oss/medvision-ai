export default function Home() {
  return (
    <div className="min-h-screen px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Hero Section */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              AI-Powered Medical Imaging Platform
            </div>

            <h1 className="mb-8 text-6xl font-black leading-tight">
              Transforming MRI Analysis With
              <span className="text-cyan-400"> Artificial Intelligence</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-300">
              MedVision AI helps doctors and healthcare professionals
              analyze MRI scans faster using AI-powered medical imaging,
              patient management, real-time reports, and intelligent diagnostics.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-400">
                Start AI Analysis
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all hover:border-cyan-400 hover:text-cyan-300">
                Explore Dashboard
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl"></div>

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="mb-6 flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    MRI Analysis Dashboard
                  </h2>

                  <p className="text-slate-400">
                    Real-time AI diagnostics
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950">
                  LIVE
                </div>

              </div>

              <div className="space-y-5">

                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                      Brain MRI Scan
                    </h3>

                    <span className="rounded-xl bg-red-500/20 px-3 py-1 text-sm text-red-300">
                      Detected
                    </span>
                  </div>

                  <p className="mb-4 text-slate-400">
                    AI identified abnormal tissue pattern.
                  </p>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[94%] rounded-full bg-cyan-400"></div>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Confidence: 94%
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-3xl bg-slate-900/80 p-6">
                    <p className="mb-2 text-slate-400">
                      Patients
                    </p>

                    <h3 className="text-4xl font-black text-cyan-400">
                      128
                    </h3>
                  </div>

                  <div className="rounded-3xl bg-slate-900/80 p-6">
                    <p className="mb-2 text-slate-400">
                      AI Reports
                    </p>

                    <h3 className="text-4xl font-black text-cyan-400">
                      342
                    </h3>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}