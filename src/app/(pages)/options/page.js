'use client';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { RiParentLine } from 'react-icons/ri';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import { PiHeadCircuitFill } from 'react-icons/pi';
import { FaPenNib } from 'react-icons/fa';
import { PiChalkboardTeacherFill } from 'react-icons/pi';
import { BiSolidBusSchool } from 'react-icons/bi';
import { GrCompliance } from 'react-icons/gr';
import { BsFillMotherboardFill } from 'react-icons/bs';

function OptionsPage({ params }) {
	const searchParams = useSearchParams();
	const [options, setOptions] = useState();
	const [loading, setLoading] = useState(true);
	const lang = searchParams.get('lang');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`${lang === 'en' ? 'optionData.json' : 'optionDataArabic.json'}`
			);
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
		<>
			{lang === 'ar' ? (
				<div className='w-11/12'>
					<div>
						<div>
							<h2 className='text-2xl text-center py-5'>
								{lang === 'en'
									? 'How would you like us to connect you?'
									: 'كيف تريد أن نوصلك؟'}
							</h2>
						</div>
						<div className='grid grid-cols-2 gap-2'>
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
									className='row-span-1 border border-black px-2 py-3 bg-[#ffffff4f]  hover:bg-white rounded-md hover:shadow-md hover:border-blue-600 transition-all hover:-translate-y-1 hover:text-blue-600 hover:cursor-pointer grid grid-cols-3'
								>
									<span className='col-span-1 flex justify-center items-center'>
										{option?.icon ===
											'BsFillMotherboardFill' && (
											<BsFillMotherboardFill className='text-4xl' />
										)}
										{option?.icon === 'GrCompliance' && (
											<GrCompliance className='text-4xl' />
										)}
										{option?.icon ===
											'BiSolidBusSchool' && (
											<BiSolidBusSchool className='text-4xl' />
										)}
										{option?.icon ===
											'PiChalkboardTeacherFill' && (
											<PiChalkboardTeacherFill className='text-4xl' />
										)}
										{option?.icon === 'FaPenNib' && (
											<FaPenNib className='text-4xl' />
										)}
										{option?.icon ===
											'PiHeadCircuitFill' && (
											<PiHeadCircuitFill className='text-4xl' />
										)}
										{option?.icon ===
											'AiOutlineIssuesClose' && (
											<AiOutlineIssuesClose className='text-4xl' />
										)}
										{option?.icon === 'RiParentLine' && (
											<RiParentLine className='text-4xl' />
										)}
									</span>
									<div className='col-span-2 flex flex-col'>
										<span className='text-lg font-sans'>
											{option?.title}
										</span>
										<span className='text-xs text-gray-700'>
											{option?.subtitle}
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className='w-11/12'>
					<div>
						<div>
							<h2 className='text-2xl text-center py-5'>
								How would you like us to connect you?
							</h2>
						</div>
						<div className='grid grid-cols-2 gap-2'>
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
									className='row-span-1 border border-black px-2 py-3 bg-[#ffffff4f]  hover:bg-white rounded-md hover:shadow-md hover:border-blue-600 transition-all hover:-translate-y-1 hover:text-blue-600 hover:cursor-pointer grid grid-cols-3'
								>
									<span className='col-span-1 flex justify-center items-center'>
										{option?.icon ===
											'BsFillMotherboardFill' && (
											<BsFillMotherboardFill className='text-4xl' />
										)}
										{option?.icon === 'GrCompliance' && (
											<GrCompliance className='text-4xl' />
										)}
										{option?.icon ===
											'BiSolidBusSchool' && (
											<BiSolidBusSchool className='text-4xl' />
										)}
										{option?.icon ===
											'PiChalkboardTeacherFill' && (
											<PiChalkboardTeacherFill className='text-4xl' />
										)}
										{option?.icon === 'FaPenNib' && (
											<FaPenNib className='text-4xl' />
										)}
										{option?.icon ===
											'PiHeadCircuitFill' && (
											<PiHeadCircuitFill className='text-4xl' />
										)}
										{option?.icon ===
											'AiOutlineIssuesClose' && (
											<AiOutlineIssuesClose className='text-4xl' />
										)}
										{option?.icon === 'RiParentLine' && (
											<RiParentLine className='text-4xl' />
										)}
									</span>
									<div className='col-span-2 flex flex-col'>
										<span className='text-lg font-sans'>
											{option?.title}
										</span>
										<span className='text-xs text-gray-700'>
											{option?.subtitle}
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default function OptionsPageWithSuspense() {
	return (
		<Suspense fallback={<Loading />}>
			<OptionsPage />
		</Suspense>
	);
}
