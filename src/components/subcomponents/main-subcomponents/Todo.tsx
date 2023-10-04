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
		<li className='flex justify-between items-start px-5 py-3 text-sm md:text-lg text-veryDarkGrayishBlue dark:text-lightGrayishBlue'>
			<div className='flex justify-between items-start '>
				<TodoCheckbox completed={isFinished} onClick={completeTodoHandler} />
				<p>{body}</p>
			</div>
			<TodoDelete onClick={() => deleteTodoHandler(id)} />
		</li>
	);
};

export default Todo;
