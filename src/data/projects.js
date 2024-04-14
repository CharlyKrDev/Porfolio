import reactPage from '../assets/img/projects/0.png'
import wpPage from '../assets/img/projects/1.png'
import jsPage from '../assets/img/projects/2.png'


export const projects = [
    {
        id: 0,
        title: `E-Commerce GameStore React`,
        description: `Project React`,
        img: `${reactPage}`,
        vercel: `https://primera-pre-entrega-kaar-carlos.vercel.app/`,
        technologies: [`React`, `JavaScript`, `FireBase`, `Hooks`, `API`,`useHooks`,`NodeJS`, `TailWind` ],

    },
    {
        id: 1,
        title: `E-Commerce Perfumería Oeste`,
        description: `WebSite out service`,
        img: `${wpPage}`,
        gitub: ``,
        vercel: ``,
        technologies: [`WordPress`, `WOOcommerce`, `Elementor`, `Blog`, `MercadoPago Payment`],

    },
    {
        id: 2,
        title: `E-Commerce GameStore JS`,
        description: `Project JavaScript`,
        img: `${jsPage}`,
        gitub: `https://github.com/CharlyKrDev/proyectoFinal_KaarCarlos`,
        vercel: `https://game-store-sigma-swart.vercel.app/`,
        technologies: ['JavaScript', 'HTML', 'CSS', 'Tailwind','Fetch'],

    },
    {
        id: 3,
        title: `Web Clínica`,
        description: `Descripción`,
        img: ``,
        gitub: `prueba`,
        vercel: `prueba`,
        technologies: [],

    },
    {
        id: 4,
        title: `Ejemplo INDEX 4`,
        description: `Descripción`,
        img: ``,
        gitub: `prueba`,
        vercel: `prueba`,
        technologies: [],

    },
    {
        id: 5,
        title: `Ejemplo INDEX 5`,
        description: `Descripción`,
        img: ``,
        gitub: `prueba`,
        vercel: `prueba`,
        technologies: [],

    },
    {
        id: 6,
        title: `Ejemplo INDEX 6`,
        description: `Descripción`,
        img: ``,
        gitub: `prueba`,
        vercel: `prueba`,
        technologies: [],

    },

]

export const getColSpan = (index) => {
    switch (index) {
        case 0:
            return 'col-span-4';
        case 1:
            return 'col-span-4';
        case 2:
            return 'col-span-4';
        case 3:
            return 'col-span-4';
        case 4:
            return 'col-span-4';
        case 5:
            return 'col-span-4';
        case 6:
            return 'col-span-4';
        default:
            return 'col-span-4';
    }
}