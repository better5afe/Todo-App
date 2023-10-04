import { useDispatch } from 'react-redux';
import {
	allItems,
	activeItems,
	completedItems,
} from '../../../store/slices/listTypeSlice';
import TodoListButton from '../../reusable/TodoListButton';

const TodoListControls = () => {
	const dispatch = useDispatch();

	return (
		<>
			<TodoListButton
				text='All'
				onClick={() => {
					dispatch(allItems());
				}}
			/>
			<TodoListButton text='Active' onClick={() => dispatch(activeItems())} />
			<TodoListButton
				text='Completed'
				onClick={() => dispatch(completedItems())}
			/>
		</>
	);
};

export default TodoListControls;
