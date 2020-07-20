import React from 'react';

import Footer from './Footer';

const Projects = () => {
	return (
		<div className='bg-gray-300 w-100 h-100'>
			<div className='experience pt-8'>
				<p className='py-8 w-2/4 mx-auto text-center font-semibold lg:text-2xl text-xl'>
					Top Three Projects
				</p>
				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							E-Voting on Blockchain
						</p>
						{/* <a href='#'>
							<i className='fab fa-github'></i>
						</a> */}
						<p className='pt-8 italic'>Javascript</p>

						<p>2020</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							This projects curtails the effort of vote
							manipulation. The voters are added in the database,
							prior to voting they are verified by their face and
							after voting the vote is added to a block, thus
							being part of a never ending chain.
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Fow-X
						</p>
						<a href='https://github.com/hrithiknaha/project-x'>
							<i className='fab fa-github'></i>
						</a>
						<p className='pt-8 italic'>Javascript</p>

						<p>2020</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							A simple and innovative place to write your mind.
							Meet Instagram meets a Novel, did that make any
							sense?
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-64 p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Crime-X
						</p>
						<a href='https://github.com/hrithiknaha/crime-reporting-system'>
							<i className='fab fa-github'></i>
						</a>
						<p className='pt-8 italic'>Java</p>
						<p>2020</p>
					</div>
					<div className='lg:flex-1 lg:mt-0 mt-4'>
						<p>
							Your local PS comes online. Write your complain up
							and we send someone to investigate it.
						</p>
					</div>
				</div>

				<div className='shadow-xl lg:p-10 lg:mx-auto lg:mb-10 lg:w-2/4 lg:h-full p-8 m-4 bg-white lg:flex'>
					<div className='lg:flex-1 text-center '>
						<p className='text-indigo-600 font-semibold lg:text-xl'>
							Check my other works
						</p>
						<a href='https://github.com/hrithiknaha/'>
							<i className='fab fa-github pt-4 text-2xl'></i>
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
