import '@/styles/globals.scss'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

export const metadata = {
    title: 'Alexandre Cabanel',
    description: 'Explore the life and works of Alexandre Cabanel, a 19th-century French academic painter.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
                <div className="layout">
                    <Header/>
                    <NavBar/>
                    <main>{children}</main>
                    <Footer/>
                </div>

            </body>
        </html>
    )
}
