import { useSelector } from 'react-redux';
import { AppStateObject } from '../../../models/types';
import Todo from './Todo';
import TodoListButton from '../../reusable/TodoListButton';
import TodoListControls from './TodoListControls';

const TodoList = () => {
	const todoList = useSelector((state: AppStateObject) => state.list.tasksList);

	return (
		<div className='absolute -top-10 left-[20px] lg:left-0 right-[20px] lg:right-0'>
			<ul className='py-2 bg-white dark:bg-veryDarkBlue divide-y divide-lightGrayishBlue dark:divide-veryDarkAshBlue rounded-md overflow-hidden'>
				{todoList.length > 0 ? (
					todoList.map((todo) => (
						<Todo
							key={todo.id}
							id={todo.id}
							body={todo.body}
							isCompleted={todo.isCompleted}
						/>
					))
				) : (
					<p className='px-5 py-3 text-darkGrayishBlue text-center'>
						The list is empty.
					</p>
				)}
				<div className='flex justify-between px-5 pt-5 pb-3'>
					<p className='text-darkGrayishBlue'>5 items left</p>
					<div className='hidden md:flex justify-between min-w-[12rem]'>
						<TodoListControls />
					</div>
					<TodoListButton
						text='Clear Completed'
						onClick={() => console.log('Show only active tasks')}
					/>
				</div>
			</ul>
			<div className='flex md:hidden justify-evenly py-3 px-14 my-8 bg-white dark:bg-veryDarkBlue rounded-md'>
				<TodoListControls />
			</div>
		</div>
	);
};

export default TodoList;
