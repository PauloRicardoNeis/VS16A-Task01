import '@/styles/globals.scss'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

export const metadata = {
    title: 'Meu Projeto',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body>
        <Header />
        <NavBar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    )
}
