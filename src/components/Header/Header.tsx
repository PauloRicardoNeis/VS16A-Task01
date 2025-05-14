import Link from 'next/link';
import styles from '@/components/Header/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    MeuSite
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/menu2">
                    Menu2
                </Link>
                <Link href="/menu3">
                    Menu3
                </Link>
            </nav>
        </header>
    );
}
