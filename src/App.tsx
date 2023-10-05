import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setTheme } from './store/slices/themeSlice';
import { setTaskslist } from './store/slices/listSlice';
import { checkMode } from './utils/mode-functions';
import Header from './components/Header';
import Main from './components/Main';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos');

		if (savedTodos) {
			dispatch(setTaskslist(JSON.parse(savedTodos)))
		}

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
