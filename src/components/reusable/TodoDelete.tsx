import { DeleteTodoProps } from '../../models/types';

const TodoDelete: React.FC<DeleteTodoProps> = ({ onClick }) => {
	return (
		<button className='delete-btn outline-none' onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-7 h-7 transition-colors duration-300'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M6 18L18 6M6 6l12 12'
				/>
			</svg>
		</button>
	);
};

export default TodoDelete;
