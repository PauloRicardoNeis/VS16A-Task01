// src/components/NavBar.tsx
import Link from 'next/link'
import styles from '@/styles/NavBar.module.scss'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <Link href="/" legacyBehavior><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/menu2" legacyBehavior><a>Menu 2</a></Link>
                </li>
                <li>
                    <Link href="/menu3" legacyBehavior><a>Menu 3</a></Link>
                </li>
            </ul>
        </nav>
    )
}
