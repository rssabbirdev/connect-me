'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

function Header() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatDate = (date) => {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const formatTime = (date) => {
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true,
		});
	};

	return (
		<div className='w-full flex justify-center py-2 px-3'>
			{/* Date and Time Display */}
			<div className='w-full mb-8'>
				<div className='inline-flex items-center space-x-2 text-blue-900 mb-2'>
					<FaCalendarAlt />
					<span className='text-lg'>{formatDate(currentTime)}</span>
				</div>
				<div className='inline-flex items-center space-x-2 text-blue-900'>
					<FaClock />
					<span className='text-2xl font-mono'>
						{formatTime(currentTime)}
					</span>
				</div>
			</div>
			<Link href='/'>
				<Image
					className=''
					src='/ATS_Logo-Final.png'
					alt='logo'
					width={200}
					height={38}
				/>
			</Link>
		</div>
	);
}

export default Header;
