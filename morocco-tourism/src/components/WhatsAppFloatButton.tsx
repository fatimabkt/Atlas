"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappBookingLink } from "@/data/site";

export default function WhatsAppFloatButton() {
  const link = whatsappBookingLink("Morocco trip");

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)]"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
