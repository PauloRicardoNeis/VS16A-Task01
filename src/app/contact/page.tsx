import FormContact from "@/components/FormContact/FormContact";
import Titulo from "@/components/Title/Title";

export default function Contato() {
    return (
        <>
            <Titulo text="Contato" />
            <p>
                Tem alguma dúvida, sugestão ou deseja saber mais sobre nosso projeto?
                Fique à vontade para entrar em contato preenchendo o formulário abaixo.
                Responderemos o mais breve possível!
            </p>

            <FormContact />

            <section style={{ marginTop: "2rem" }}>
                <h2>Outras formas de contato</h2>
                <ul>
                    <li>Email: <a href="mailto:contato@meusite.com">contato@meusite.com</a></li>
                    <li>GitHub: <a href="https://github.com/PauloRicardoNeis" target="_blank">/PauloRicardoNeis</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/paulo-ricardo-neis-463a3525a/" target="_blank">Meu perfil</a></li>
                </ul>
            </section>
        </>
    );
}
