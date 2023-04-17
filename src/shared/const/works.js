import PortfolioDark from 'shared/assets/icons/PortfolioDark.png'
import PortfolioLight from 'shared/assets/icons/PortfolioLight.png'

export const works = [
    {
        id: 1,
        name: 'Личное портфолио',
        description: 'Персональное портфолио фронтенд разработчика. Архитектура построена на основе Feature-Sliced Design (FSD). В проекте используется webpack. Реализована функция переключения светлой/темной темы. ',
        stack: 'React, JavaScript, SCSS, CSS Modules, Webpack, FSD',
        urlDemo: '',
        urlGit: 'https://github.com/maksimmolofeev/My-portfolio',
        imgDark: PortfolioDark,
        imgLight: PortfolioLight,
    },
    {
        id: 2,
        name: 'Блог',
        description: 'Проект блог, придуман специально для знакомства и применения на практике сложных тем фронтенд разрабтки, таких как webpack, eslint, stylelint, storybook и тд. Проект пока в разработке, но уже настроена рабочая среда, реализованы такие функции как, переключение тем, с возможность быстро добавлять новую тему, кастомный аналог classNames, авторизация пользователя, интернационализация и lazy-loading. Так же написанно большое колличество unit, скриншотных тестов.',
        stack: 'React, TypeScript, SCSS, CSS Modules, Webpack, FSD, i18n, Eslint, Stylelint, Storybook',
        urlDemo: '',
        urlGit: 'https://github.com/maksimmolofeev/My-simple-blog',
        imgDark: PortfolioDark,
        imgLight: PortfolioLight,
    }
]