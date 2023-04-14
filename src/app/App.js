import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss'
import { BurgerMenu } from "shared/ui/BurgerMenu/BurgerMenu";
import { items } from "shared/const/itemsMenu";
import { useState } from "react";
import { AboutMe } from "widgets/AboutMe";
import { MySkills } from "widgets/MySkills";
import { MyWorks } from "widgets/MyWorks";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <div className={`app ${theme}`}>
            <Navbar active={menuActive} setActive={toggleMenu}/>
            <AboutMe />
            <MySkills />
            <MyWorks />
            <BurgerMenu items={items} active={menuActive}/>
        </div>
    );
}

export default App