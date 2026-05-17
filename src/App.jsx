export default function MedVisionAIWebsite() {
  const features = [
    {
      title: 'AI Tumor Detection',
      description:
        'Advanced AI models analyze MRI, CT, X-ray, and pathology scans to detect tumors and malignant cells accurately.',
    },
    {
      title: 'Precise Tumor Localization',
      description:
        'Locate tumor position, measure size, estimate stage, and generate detailed reports for healthcare professionals.',
    },
    {
      title: 'Real-Time Monitoring',
      description:
        'Monitor patient health continuously with alerts, wearable integrations, and live health tracking.',
    },
    {
      title: 'Secure Medical Reports',
      description:
        'Store, retrieve, and compare medical reports securely with cloud backup and remote access support.',
    },
    {
      title: 'EMR Integration',
      description:
        'Connect seamlessly with existing EMR/EHR systems using HL7, FHIR, and DICOM standards.',
    },
    {
      title: 'Patient Care Tools',
      description:
        'Appointment scheduling, medication reminders, symptom logging, and telemedicine support in one platform.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              AI-Powered Healthcare Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              MedVision <span className="text-cyan-400">AI</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Intelligent medical imaging platform for tumor detection,
              cancer prediction, patient monitoring, and secure medical
              report management with real-time alerts.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-500 px-6 py-4 text-lg font-semibold hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30">
                Get Started
              </button>

              <button className="rounded-2xl border border-white/20 px-6 py-4 text-lg font-semibold hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Medical AI"
                className="rounded-2xl w-full h-[420px] object-cover"
              />

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-2xl bg-slate-900 p-4 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">98%</h3>
                  <p className="text-sm text-slate-400 mt-2">Detection Accuracy</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                  <p className="text-sm text-slate-400 mt-2">Monitoring</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">Secure</h3>
                  <p className="text-sm text-slate-400 mt-2">Cloud Backup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 lg:px-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Advanced Medical Features
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Comprehensive AI-powered healthcare tools designed to support
              doctors, radiologists, hospitals, and patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-400"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Upload Scan',
              'AI Analysis',
              'Tumor Detection',
              'Generate Report',
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-3xl bg-gradient-to-b from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 p-8 text-center"
              >
                <div className="text-5xl font-black text-cyan-400 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 py-20 lg:px-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Smart Healthcare Dashboard
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              View scan results, monitor patient progress, track appointments,
              analyze reports, and manage medications from one centralized
              dashboard.
            </p>

            <ul className="space-y-4 text-slate-300">
              <li>✔ Real-time tumor analysis</li>
              <li>✔ AI-powered report generation</li>
              <li>✔ Patient symptom tracking</li>
              <li>✔ Appointment scheduling system</li>
              <li>✔ Remote report access</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop"
              alt="Dashboard"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Revolutionizing Healthcare with AI
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
            Empower hospitals and healthcare professionals with intelligent
            tumor detection, patient monitoring, and secure medical data
            management.
          </p>

          <button className="rounded-2xl bg-cyan-500 px-8 py-5 text-xl font-bold hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30">
            Launch Platform
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-20">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-black text-cyan-400">MedVision AI</h2>
            <p className="text-slate-400 mt-2">
              Advanced Medical Imaging & Patient Monitoring Platform
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-all">
              Features
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Dashboard
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Reports
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
