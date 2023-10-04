import TodoList from './subcomponents/main-subcomponents/TodoList';

const Main = () => {
	return (
		<main className='min-h-[60vh] bg-veryLightGrayishBlue dark:bg-darkBlue'>
			<div className='relative container max-w-screen-md min-h-[60vh] flex flex-col justify-around px-5 lg:px-0'>
				<TodoList />
			</div>
		</main>
	);
};

export default Main;
