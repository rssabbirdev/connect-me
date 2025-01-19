import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex justify-center flex-col items-center w-full gap-14'>
			<div className='flex justify-center items-center flex-col'>
				<Image src='/logo.png' alt='logo' width={100} height={38} />
				<h2 className='text-2xl font-bold'>CONNECT ME</h2>
				<p className='tracking-widest'>Parent Visits Simplified</p>
			</div>
			<div className='flex flex-col gap-5 w-2/4'>
				<Link
					className='border border-black rounded-full px-10 py-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 transition-all text-center'
					href={'/checking/en'}
				>
					English
				</Link>
				<Link
					className='border border-black rounded-full px-10 py-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 transition-all text-center'
					href={'/checking/ar'}
				>
					Arabic
				</Link>
			</div>
		</div>
	);
}
