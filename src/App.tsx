import { useEffect } from 'react';
import { setInitialMode } from './utils/mode-functions';

export const App = () => {
	useEffect(() => {
		setInitialMode();
	}, []);

	return (
		<main>
			testestest
		</main>
	);
};

export default App;
