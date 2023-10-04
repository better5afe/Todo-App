import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setTheme } from './store/slices/themeSlice';
import { checkMode } from './utils/mode-functions';
import Header from './components/Header';
import Main from './components/Main';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const currentTheme = checkMode();

		if (currentTheme === 'light') {
			dispatch(setTheme(true));
		} else {
			dispatch(setTheme(false));
		}
		
	}, []);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};

export default App;
