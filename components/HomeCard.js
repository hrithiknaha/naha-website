import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
	return (
		<div className=' flex home-card lg:mx-auto lg:w-3/5 lg:h-64 bg-gray-600'>
			<div className='shadow-lg flex-1 relative lg:w-2/4 lg:pt-12 lg:h-full'>
				<img
					className='rounded-full lg:w-32 lg:m-auto'
					src='../static/photo-me.jpg'
					alt='photo'
				/>
				<p className='lg:pt-3 lg:w-20 lg:mx-auto lg:text-center font-bold lg:text-lg lg:mt-1'>
					HRITHIK NAHA
				</p>
				<div className='lg:w-16 lg:h-1 bg-blue-600 lg:mx-auto lg:mt-4'></div>
				<p className='lg:mt-4 lg:text-center lg:tracking-widest'>
					FULL STACK DEVELOPER
				</p>
				<div className='absolute bottom-0 lg:h-16 lg:w-full bg-white lg:text-center lg:text-2xl'>
					<div className='flex lg:w-2/4 lg:h-full lg:mx-auto lg:items-center'>
						<div className='flex-1'>
							<a href='#'>
								<i class='fab fa-facebook-f'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='#'>
								<i class='fab fa-linkedin-in'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='#'>
								<i class='fab fa-twitter'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='#'>
								<i class='fab fa-instagram'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex-1 lg:w-2/4 lg:h-full'>
				<p className='lg:py-4 lg:pl-8 lg:text-6xl font-bold'>Hello</p>
				<p className='lg:pl-8 lg:text-2xl'>
					Here's who I am & what I do
				</p>
				<button class='lg:ml-8 lg:my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-2 lg:px-4 rounded-full'>
					<Link to='/resume'>Resume</Link>
				</button>
				<button class='lg:ml-4 bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white lg:py-2 lg:px-4 border border-blue-500 hover:border-transparent rounded-full'>
					<Link to='/projects'>Projects</Link>
				</button>
				<p className='lg:ml-8'>
					As a skilled and experienced professional in my field, I
					know how much hard work and careful thought it takes to
					succeed. My site is my way of documenting everything I’ve
					done, everything I’ve learned and how I see myself
					developing in the future.
				</p>
			</div>
		</div>
	);
};

export default HomeCard;
