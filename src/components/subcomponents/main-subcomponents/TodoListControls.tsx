import TodoListButton from '../../reusable/TodoListButton';

const TodoListControls = () => {
	return (
		<>
			<TodoListButton
				text='All'
				onClick={() => console.log('Show only active tasks')}
			/>
			<TodoListButton
				text='Active'
				onClick={() => console.log('Show all tasks')}
			/>
			<TodoListButton
				text='Completed'
				onClick={() => console.log('Show only completed tasks')}
			/>
		</>
	);
};

export default TodoListControls;
