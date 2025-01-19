import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { GoKebabHorizontal } from 'react-icons/go';
import Link from 'next/link';

function Footer() {
	return (
		<div className='w-full py-4 bg-blue-500 shadow-lg absolute bottom-0'>
			<div className='flex justify-around'>
				<Link href='/' className='text-white text-2xl'>
					<FaHome />
				</Link>
				<button className='text-white text-2xl'>
					<IoMdSettings />
				</button>
				<button className='text-white text-2xl'>
					<GoKebabHorizontal />
				</button>
			</div>
		</div>
	);
}

export default Footer;
