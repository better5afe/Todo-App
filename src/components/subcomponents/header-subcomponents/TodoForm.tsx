import { useRef } from 'react';

const TodoForm = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const addTodoHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (inputRef && inputRef.current) {
			console.log(inputRef.current.value);
			inputRef.current.value = '';
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
				<div className='w-5 md:w-6 h-5 md:h-6 rounded-full border border-lightGrayishBlue dark:border-ashBlue transition-colors duration-300 hover:border-brightBlue'></div>
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
