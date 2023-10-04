import { useDispatch } from 'react-redux';
import {
	allItems,
	activeItems,
	completedItems,
} from '../../../store/slices/listTypeSlice';
import {
	showAllTasks,
	showActiveTasks,
	showCompletedTasks,
} from '../../../store/slices/listSlice';
import TodoListButton from '../../reusable/TodoListButton';

const TodoListControls = () => {
	const dispatch = useDispatch();

	return (
		<>
			<TodoListButton
				text='All'
				onClick={() => {
					dispatch(allItems());
					dispatch(showAllTasks());
				}}
			/>
			<TodoListButton
				text='Active'
				onClick={() => {
					dispatch(activeItems());
					dispatch(showActiveTasks());
				}}
			/>
			<TodoListButton
				text='Completed'
				onClick={() => {
					dispatch(completedItems());
					dispatch(showCompletedTasks());
				}}
			/>
		</>
	);
};

export default TodoListControls;
