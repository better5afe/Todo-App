export const useForm = () => {
	let formValidity;

	const checkFormValidity = (value: string) => {
		if (value.trim().length === 0) {
			formValidity = false;

		} else {
			formValidity = true;
		}

		return formValidity;
	};

	return { checkFormValidity };
};
