import { CheckboxProps } from '../../models/types';

const TodoCheckbox: React.FC<CheckboxProps> = ({ completed, onClick }) => {
	return (
		<div>
			<div
				tabIndex={0}
				className={`flex items-center justify-center w-5 md:w-6 h-5 md:h-6 me-5 rounded-full border border-lightGrayishBlue dark:border-ashBlue outline-none cursor-pointer transition-colors duration-300 hover:border-brightBlue focus:border-brightBlue dark:hover:border-brightBlue dark:focus:border-brightBlue ${
					completed &&
					'bg-gradient border-transparent transition-transform duration-300 hover:border-transparent hover:scale-110 focus:border-transparent focus:scale-110'
				}`}
				onClick={onClick}
			>
				{completed && (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='#fff'
						className='w-4 h-4'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4.5 12.75l6 6 9-13.5'
						/>
					</svg>
				)}
			</div>
		</div>
	);
};

export default TodoCheckbox;
