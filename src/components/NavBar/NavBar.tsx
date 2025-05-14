import Link from 'next/link'
import styles from '@/components/NavBar/NavBar.module.scss'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/menu2">Menu 2</Link>

                    <Link href="/menu3">Menu 3</Link>
                </li>
            </ul>
        </nav>
    )
}
