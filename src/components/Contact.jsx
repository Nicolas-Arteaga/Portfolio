import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Toast = ({ toast, onClose }) => (
  <AnimatePresence>
    {toast && (
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className='fixed bottom-6 right-6 z-50 max-w-[340px]'
      >
        <div
          className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur-md ${
            toast.type === "success"
              ? "bg-[#1d1836]/90 border-[#00cea8]/40"
              : "bg-[#2a1836]/90 border-[#ff5470]/40"
          }`}
        >
          <span
            className={`mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${
              toast.type === "success" ? "bg-[#00cea8]" : "bg-[#ff5470]"
            }`}
          >
            {toast.type === "success" ? "✓" : "!"}
          </span>
          <p className='text-white text-[14px] leading-[20px]'>{toast.msg}</p>
          <button
            onClick={onClose}
            aria-label='Cerrar'
            className='ml-1 text-secondary hover:text-white text-[16px] leading-none'
          >
            ×
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("request failed");

      setLoading(false);
      setToast({
        type: "success",
        msg: "¡Mensaje enviado! Te respondo lo antes posible.",
      });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setLoading(false);
      console.error(err);
      setToast({
        type: "error",
        msg: "No se pudo enviar. Probá de nuevo o escribime a nicolasmarceloarteaga@gmail.com",
      });
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <Toast toast={toast} onClose={() => setToast(null)} />

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ponte en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='¿Cómo te llamás?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu correo</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='¿Cuál es tu email?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu mensaje</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='¿Qué querés decir?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* honeypot anti-spam: oculto para humanos, tentador para bots */}
          <input
            type='text'
            name='company'
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete='off'
            className='hidden'
            aria-hidden='true'
          />

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
