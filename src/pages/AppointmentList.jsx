import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const querySnapshot = await getDocs(collection(db, "appointments"));

    const list = [];

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setAppointments(list);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-black text-cyan-400 mb-10">
        Appointment List
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-slate-900 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">
              {appointment.patientName}
            </h2>

            <p>Doctor: {appointment.doctorName}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}