import styles from '@/components/Footer/Footer.module.scss';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <Link href="/">Home</Link> |
                <Link href="/menu2">Menu2</Link> |
                <Link href="/menu3">Menu3</Link>
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