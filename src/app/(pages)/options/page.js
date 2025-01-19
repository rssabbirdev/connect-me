'use client';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function OptionsPage() {
	const searchParams = useSearchParams();
	const [options, setOptions] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/optionData.json');
			const data = await response.json();
			setOptions(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <Loading />;
	}
	return (
		<div className='w-11/12'>
			<div>
				<div>
					<h2 className='text-2xl text-center py-5'>
						How would you like us to connect you?
					</h2>
				</div>
				<div className='grid grid-cols-2 gap-2 text-center'>
					{options?.map((option) => (
						<Link
							href={
								'/checkout?' +
								searchParams +
								'&optionId=' +
								option?.id
							}
							key={option.id}
							onClick={() => setSelectedOption(option)}
							className='row-span-1 border border-black p-3 hover:border-green-600 transition-all hover:text-green-600 hover:cursor-pointer'
						>
							{option.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default OptionsPage;
