import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Connect Me - Parent Visits Simplified',
	description: 'Develop By rssabbirdev',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-h-screen relative bg-university-bg bg-no-repeat bg-cover backdrop-blur layout-bg`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
