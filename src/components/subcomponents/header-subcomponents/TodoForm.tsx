import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/slices/listSlice';

const TodoForm = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const dispatch = useDispatch();

	const addTodoHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (inputRef && inputRef.current) {
			const inputValue = inputRef.current.value;

			inputValue.trim().length === 0 && console.log('error');

			const newTodo = {
				id: Math.random().toString(),
				body: inputRef.current.value,
				isCompleted: false,
			};

			dispatch(addTask(newTodo));
		}
	};

	return (
		<form
			className='h-12 md:h-16 flex border	border-transparent rounded-md overflow-hidden bg-white dark:bg-veryDarkBlue'
			onSubmit={addTodoHandler}
		>
			<div
				className='h-full flex justify-center items-center ps-5 md:ps-8 pe-3 md:pe-7 cursor-pointer'
				onClick={() => {
					inputRef.current && inputRef.current.focus();
				}}
			>
				<div className='w-5 md:w-6 h-5 md:h-6 rounded-full border border-lightGrayishBlue dark:border-veryDarkAshBlue transition-colors duration-300 hover:border-brightBlue'></div>
			</div>
			<input
				className='w-full pt-4 pb-3 pe-5 md:pe-7 bg-transparent outline-none text-sm md:text-lg text-veryDarkGrayishBlue dark:text-lightGrayishBlue caret-brightBlue'
				type='text'
				placeholder='Create a new todo...'
				ref={inputRef}
			/>
		</form>
	);
};

export default TodoForm;
