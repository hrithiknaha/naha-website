import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div className='name bg-white p-8 text-2xl tracking-wider'>
				<div className='flex justify-between'>
					<div className=''>
						<span className='font-bold'>Hrithik Naha</span> / Web
						Developer
					</div>
					<ul class='flex flex-row text-sm'>
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
