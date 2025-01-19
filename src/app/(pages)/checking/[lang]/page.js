import React from 'react';
import Form from 'next/form';

function EnglishChecking() {
	return (
		<div>
			<div>
				<p className='text-lg text-center mb-2'>
					Please fill in the information below
				</p>
			</div>
			<div className='text-lg'>
				<Form action={'/options'} scroll={false} className='space-y-3'>
					<div className='grid grid-cols-5 gap-3 items-center'>
						<label className='col-span-2' for='parentName'>
							Parent Name:
						</label>
						<input
							required
							className='col-span-3 border border-black p-1 rounded'
							type='text'
							id='parentName'
							name='parentName'
							// autoComplete='off'
							placeholder='Enter parent name'
						/>
					</div>
					<div className='grid grid-cols-5 gap-3 items-center'>
						<label className='col-span-2' for='phoneNumber'>
							Phone Number:
						</label>

						<input
							required
							className='col-span-3 border border-black p-1 rounded'
							type='tel'
							id='phoneNumber'
							name='phoneNumber'
							// autoComplete='off'
							placeholder='Enter phone number'
						/>
					</div>
					<div className='grid grid-cols-5 gap-3 items-center'>
						<label className='col-span-2' for='studentName'>
							Student Name:
						</label>

						<input
							required
							className='col-span-3 border border-black p-1 rounded'
							type='text'
							id='studentName'
							name='studentName'
							// autoComplete='off'
							placeholder='Enter student name'
						/>
					</div>
					<div className='grid grid-cols-5 gap-3 items-center'>
						<label className='col-span-2' for='studentClass'>
							Student Class:
						</label>

						<input
							required
							className='col-span-3 border border-black p-1 rounded'
							type='number'
							id='studentClass'
							name='studentClass'
							// autoComplete='off'
							placeholder='Enter student class'
						/>
					</div>
					<div className='grid grid-cols-5 gap-3 items-center'>
						<label className='col-span-2' for='studentId'>
							Student ID:
						</label>

						<input
							required
							className='col-span-3 border border-black p-1 rounded'
							type='number'
							id='studentId'
							name='studentId'
							// autoComplete='off'
							placeholder='Enter student ID'
						/>
					</div>

					<div className='flex justify-center '>
						<input
							className='mt-10 px-5 py-2 border border-black hover:bg-slate-500 hover:border-slate-500 hover:text-white hover:cursor-pointer transition-all'
							type='submit'
							value='Next'
						/>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default EnglishChecking;
