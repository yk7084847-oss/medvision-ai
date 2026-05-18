import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import UploadScan from "./pages/UploadScan";
import ScanGallery from "./pages/ScanGallery";
import Reports from "./pages/Reports";
import Appointments from "./pages/Appointments";
import AppointmentList from "./pages/AppointmentList";
import AIResults from "./pages/AIResults";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Top Navbar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur-xl">

        <div className="flex items-center gap-4">

          {/* Hamburger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-2xl bg-white/5 p-3 transition-all hover:bg-cyan-400/10"
          >
            <div className="space-y-1">
              <div className="h-1 w-6 rounded bg-cyan-300"></div>
              <div className="h-1 w-6 rounded bg-cyan-300"></div>
              <div className="h-1 w-6 rounded bg-cyan-300"></div>
            </div>
          </button>

          <div>
            <h1 className="text-2xl font-black text-cyan-300">
              MedVision AI
            </h1>

            <p className="text-sm text-slate-500">
              AI Healthcare Platform
            </p>
          </div>

        </div>

      </header>

      {/* Main Content */}
      <main className="min-h-screen p-6">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/add-patient" element={<AddPatient />} />

          <Route path="/upload-scan" element={<UploadScan />} />

          <Route path="/scan-gallery" element={<ScanGallery />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/appointments" element={<Appointments />} />

          <Route
            path="/appointment-list"
            element={<AppointmentList />}
          />

          <Route path="/ai-results" element={<AIResults />} />

        </Routes>

      </main>

    </div>
  );
}