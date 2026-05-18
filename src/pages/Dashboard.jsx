import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebase/firebase";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const querySnapshot = await getDocs(collection(db, "patients"));
    const patientList = [];

    querySnapshot.forEach((doc) => {
      patientList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setPatients(patientList);
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged Out");
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            MedVision AI Control Center
          </p>

          <h1 className="text-5xl font-black text-white">
            Clinical Dashboard
          </h1>

          <p className="mt-3 text-slate-400">
            Monitor patients, AI scan results, reports, and medical workflow.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-2xl bg-red-500 px-7 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-red-400"
        >
          Logout
        </button>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">Total Patients</p>
          <h2 className="text-5xl font-black text-cyan-400">
            {patients.length}
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Registered patient records
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">AI Scans</p>
          <h2 className="text-5xl font-black text-cyan-400">12</h2>
          <p className="mt-3 text-sm text-slate-500">
            MRI analysis completed
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="mb-3 text-slate-400">Reports</p>
          <h2 className="text-5xl font-black text-cyan-400">8</h2>
          <p className="mt-3 text-sm text-slate-500">
            Medical reports generated
          </p>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black text-cyan-400">
              Patient Records
            </h2>
            <p className="mt-2 text-slate-400">
              Search and review all saved patient details.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search patient by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400 md:w-[320px]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl font-black text-cyan-300">
                {patient.name?.charAt(0)?.toUpperCase() || "P"}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                {patient.name}
              </h3>

              <p className="text-slate-300">Age: {patient.age}</p>

              <p className="mt-1 text-slate-300">
                Condition: {patient.condition}
              </p>

              <div className="mt-5 rounded-2xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Active Patient
              </div>
            </div>
          ))}

          {filteredPatients.length === 0 && (
            <p className="text-slate-400">
              No patient found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}