import { useSelector, useDispatch } from 'react-redux';
import { AppStateObject } from '../../../models/types';
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
import { ListTypes } from '../../../models/types';
import TodoListButton from '../../reusable/TodoListButton';

const TodoListControls = () => {
	const listType = useSelector((state: AppStateObject) => state.listType);

	const dispatch = useDispatch();

	return (
		<>
			<TodoListButton
				text='All'
				isActive={listType === ListTypes.ALL}
				onClick={() => {
					dispatch(allItems());
					dispatch(showAllTasks());
				}}
			/>
			<TodoListButton
				text='Active'
				isActive={listType === ListTypes.ACTIVE}
				onClick={() => {
					dispatch(activeItems());
					dispatch(showActiveTasks());
				}}
			/>
			<TodoListButton
				text='Completed'
				isActive={listType === ListTypes.COMPLETED}
				onClick={() => {
					dispatch(completedItems());
					dispatch(showCompletedTasks());
				}}
			/>
		</>
	);
};

export default TodoListControls;
