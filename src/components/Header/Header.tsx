import Link from "next/link";
import styles from "@/components/Header/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Alexandre Cabanel</Link>
            </div>
        </header>
    );
}
