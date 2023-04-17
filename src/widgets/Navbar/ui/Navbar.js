import { Link } from "react-scroll";
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Menu } from "shared/ui/Menu/Menu";
import { Button, Theme } from "shared/ui/Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { items } from "shared/const/itemsMenu";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";


export const Navbar = ({setActive, active}) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (e) => {
            setWidth(e.target.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    }, [width])

    return (
        <header className={cls.header}>
            <div className={cls.content}>
                <Link 
                    className={cls.logo}
                    to='aboutMe'
                    hashSpy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setActive(false)}
                >
                    <span className={cls.logo_primary}>{'<М'}</span>
                    аксим <br/> Молофее
                    <span className={cls.logo_primary}>{'в/>'}</span>
                </Link>
                <div className={cls.menu}>
                    { 
                        width >= 640 ?
                        <Menu items={items} /> :
                        <Button onClick={() => setActive()} btnTheme={Theme.CLEAR}>
                            <IconContext.Provider value={{className: `${cls.icon}`}}>
                                {active ? <RxCross2 /> : <RxHamburgerMenu />}
                            </IconContext.Provider>
                        </Button>
                    }
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
