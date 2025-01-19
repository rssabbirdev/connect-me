import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
	return (
		<div className='w-full flex justify-center py-2'>
			<Link href='/'>
				<Image
					className=''
					src='/ATS_Logo-Final.png'
					alt='logo'
					width={180}
					height={38}
				/>
			</Link>
		</div>
	);
}

export default Header;
