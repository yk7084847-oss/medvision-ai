import jsPDF from "jspdf";

export default function Reports() {
  const generateReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("MedVision AI Medical Report", 20, 20);

    doc.setFontSize(12);
    doc.text("Patient Name: Sample Patient", 20, 40);
    doc.text("Age: 45", 20, 50);
    doc.text("Scan Type: MRI Brain Scan", 20, 60);
    doc.text("AI Finding: Possible Tumor Detected", 20, 70);
    doc.text("Confidence: 94%", 20, 80);
    doc.text("Recommendation: Review by certified medical professional.", 20, 90);

    doc.save("medvision-ai-report.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-3xl w-[450px] text-center">
        <h1 className="text-4xl font-black text-cyan-400 mb-6">
          Medical Reports
        </h1>

        <p className="text-slate-300 mb-8">
          Generate downloadable AI medical report.
        </p>

        <button
          onClick={generateReport}
          className="w-full bg-cyan-500 hover:bg-cyan-400 p-4 rounded-xl text-xl font-bold"
        >
          Download PDF Report
        </button>
      </div>
    </div>
  );
}