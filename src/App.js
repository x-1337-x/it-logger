import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import AddBtn from './components/layout/AddBtn';

const App = () => {
	useEffect(() => {
		M.AutoInit();
	});
	return (
		<Fragment>
			<SearchBar />
			<div className='container'>
				<AddBtn />
				<AddLogModal />
				<Logs />
			</div>
		</Fragment>
	);
};

export default App;
