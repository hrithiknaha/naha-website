import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div className='name bg-white lg:p-8 lg:text-2xl lg:tracking-wider'>
				<div className='flex justify-between'>
					<Link to='/' className=''>
						<span className='font-bold'>Hrithik Naha</span> / Web
						Developer
					</Link>
					<ul class='flex flex-row lg:text-sm'>
						<li class='pr-5'>
							<Link to='/resume'>RESUME</Link>
						</li>
						<li class='pr-5'>
							<Link to='/projects'>PROJECTS</Link>
						</li>
						<li>
							<Link to='/contact'>CONTACT</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
