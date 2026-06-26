"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError(null);

    // No backend/payment/account system — we hand the message straight to
    // WhatsApp, pre-filled, so a real person replies directly.
    const text = `Hello, my name is ${form.name}.%0A%0A${form.message}%0A%0A(Email: ${form.email}${
      form.phone ? `, Phone: ${form.phone}` : ""
    })`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/75 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-cream text-ink placeholder:text-ink/35 focus:border-terracotta outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink/75 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-cream text-ink placeholder:text-ink/35 focus:border-terracotta outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink/75 mb-1.5">
          Phone / WhatsApp <span className="text-ink/40">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+1 234 567 8901"
          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-cream text-ink placeholder:text-ink/35 focus:border-terracotta outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/75 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your dates, group size, and what you'd love to see in Morocco..."
          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-cream text-ink placeholder:text-ink/35 focus:border-terracotta outline-none transition-colors resize-none"
        />
      </div>

      {error && <p className="text-sm text-terracotta">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-terracotta text-cream font-semibold hover:bg-indigo transition-colors duration-300"
      >
        <Send size={17} />
        Send via WhatsApp
      </button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-indigo font-medium"
        >
          <CheckCircle2 size={16} />
          Opening WhatsApp with your message — send it to reach us instantly.
        </motion.p>
      )}
    </form>
  );
}
