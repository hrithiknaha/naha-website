import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const toggleMenu = () => {
		navContent.classList.toggle('hidden');
	};

	return (
		// <div>
		// 	<div className='name bg-white p-8 text-sm lg:text-2xl lg:tracking-wider'>
		// 		<div className='flex justify-between'>
		// 			<Link to='/' className=''>
		// 				<span className='font-bold'>Hrithik Naha</span> / Web
		// 				Developer
		// 			</Link>
		// 			<p id='hamburgerbtn' class='md:hidden' onClick={toggleMenu}>
		// 				Menu
		// 			</p>
		// 			<ul class='hidden flex flex-row lg:text-sm' id='mobileMenu'>
		// 				<li class='pr-5'>
		// 					<Link to='/resume'>RESUME</Link>
		// 				</li>
		// 				<li class='pr-5'>
		// 					<Link to='/projects'>PROJECTS</Link>
		// 				</li>
		// 				<li>
		// 					<Link to='/contact'>CONTACT</Link>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>
		<nav class='flex items-center justify-between flex-wrap bg-white p-8 text-sm lg:text-2xl lg:tracking-wider'>
			<div class='flex items-center flex-shrink-0 mr-6'>
				<Link to='/' className=''>
					<span className='font-bold'>Hrithik Naha</span> / Web
					Developer
				</Link>
			</div>

			<div className='block lg:hidden'>
				<button
					onClick={toggleMenu}
					id='nav-toggle'
					className='flex items-center px-3 py-2 rounded text-gray-500 border-gray-600'
				>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>

			<div
				className='w-full flex-grow lg:flex text-center lg:w-auto hidden lg:block pt-4 lg:pt-0'
				id='navContent'
			>
				<ul className='list-reset lg:flex justify-end flex-1 items-center lg:text-sm'>
					<li className='p-2 lg:pr-5'>
						<Link to='/resume'>RESUME</Link>
					</li>

					<li className='p-2 lg:pr-5'>
						<Link to='/projects'>PROJECTS</Link>
					</li>

					{/* <li className='p-2'>
						<Link to='/contact'>CONTACT</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
