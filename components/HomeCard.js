import React from 'react';

const HomeCard = () => {
	return (
		<div className=' flex home-card mx-auto w-3/5 h-64 bg-gray-600'>
			<div className='shadow-lg flex-1 relative w-2/4 pt-12 h-full'>
				<img
					className='rounded-full w-32 m-auto'
					src='../static/photo-me.jpg'
					alt='photo'
				/>
				<p className='pt-3 w-20 mx-auto text-center font-bold text-lg mt-1'>
					HRITHIK NAHA
				</p>
				<div className='w-16 h-1 bg-blue-600 mx-auto mt-4'></div>
				<p className='mt-4 text-center tracking-widest'>
					FULL STACK DEVELOPER
				</p>
				<div className='absolute bottom-0 h-16 w-full bg-white text-center text-2xl'>
					<div className='flex w-2/4 h-full mx-auto items-center'>
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
			<div className='flex-1 w-2/4 h-full'>
				<p className='py-4 pl-8 text-6xl font-bold'>Hello</p>
				<p className='pl-8 text-2xl'>Here's who I am & what I do</p>
				<button class='ml-8 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
					Resume
				</button>
				<button class='ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full'>
					Projects
				</button>
				<p className='ml-8'>
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
