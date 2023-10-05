import { TodoListButtonProps } from '../../models/types';

const TodoListButton: React.FC<TodoListButtonProps> = ({ text, isActive, onClick }) => {
	return (
		<button
			className={`text-darkGrayishBlue ${isActive && 'active'} outline-none transition-colors duration-300 hover:text-brightBlue focus:text-brightBlue`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default TodoListButton;
