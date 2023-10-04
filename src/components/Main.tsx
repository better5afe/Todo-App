import TodoList from './subcomponents/main-subcomponents/TodoList';

const Main = () => {
	return (
		<main className='min-h-[65vh] h-fit bg-veryLightGrayishBlue dark:bg-darkBlue text-sm lg:text-lg'>
			<div className='relative container max-w-[700px] min-h-[60vh] flex flex-col justify-around px-5 lg:px-0'>
				<TodoList />
			</div>
		</main>
	);
};

export default Main;
