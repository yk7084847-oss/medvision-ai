import { Link, useLocation } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

import {
  FaHome,
  FaUserInjured,
  FaUpload,
  FaImages,
  FaRobot,
  FaFileMedical,
  FaCalendarAlt,
  FaClipboardList,
  FaSignInAlt,
  FaUserPlus,
  FaChartLine,
  FaSignOutAlt
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const handleLogout = async () => {
    try {

      await signOut(auth);

      alert("Logged Out");

      setIsOpen(false);

    } catch (error) {

      alert(error.message);

    }
  };

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartLine />
    },
    {
      name: "Add Patient",
      path: "/add-patient",
      icon: <FaUserInjured />
    },
    {
      name: "Upload Scan",
      path: "/upload-scan",
      icon: <FaUpload />
    },
    {
      name: "Scan Gallery",
      path: "/scan-gallery",
      icon: <FaImages />
    },
    {
      name: "AI Results",
      path: "/ai-results",
      icon: <FaRobot />
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileMedical />
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: <FaCalendarAlt />
    },
    {
      name: "Schedule",
      path: "/appointment-list",
      icon: <FaClipboardList />
    },
    {
      name: "Login",
      path: "/login",
      icon: <FaSignInAlt />
    },
    {
      name: "Signup",
      path: "/signup",
      icon: <FaUserPlus />
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 overflow-y-auto border-r border-white/10 bg-slate-950/95 p-6 backdrop-blur-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-2xl font-black text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              M
            </div>

            <div>
              <h1 className="text-2xl font-black text-cyan-300">
                MedVision AI
              </h1>

              <p className="text-xs text-slate-500">
                Medical Intelligence
              </p>
            </div>

          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-white/5 px-3 py-2 text-xl text-white transition-all hover:bg-red-500/20"
          >
            ✕
          </button>

        </div>

        {/* Navigation */}
        <nav className="space-y-3">

          {links.map((link) => {

            const isActive =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    : "border border-white/5 bg-white/5 text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                }`}
              >
                <span className="text-lg">
                  {link.icon}
                </span>

                {link.name}
              </Link>
            );
          })}

        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-8 flex w-full items-center gap-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/20"
        >
          <span className="text-lg">
            <FaSignOutAlt />
          </span>

          Logout
        </button>

      </aside>
    </>
  );
}