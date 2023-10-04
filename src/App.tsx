import { useEffect } from 'react';
import { setInitialMode } from './utils/mode-functions';
import Header from './components/Header';
import Main from './components/Main';

export const App = () => {
	useEffect(() => {
		setInitialMode();
	}, []);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};

export default App;
