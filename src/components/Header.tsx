import TodoTitle from './subcomponents/header-subcomponents/TodoTitle';
import TodoThemeSwitcher from './subcomponents/header-subcomponents/TodoThemeSwitcher';

const Header = () => {
	return (
		<header className='h-[35vh] py-12 bg-red-500'>
			<div className='container max-w-screen-md h-full px-5 lg:px-0 bg-yellow-300'>
				<div>
					<TodoTitle />
					<TodoThemeSwitcher />
				</div>
			</div>
		</header>
	);
};

export default Header;
