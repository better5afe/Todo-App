export const checkMode = () => {
	const savedTheme = localStorage.getItem('theme');
	const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;

	if (savedTheme === 'dark' || (!savedTheme && preferredTheme)) {
		document.documentElement.classList.add('dark');
		console.log('Dark mode!');
		return;
	}

	document.documentElement.classList.remove('dark');
	console.log('Light Mode!');
};

export const switchModeHandler = () => {
	document.documentElement.classList.toggle('dark');
};
