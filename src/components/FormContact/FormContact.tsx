"use client";
import { useState } from "react";
import styles from "./FormContact.module.scss";

export default function FormContato() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada!");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="nome" name="nome" value={form.name} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />

            <label htmlFor="message">Message</label>
            <textarea id="mensagem" name="message" rows={5} value={form.message} onChange={handleChange} />

            <button type="submit">Enviar</button>
        </form>
    );
}
