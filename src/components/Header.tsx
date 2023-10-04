import TodoTitle from './subcomponents/header-subcomponents/TodoTitle';
import TodoThemeSwitcher from './subcomponents/header-subcomponents/TodoThemeSwitcher';
import TodoForm from './subcomponents/header-subcomponents/TodoForm';

const Header = () => {
	return (
		<header className='h-[35vh] py-12 header-bg bg-center bg-no-repeat bg-cover text-sm lg:text-lg'>
			<div className='container max-w-[700px] h-full flex flex-col justify-around px-5 lg:px-0'>
				<div className='flex justify-between items-center'>
					<TodoTitle />
					<TodoThemeSwitcher />
				</div>
				<TodoForm />
			</div>
		</header>
	);
};

export default Header;
