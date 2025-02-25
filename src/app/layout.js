import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Script from 'next/script';

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
		<html lang='en' translate='no'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-h-screen relative bg-university-bg bg-no-repeat bg-cover backdrop-blur layout-bg`}
			>
				<Header />
				{children}
				<Footer />
				<Script
					src='//code.tidio.co/mlvda4pok1zpxcuuxcuzjy8qlxstwlal.js'
					async
				></Script>
			</body>
		</html>
	);
}
