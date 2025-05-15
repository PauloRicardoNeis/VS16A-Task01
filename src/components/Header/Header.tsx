import Link from "next/link";
import styles from "@/components/Header/Header.module.scss";
import { navLinks } from "@/data/navLinks";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">MeuSite</Link>
            </div>
            <nav className={styles.nav}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
