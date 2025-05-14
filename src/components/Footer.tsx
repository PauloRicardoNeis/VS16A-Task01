import styles from '@/styles/Footer.module.scss';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <Link href="/home" legacyBehavior><a>Home</a></Link> |
                <Link href="/menu2" legacyBehavior><a>Menu2</a></Link> |
                <Link href="/menu3" legacyBehavior><a>Menu3</a></Link>
            </nav>
            <p>&copy; {new Date().getFullYear()} Paulo Neis. Todos os direitos reservados.</p>

            <small>
                Desenvolvido por <a href="https://github.com/PauloRicardoNeis">PauloRicardoNeis</a>
            </small>

            <div className={styles.tech}>
                Feito com Next.js · Sass · TypeScript
            </div>

        </footer>
    )
}