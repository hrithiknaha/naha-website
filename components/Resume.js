import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Resume = () => {
	return (
		<div className='bg-gray-300 w-100 h-100'>
			<Navbar />
			<div className='experience pt-8'>
				<p className='py-8 w-2/4 mx-auto text-center font-semibold lg:text-2xl text-xl'>
					Experience
				</p>
				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jan - Apr, 2020
						</p>
						<p className='font-semibold tracking-wide'>INTERN</p>
						<p className='pt-8 italic'>Cognizant</p>
						<p>Kolkata</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							I was part of the java team, where I was taught all
							the core functions and features of Java. After that
							we were taught Spring, Spring MVC and Spring Boot.
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jan - Feb, 2019
						</p>
						<p className='font-semibold tracking-wide'>
							JUNIOR INTERN
						</p>
						<p className='pt-8 italic'>Voith Hydro</p>
						<p>Noida</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							I was part of E-Time application developer team. We
							made an attendance tracker and my role was to make
							the prototype of the user registration page.
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Jun - Jul, 2018
						</p>
						<p className='font-semibold tracking-wide'>
							WEB DEVELOPER
						</p>
						<p className='pt-8 italic'>Crossindia Cruises</p>
						<p>Kolkata</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							I was responsible for revamping their webiste from
							the scratch. I was also responsible for handling
							their SEO.
						</p>
					</div>
				</div>
			</div>

			<div className='education pt-8'>
				<p className='py-8 w-2/4 mx-auto text-center font-semibold lg:text-2xl text-xl'>
					Education
				</p>
				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-full p-8 m-4 bg-white '>
					<div className=' text-center '>
						<p className='font-semibold'>Graduation</p>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2016 - 2020
						</p>
						<p className='font-semibold tracking-wide w-3/4 mx-auto'>
							UNIVERSITY OF ENGINEERING AND MANAGEMENT
						</p>
						<p className='pt-8 italic'>
							B-tech in Computer Science
						</p>
						<p>Kolkata</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-full p-8 m-4 bg-white '>
					<div className=' text-center '>
						<p className='font-semibold'>Class XII</p>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2016
						</p>
						<p className='font-semibold tracking-wide w-3/4 mx-auto'>
							SALT LAKE SHIKSHA NIKETAN
						</p>
						<p className='pt-8 italic '>Science</p>
						<p>Kolkata</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-full p-8 m-4 bg-white '>
					<div className=' text-center '>
						<p className='font-semibold'>Class X</p>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							2014
						</p>
						<p className='font-semibold tracking-wide w-3/4 mx-auto'>
							CITY INTERNATIONAL SCHOOL
						</p>
						<p className='pt-8 italic'>Pune</p>
					</div>
				</div>
			</div>

			<div className='skills pt-8 pb-16 lg:m-0 m-4'>
				<div className='shadow-xl p-10 mx-auto lg:w-2/4 h-full bg-white'>
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
