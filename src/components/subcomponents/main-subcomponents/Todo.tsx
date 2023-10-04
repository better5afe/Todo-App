import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../../store/slices/listSlice';
import { TodoProps } from '../../../models/types';
import TodoCheckbox from '../../reusable/TodoCheckbox';
import TodoDelete from '../../reusable/TodoDelete';

const Todo: React.FC<TodoProps> = ({ id, body, isCompleted }) => {
	const dispatch = useDispatch();

	const completeTodoHandler = () => {
		dispatch(completeTask(id));
	};

	return (
		<li
			className={`flex justify-between items-center md:items-start px-5 py-5 text-veryDarkGrayishBlue dark:text-lightGrayishBlue ${
				isCompleted &&
				'text-lightGrayishBlue dark:text-darkAshBlue italic line-through'
			}`}
		>
			<div className='flex justify-between items-start '>
				<TodoCheckbox
					completed={isCompleted}
					onClick={completeTodoHandler}
					onKeyDown={(e) => {
						e.key === 'Enter' && completeTodoHandler();
					}}
				/>
				<p>{body}</p>
			</div>
			<TodoDelete onClick={() => dispatch(deleteTask(id))} />
		</li>
	);
};

export default Todo;
