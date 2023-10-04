import { useEffect } from 'react';
import { checkMode } from './utils/mode-functions';

export const App = () => {
	useEffect(() => {
		checkMode();
	}, []);

	return (
		<main>
		</main>
	);
};

export default App;
