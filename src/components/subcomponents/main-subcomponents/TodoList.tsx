import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted, reorderTasks } from '../../../store/slices/listSlice';
import { allItems } from '../../../store/slices/listTypeSlice';
import { AppStateObject, ListTypes } from '../../../models/types';
import { updateLocalStorage } from '../../../utils/local-storage-functions';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from 'react-beautiful-dnd';
import { reorderTodos } from '../../../utils/drag-and-drop-functions';
import Todo from './Todo';
import TodoListButton from '../../reusable/TodoListButton';
import TodoListControls from './TodoListControls';

const TodoList = () => {
	const { todoList, listType } = useSelector((state: AppStateObject) => ({
		todoList: state.list.filteredList,
		listType: state.listType,
	}));

	const activeItems = todoList.filter((todo) => todo.isCompleted === false)
		.length;

	const completedItems = todoList.filter((todo) => todo.isCompleted === true)
		.length;

	const arrayLength =
		listType === ListTypes.COMPLETED ? completedItems : activeItems;

	const dispatch = useDispatch();

	const dragEndHandler = (result: DropResult) => {
		const srcContainer = result.source;
		const destContainer = result.destination;

		if (!destContainer) {
			return;
		}

		if (srcContainer) {
			const reorderedTodos = reorderTodos(
				[...todoList],
				srcContainer.index,
				destContainer.index
			);

			dispatch(reorderTasks(reorderedTodos));

			listType === ListTypes.ALL && updateLocalStorage(reorderedTodos);
		}
	};

	return (
		<DragDropContext onDragEnd={dragEndHandler}>
			<div className='absolute -top-10 left-[20px] lg:left-0 right-[20px] lg:right-0'>
				<ul className='py-2 bg-white dark:bg-veryDarkBlue divide-y divide-lightGrayishBlue dark:divide-veryDarkAshBlue rounded-md overflow-hidden'>
					<Droppable droppableId='todo-list'>
						{(provided) => (
							<div>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									{todoList.length > 0 ? (
										todoList.map((todo, index) => (
											<Draggable
												key={todo.id}
												draggableId={todo.id}
												index={index}
											>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<Todo
															id={todo.id}
															body={todo.body}
															isCompleted={todo.isCompleted}
														/>
													</div>
												)}
											</Draggable>
										))
									) : (
										<p className='px-5 py-3 text-darkGrayishBlue text-center'>
											The list is empty.
										</p>
									)}
								</div>
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<div className='flex justify-between px-5 pt-5 pb-3'>
						<p className='text-darkGrayishBlue'>
							{arrayLength}
							{arrayLength === 1 ? ' item ' : ' items '}
							{listType === ListTypes.COMPLETED ? 'completed' : 'left'}
						</p>
						<div className='hidden md:flex justify-between min-w-[12rem]'>
							<TodoListControls />
						</div>
						<TodoListButton
							text='Clear Completed'
							onClick={() => {
								dispatch(clearCompleted());
								dispatch(allItems());
							}}
						/>
					</div>
				</ul>
				<div className='flex md:hidden justify-evenly py-3 px-14 my-8 bg-white dark:bg-veryDarkBlue rounded-md'>
					<TodoListControls />
				</div>
				<p className='md:pt-10 text-sm lg:text-lg text-darkGrayishBlue dark:text-ashBlue text-center'>
					Drag and drop to reorder the list
				</p>
			</div>
		</DragDropContext>
	);
};

export default TodoList;
