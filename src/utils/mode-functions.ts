export const setInitialMode = () => {
	const savedTheme = localStorage.getItem('theme');
	const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;

	if (savedTheme === 'dark' || (!savedTheme && preferredTheme)) {
		document.documentElement.classList.add('dark');
	}

	document.body.classList.add('text-18');
};

export const switchModeHandler = () => {
	document.documentElement.classList.toggle('dark');
};
