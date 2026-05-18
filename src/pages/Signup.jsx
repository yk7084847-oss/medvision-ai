import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      alert("Signup Successful");

      console.log(userCredential.user);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500 text-3xl font-black text-slate-950">
            M
          </div>

          <h1 className="text-4xl font-black text-cyan-400">
            Create Account
          </h1>

          <p className="mt-3 text-slate-400">
            Join MedVision AI and access intelligent healthcare tools.
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyan-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full rounded-2xl bg-cyan-500 p-4 text-xl font-black text-slate-950 transition-all hover:scale-[1.02] hover:bg-cyan-400"
          >
            Create Account
          </button>

        </div>

      </div>
    </div>
  );
}