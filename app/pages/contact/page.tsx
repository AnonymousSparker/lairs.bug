"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/animations";
import { Send, Loader2, CheckCircle2, Terminal, AlertCircle, Minus, Square, X } from "lucide-react";
import { motion } from "framer-motion";
import { app, db } from "@/firebase.config";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, User } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth(app);
    const initAuth = async () => {
      try {
        const token = (window as any).__initial_auth_token;
        if (token) await signInWithCustomToken(auth, token);
        else await signInAnonymously(auth);
      } catch (err) {
        console.error("Authentication failed", err);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { name, email, message } = data;

    if (!name || !email || !message) {
        setStatus("error");
        return;
    }

    try {
      const appId = (window as any).__app_id || 'default-app-id';
      const contactsCollection = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');
      await addDoc(contactsCollection, {
        name, email, message, userId: user.uid, createdAt: serverTimestamp(),
      });
      setStatus("success");
      setTimeout(() => {
        if (e.target) (e.target as HTMLFormElement).reset();
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-16 pb-20 font-mono">
      <FadeIn>
        <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#0B132B] mb-2 flex items-center gap-3 md:justify-start justify-center">
                <span className="text-[#5BC0BE]">{`./`}</span>contact_me<span className="animate-pulse">_</span>
            </h1>
            <p className="text-[#3A506B]">
                Initialize communication protocol. Responding within 24h cycles.
            </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        {/* Terminal Window Container */}
        <div className="border-2 border-[#0B132B] bg-white shadow-[12px_12px_0px_0px_#0B132B] overflow-hidden">
            
            {/* Window Title Bar */}
            <div className="bg-[#0B132B] p-3 flex items-center justify-between border-b-2 border-[#0B132B]">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#5BC0BE]" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase">Comms_Uplink.exe</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-4 h-4 border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer"><Minus className="w-3 h-3 text-white" /></div>
                    <div className="w-4 h-4 border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer"><Square className="w-2 h-2 text-white" /></div>
                    <div className="w-4 h-4 border border-white/30 flex items-center justify-center hover:bg-red-500 cursor-pointer group"><X className="w-3 h-3 text-white" /></div>
                </div>
            </div>

            {/* Terminal Content Area */}
            <div className="p-6 md:p-8 bg-[#f8fafc]">
                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Status Log Area */}
                    <div className="font-mono text-xs space-y-1 border-l-2 border-[#e2e8f0] pl-4 mb-8 text-[#3A506B]/70">
                        <p>{`> System check... OK`}</p>
                        <p>{`> Connection established: ${user ? "SECURE" : "WAITING..."}`}</p>
                        <p>{`> Awaiting user input...`}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-xs font-bold text-[#0B132B] uppercase flex items-center gap-2">
                                <span className="text-[#5BC0BE]">{`>`}</span> User_ID
                            </label>
                            <input 
                                id="name" name="name" required 
                                className="w-full bg-transparent border-b-2 border-[#e2e8f0] py-2 text-[#0B132B] focus:border-[#0B132B] focus:outline-none transition-all placeholder:text-[#3A506B]/30 font-bold"
                                placeholder="ENTER_NAME"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="email" className="text-xs font-bold text-[#0B132B] uppercase flex items-center gap-2">
                                <span className="text-[#5BC0BE]">{`>`}</span> Signal_Route
                            </label>
                            <input 
                                id="email" name="email" type="email" required 
                                className="w-full bg-transparent border-b-2 border-[#e2e8f0] py-2 text-[#0B132B] focus:border-[#0B132B] focus:outline-none transition-all placeholder:text-[#3A506B]/30 font-bold"
                                placeholder="ENTER_EMAIL"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="message" className="text-xs font-bold text-[#0B132B] uppercase flex items-center gap-2">
                            <span className="text-[#5BC0BE]">{`>`}</span> Data_Packet
                        </label>
                        <textarea 
                            id="message" name="message" required rows={4}
                            className="w-full bg-white border-2 border-[#e2e8f0] p-4 text-[#0B132B] focus:border-[#0B132B] focus:outline-none transition-all placeholder:text-[#3A506B]/30 resize-none font-medium shadow-inner"
                            placeholder="Start typing transmission..."
                        />
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-[#e2e8f0] border-dashed">
                        <div className="text-xs text-[#3A506B]">
                            {status === "idle" && "Ready to send."}
                            {status === "loading" && "Encrypting & Uploading..."}
                            {status === "success" && <span className="text-green-600 font-bold">Transmission Complete.</span>}
                            {status === "error" && <span className="text-red-600 font-bold">Error: Network Failure.</span>}
                        </div>

                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            disabled={status === "loading" || status === "success" || !user}
                            className={`px-8 py-3 font-bold text-sm flex items-center gap-2 transition-all border-2
                                ${status === "success" 
                                    ? "bg-green-500 border-green-600 text-white cursor-default" 
                                    : "bg-[#0B132B] border-[#0B132B] text-white hover:bg-[#1C2541] hover:shadow-[4px_4px_0px_0px_#5BC0BE]"}
                                ${(status === "loading" || !user) ? "opacity-50 cursor-wait" : ""}
                            `}
                        >
                            {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                            {status === "success" && <CheckCircle2 className="w-4 h-4" />}
                            {status === "idle" && <Send className="w-4 h-4" />}
                            <span>{status === "idle" ? "EXECUTE" : status === "success" ? "SENT" : "PROCESSING"}</span>
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
      </FadeIn>
    </div>
  );
}
