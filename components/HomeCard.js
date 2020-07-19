import React from 'react';
import { Link } from 'react-router-dom';

import potrait from '../static/photo-me.jpg';

const HomeCard = () => {
	return (
		<div className=' lg:flex home-card lg:mx-auto ml-8 w-4/5 lg:w-3/5  bg-white lg:bg-gray-600'>
			<div className='shadow-lg lg:flex-1 relative pt-8 lg:w-2/4 lg:pt-12 h-full'>
				<img
					className='rounded-full w-32 mx-auto lg:m-auto'
					src={potrait}
					alt='photo'
				/>
				<p className='lg:pt-3 lg:w-20 lg:mx-auto text-center mt-8 text-xl w-20 mx-auto font-bold lg:text-lg lg:mt-1'>
					HRITHIK NAHA
				</p>
				<div className='w-16 h-1 bg-blue-600 mx-auto my-4 lg:mt-4'></div>
				<p className='lg:mt-4 text-center lg:tracking-widest'>
					FULL STACK DEVELOPER
				</p>
				<div className='absolute bottom-0 h-8 lg:h-16 w-full bg-white text-center lg:text-2xl'>
					<div className='flex lg:w-2/4 h-full lg:mx-auto items-center'>
						<div className='flex-1'>
							<a href='https://www.facebook.com/hrithik.naha/'>
								<i class='fab fa-facebook-f'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='https://www.linkedin.com/in/hrithiknaha/'>
								<i class='fab fa-linkedin-in'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='https://twitter.com/hrithiknaha'>
								<i class='fab fa-twitter'></i>
							</a>
						</div>
						<div className='flex-1'>
							<a href='https://www.instagram.com/hrithiknaha/'>
								<i class='fab fa-instagram'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:flex-1 lg:w-2/4 lg:h-full'>
				<p className='lg:py-4 pt-8 lg:pl-8 text-3xl lg:text-6xl font-bold'>
					Hello
				</p>
				<p className='lg:pl-8 font-semibold lg:text-2xl'>
					Here's who I am & what I do
				</p>
				<button class='lg:ml-8 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
					<Link to='/resume'>Resume</Link>
				</button>
				<button class='ml-4 bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full'>
					<Link to='/projects'>Projects</Link>
				</button>
				<p className='lg:ml-8 pb-4'>
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
