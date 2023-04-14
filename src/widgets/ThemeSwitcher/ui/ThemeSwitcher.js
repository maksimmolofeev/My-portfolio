import { useTheme } from "app/providers/ThemeProvider";
import { IconContext } from "react-icons";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Button, Theme } from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            onClick={toggleTheme}
            btnTheme={Theme.CLEAR}
        >
            <IconContext.Provider value={{className: `${cls.icon}`}}>
                {theme === 'dark' ? <CiDark /> : <CiLight />}
            </IconContext.Provider>
        </Button>
    );
}