import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");

  const handleAddPatient = async () => {
    try {
      await addDoc(collection(db, "patients"), {
        name,
        age,
        condition,
        createdAt: new Date()
      });

      alert("Patient added successfully");

      setName("");
      setAge("");
      setCondition("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-3xl w-[420px]">
        <h1 className="text-4xl font-black text-cyan-400 mb-8 text-center">
          Add Patient
        </h1>

        <input
          placeholder="Patient Name"
          value={name}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Age"
          value={age}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          placeholder="Condition"
          value={condition}
          className="w-full p-4 rounded-xl bg-slate-800 mb-6"
          onChange={(e) => setCondition(e.target.value)}
        />

        <button
          onClick={handleAddPatient}
          className="w-full bg-cyan-500 hover:bg-cyan-400 p-4 rounded-xl text-xl font-bold"
        >
          Save Patient
        </button>
      </div>
    </div>
  );
}