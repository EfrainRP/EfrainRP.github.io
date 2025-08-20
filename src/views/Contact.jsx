import React, { useState, useEffect } from "react";
import Layout from "../Layout.jsx";
import Hero from "../component/Hero.jsx";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    // const [status, setStatus] = useState(null);
    const [alert, setAlert] = useState(null); 

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const showAlert = (type, message) => {
        setAlert({ type, message });
        setTimeout(() => setAlert(null), 3000); // se oculta después de 3s
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // setStatus(null);
        try {

            const res = await emailjs.send(
                "service_jfl9ntn", // tu service ID
                "template_tnpj2pp", // tu template ID
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                "UMVvk2CdcO-VUUYU2" // tu public key
            );

            // console.log("Email enviado ✅", res);
            showAlert("success", "Message sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
            e.target.reset();
        } catch (err) {
            // console.error("Error ❌", err);
            // setStatus("error");
            showAlert("error","Error sending message, please try again.");
        } finally {
            setLoading(false); // 🔹 ahora sí se apaga después del envío
        }
    };

    useEffect(() => {
    if (alert) {
        console.log("Alert actual:", alert);
    }
}, [alert]);

    return (
        <Layout className="bg-gradient-to-b from-gray-800 to-white animate-fade-in">
            <div className="max-w-3xl mx-auto mt-15 px-6 py-10 text-gray-800">
                <h2 className="text-2xl text-gray-100 font-bold mb-6">
                    Contact Me
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-md"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <div className="h-6 w-6 mr-2 rounded-full border-4 border-gray-300 border-t-blue-400 animate-spin"></div>
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                    {/* {status === "success" && (
                        <p className="text-green-600 text-sm mt-2"> Message sended. ✅</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 text-sm mt-2"> Error, try again. ❌</p>
                    )} */}
                </form>
                {alert && (
                    <div
                        className={`fixed z-[9999] bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white transform transition-all duration-500
                        ${alert.type === "success" ? "bg-green-700" : "bg-red-700/85"}
                        ${alert ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
                        `}
                    >
                        {alert.message}
                    </div>
                )}
            </div>
            <Hero className={'py-10 md:pt-1 md:pb-5'} wPhoto={"w-30"} classNameTittle={"md:mt-6 text-2xl"}/>
        </Layout>
    );
}
