import { useState } from 'react';
import { TodoProps } from '../../../models/types';
import { deleteTodoHandler } from '../../../utils/todo-functions';
import TodoCheckbox from '../../reusable/TodoCheckbox';
import TodoDelete from '../../reusable/TodoDelete';

const Todo: React.FC<TodoProps> = ({ id, body, isCompleted }) => {
	const [isFinished, setIsFinished] = useState(isCompleted);

	const completeTodoHandler = () => {
		setIsFinished(!isFinished);
	};

	return (
		<li
			className={`flex justify-between items-center md:items-start px-5 py-5 text-veryDarkGrayishBlue dark:text-lightGrayishBlue ${
				isFinished &&
				'text-lightGrayishBlue dark:text-darkAshBlue italic line-through'
			}`}
		>
			<div className='flex justify-between items-start '>
				<TodoCheckbox
					completed={isFinished}
					onClick={completeTodoHandler}
					onKeyDown={(e) => {
						e.key === 'Enter' && completeTodoHandler();
					}}
				/>
				<p>{body}</p>
			</div>
			<TodoDelete onClick={() => deleteTodoHandler(id)} />
		</li>
	);
};

export default Todo;
