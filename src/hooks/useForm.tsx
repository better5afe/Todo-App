import { useState } from 'react';

export const useForm = () => {
	const [isValid, setIsValid] = useState<boolean>(false);

	const checkFormValidity = (value: string) => {
		if (value.trim().length === 0) {
			setIsValid(false);
		}

		setIsValid(true);
	};

	return { isValid, checkFormValidity };
};
