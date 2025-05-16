import ClientLayout from "@/components/ClientLayout";
import '@/styles/globals.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Alexandre Cabanel',
    description: 'Explore the life and works of Alexandre Cabanel...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ClientLayout>
            <div className="layout">
                <Header />
                <NavBar />
                <main>{children}</main>
                <Footer />
            </div>
        </ClientLayout>
        </body>
        </html>
    );
}