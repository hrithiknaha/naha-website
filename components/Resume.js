import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Resume = () => {
	return (
		<div className='bg-gray-300 w-100 h-100'>
			<Navbar />
			<div className='experience lg:pt-8'>
				<p className='lg:py-8 lg:w-2/4 lg:mx-auto font-semibold lg:text-2xl'>
					Experience
				</p>
				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jan - Apr, 2020
						</p>
						<p className='font-semibold tracking-wide'>INTERN</p>
						<p>Cognizant</p>
						<p>Kolkata</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jan - Feb, 2019
						</p>
						<p className='font-semibold tracking-wide'>
							JUNIOR INTERN
						</p>
						<p>Voith Hydro</p>
						<p>Noida</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jun - Jul, 2018
						</p>
						<p className='font-semibold tracking-wide'>
							WEB DEVELOPER
						</p>
						<p>Crossindia</p>
						<p>Kolkata</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>
			</div>

			<div className='education pt-8'>
				<p className='lg:py-8 lg:w-2/4 lg:mx-auto font-semibold lg:text-2xl'>
					Education
				</p>
				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2016 - 2020
						</p>
						<p className='font-semibold tracking-wide'>
							UNIVERSITY OF ENGINEERING AND MANAGEMENT
						</p>
						<p className='pt-8 italic'>
							B-tech in Computer Science
						</p>
						<p>Kolkata</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2016
						</p>
						<p className='font-semibold tracking-wide'>
							SALT LAKE SHIKSHA NIKETAN
						</p>
						<p className='pt-8 italic'>Science</p>
						<p>Kolkata</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 bg-white flex'>
					<div className='flex-1'>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2014
						</p>
						<p className='font-semibold tracking-wide'>
							CITY INTERNATIONAL SCHOOL
						</p>

						<p className='pt-8 '>Pune</p>
					</div>
					<div className='flex-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta commodi, nam libero adipisci ipsum
							numquam repellendus aut expedita illo placeat
							suscipit, fuga laborum. Quaerat ipsam laborum
							impedit?
						</p>
					</div>
				</div>
			</div>

			<div className='skills pt-8 pb-16'>
				<div className='shadow-xl p-10 mx-auto w-2/4 h-full bg-white'>
					<div>
						<p className='pl-3 font-semibold tracking-wider text-xl'>
							Professional skillset
						</p>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#mongodb
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#express
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#reactjs
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#nodejs
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#java
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#spring-boot
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#spring-mvc
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#c
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#python
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#git
						</span>
					</div>
					<div className='pt-4'>
						<p className='pl-3 font-semibold tracking-wider text-xl'>
							Language
						</p>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#English
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#Hindi
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2'>
							#Bengali
						</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Resume;
