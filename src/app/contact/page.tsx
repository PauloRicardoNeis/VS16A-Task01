import FormContact from "@/components/FormContact/FormContact";
import Title from "@/components/Title/Title";

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <p>
                Have any questions, suggestions, or want to know more about our project?
                Feel free to reach out by filling out the form below.
                We’ll get back to you as soon as possible!
            </p>

            <FormContact />

            <section style={{ marginTop: "2rem" }}>
                <h2>Other ways to reach us</h2>
                <ul>
                    <li>Email: <a href="mailto:contato@meusite.com">contato@meusite.com</a></li>
                    <li>GitHub: <a href="https://github.com/PauloRicardoNeis" target="_blank">/PauloRicardoNeis</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/paulo-ricardo-neis-463a3525a/" target="_blank">My profile</a></li>
                </ul>
            </section>
        </>
    );
}
