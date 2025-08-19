import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import Hero from "../component/Hero.jsx";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto mt-15 px-6 py-10 text-gray-800">
                <h2 className="text-2xl text-gray-100 font-bold mb-6">Envíanos un mensaje</h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-md"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "Enviando..." : "Enviar mensaje"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600 text-sm mt-2">✅ Mensaje enviado correctamente.</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 text-sm mt-2">❌ Ocurrió un error, intenta de nuevo.</p>
                    )}
                </form>
            </div>
            <Hero py={'py-10 md:pt-8 md:pb-15'} wPhoto={'w-30'} textTitle='3' />
        </Layout>
    );
}
