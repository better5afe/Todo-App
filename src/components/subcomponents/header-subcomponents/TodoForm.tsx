import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/slices/listSlice';
import { showAllTasks } from '../../../store/slices/listSlice';
import { allItems } from '../../../store/slices/listTypeSlice';
import { useForm } from '../../../hooks/useForm';

const TodoForm = () => {
	const [inputErrorClass, setInputErrorClass] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { checkFormValidity } = useForm();

	const dispatch = useDispatch();

	const addTodoHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (inputRef && inputRef.current) {
			const inputValue = inputRef.current.value;

			if (!checkFormValidity(inputValue)) {
				setInputErrorClass('error');
				return;
			} else {
				const newTodo = {
					id: Math.random().toString(),
					body: inputRef.current.value,
					isCompleted: false,
				};

				dispatch(addTask(newTodo));
				dispatch(allItems());
				dispatch(showAllTasks());
				setInputErrorClass('');
				inputRef.current.value = '';
			}
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
				className={`${inputErrorClass} w-full pt-4 pb-3 pe-5 md:pe-7 bg-transparent outline-none text-sm md:text-lg text-veryDarkGrayishBlue dark:text-lightGrayishBlue caret-brightBlue`}
				type='text'
				placeholder={
					inputErrorClass === ''
						? 'Create a new todo...'
						: 'Value cannot be empty'
				}
				ref={inputRef}
			/>
		</form>
	);
};

export default TodoForm;
