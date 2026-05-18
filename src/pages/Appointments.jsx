import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Appointments() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const saveAppointment = async () => {
    try {
      await addDoc(collection(db, "appointments"), {
        patientName,
        doctorName,
        date,
        time,
        createdAt: new Date(),
      });

      alert("Appointment saved successfully");

      setPatientName("");
      setDoctorName("");
      setDate("");
      setTime("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="bg-slate-900 p-10 rounded-3xl w-[450px]">
        <h1 className="text-4xl font-black text-cyan-400 mb-8 text-center">
          Appointment Scheduling
        </h1>

        <input
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        />

        <input
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-6"
        />

        <button
          onClick={saveAppointment}
          className="w-full bg-cyan-500 hover:bg-cyan-400 p-4 rounded-xl text-xl font-bold"
        >
          Save Appointment
        </button>
      </div>
    </div>
  );
}