"use client";
import { useState } from "react";
import styles from "./FormContact.module.scss";

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={5} value={form.mensagem} onChange={handleChange} />

            <button type="submit">Enviar</button>
        </form>
    );
}
