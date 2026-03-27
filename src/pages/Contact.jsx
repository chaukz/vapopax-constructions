import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import house2 from "../assets/house2.jpg";

export default function Contact() {
  // Form state — one object holding all field values
  // This is cleaner than having 4 separate useState calls
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Track submission status
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  // Single handler for all inputs
  // e.target.name matches the name="" attribute on each input
  // e.target.value is what the user typed
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form submission — will POST to Express API later
  const handleSubmit = async (e) => {
    e.preventDefault(); // stops page reload — same as in vanilla JS
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (_err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* PAGE HEADER */}
      <div className="relative py-16 text-center overflow-hidden">
        <img
          src={house2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">
            Contact Us
          </h1>
          <p className="text-gray-400 text-sm">
            Let's discuss your next project
          </p>
        </div>
      </div>

      {/* MAIN CONTENT — form left, details right */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — CONTACT FORM */}
        <div>
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Send Us a Message
          </p>
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+27 82 123 4567"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent! We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Please try again or call us directly.
              </p>
            )}

          </form>
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div>
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Our Details
          </p>
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>

          <div className="flex flex-col gap-6 mb-10">

            <div className="flex items-start gap-4">
              <div className="text-emerald-400 mt-1"><MapPin size={20} /></div>
              <div>
                <p className="text-white font-semibold mb-1">Physical Address</p>
                <p className="text-gray-400 text-sm">Pretoria, Gauteng, South Africa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-emerald-400 mt-1"><Phone size={20} /></div>
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                <a href="tel:+27120000000" className="text-gray-400 text-sm hover:text-emerald-400 transition">
                  +27 (0) 12 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-emerald-400 mt-1"><Mail size={20} /></div>
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <a href="mailto:info@vapopax.co.za" className="text-gray-400 text-sm hover:text-emerald-400 transition">
                  info@vapopax.co.za
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-emerald-400 mt-1"><Clock size={20} /></div>
              <div>
                <p className="text-white font-semibold mb-1">Business Hours</p>
                <p className="text-gray-400 text-sm">Monday – Friday: 07:00 – 17:00</p>
                <p className="text-gray-400 text-sm">Saturday: 08:00 – 13:00</p>
              </div>
            </div>

          </div>

          {/* MAP PLACEHOLDER — replace with Google Maps embed later */}
          <div className="relative h-64 rounded-lg overflow-hidden border border-zinc-800">
            <img
              src={house2}
              alt="map placeholder"
              className="w-full h-full object-cover grayscale opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Google Maps embed coming soon</p>
            </div>
          </div>

        </div>

      </div>

      <hr className="border-t border-zinc-800" />

    </div>
  );
}