"use client";
import { useState } from "react";

export default function FormContato() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" placeholder="Seu nome" onChange={handleChange} />
            <input name="email" type="email" placeholder="Seu email" onChange={handleChange} />
            <textarea name="mensagem" placeholder="Sua mensagem" onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
}
