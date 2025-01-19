'use client';
import React, { useState } from 'react';

function OptionsPage() {
	const [options, setOptions] = useState([
		{
			id: 1,
			title: 'I would like to pick up my child',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 2,
			title: 'I am facing technical issues',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 3,
			title: 'I have meeting with a consular',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 4,
			title: "My child's details isn't completed",
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 5,
			title: 'I have meeting with a teacher',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 6,
			title: 'I have a complaint',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 7,
			title: 'Transportation',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
		{
			id: 8,
			title: 'Other...',
			message: [
				'A message has been sent to the security and the student.',
				'Please show your Emirates ID for verifications and approval.',
				'Please have a seat the student will come within a few minutes',
			],
		},
	]);
	const [selectedOption, setSelectedOption] = useState({});
	return (
		<div className='w-11/12'>
			{!selectedOption?.id ? (
				<div>
					<div>
						<h2 className='text-2xl text-center py-5'>
							How would you like us to connect you?
						</h2>
					</div>
					<div className='grid grid-cols-2 gap-2 text-center'>
						{options.map((option) => (
							<p
								key={option.id}
								onClick={() => setSelectedOption(option)}
								className='row-span-1 border border-black p-3 hover:border-green-600 transition-all hover:text-green-600 hover:cursor-pointer'
							>
								{option.title}
							</p>
						))}
					</div>
				</div>
			) : (
				<div className='text-center'>
					<div>
						<p className='row-span-1 border border-black p-3'>
							{selectedOption?.title}
						</p>
					</div>
					<div>
						{selectedOption?.message?.map((message, index) => (
							<p
								className='text-lg text-blue-700 p-5'
								key={index}
							>
								{message}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default OptionsPage;
