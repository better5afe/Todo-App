import { useState } from 'react';

export const useForm = () => {
	const [isValid, setIsValid] = useState(false);

	const checkFormValidity = (value: string) => {
		if (value.trim().length === 0) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	};

	return { isValid, checkFormValidity };
};