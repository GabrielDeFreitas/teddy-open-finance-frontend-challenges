module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Generate a React component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name (e.g. card-layout, title-page):',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{kebabCase name}}/index.tsx',
				templateFile: 'templates/Component.tsx.hbs',
			},
		],
	});
};
