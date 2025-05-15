import Link from "next/link";
import styles from "@/components/NavBar/NavBar.module.scss";
import { navLinks } from "@/data/navLinks";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
