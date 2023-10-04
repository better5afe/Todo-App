import { TodoProps } from '../../../models/types';
import Todo from './Todo';

const dummyList: TodoProps[] = [
	// {
	// 	id: '1',
	// 	body:
	// 		'Jog around the park 3x Jog around the park 3x Jog around the park 3x Jog around the park 3x Jog around the park 3x Jog around the park 3x',
	// 	isCompleted: false,
	// },
	// {
	// 	id: '2',
	// 	body: '10 minutes meditation',
	// 	isCompleted: false,
	// },
	// {
	// 	id: '3',
	// 	body: 'Read for 1 hour',
	// 	isCompleted: false,
	// },
];

const TodoList = () => {
	return (
		<ul className='absolute -top-10 left-[1.3rem] md:left-0 right-[1.3rem] md:right-0 py-2 bg-white dark:bg-veryDarkBlue rounded-md overflow-hidden'>
			{dummyList.length > 0 ? (
				dummyList.map((dummyTodo) => (
					<Todo
						key={dummyTodo.id}
						id={dummyTodo.id}
						body={dummyTodo.body}
						isCompleted={dummyTodo.isCompleted}
					/>
				))
			) : (
				<p className='px-5 py-3 text-sm md:text-lg text-darkGrayishBlue text-center'>
					The list is empty.
				</p>
			)}
		</ul>
	);
};

export default TodoList;
