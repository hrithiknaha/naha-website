import React from 'react';
import ReactDOM from 'react-dom';

//Tailwind
import './scss/utilities/tailwind.css';
import './scss/style.scss';

//Main Component
import Main from './components/Main';

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
