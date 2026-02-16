/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: "/img/astro.jpg",
		title: "Portafolio con Astro",
		skills: ["Astro", "HTML", "CSS", "JavaScript"],
		descripcion:
			"Portafolio web responsivo desarrollado con Astro. Incluye secciones de presentación, proyectos, habilidades y contacto.",
		demoURL: '',
		repoURL: "https://github.com/Lizzy-80/portafolio-astro-lizzy",
		anim: 'fade-right',
	},
	{
		imgSrc: "/img/mvc.jpg",
		title: "API MVC con Express",
		skills: ["Node.js", "Express", "MVC"],
		descripcion:
			"Proyecto de backend con Express usando estructura MVC. Incluye rutas, controladores y vistas con EJS.",
		demoURL: '',
		repoURL: "https://github.com/Lizzy-80/ejercicio12-mvc",
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: "/img/login.jpg",
		title: "Login Front-End",
		skills: ["HTML", "CSS", "JavaScript"],
		descripcion:
			"Interfaz de login responsive con validación básica y estilos modernos. Proyecto enfocado en práctica de UI.",
		demoURL: '',
		repoURL: "https://github.com/Lizzy-80/semana-12-login",
		anim: 'fade-left',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
