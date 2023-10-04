export const checkMode = () => {
	let currentTheme;

	const savedTheme = localStorage.getItem('theme');
	const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;

	document.body.classList.add('text-18');

	if (savedTheme === 'dark' || (!savedTheme && preferredTheme)) {
		document.documentElement.classList.add('dark');
		currentTheme = 'dark';
		return currentTheme;
	}

	currentTheme = 'light';
	return currentTheme;
};

export const switchModeHandler = () => {
	document.documentElement.classList.toggle('dark');
};
