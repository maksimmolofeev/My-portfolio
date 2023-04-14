import { Link } from "react-scroll";
import cls from './Menu.module.scss'

export const Menu = ({items}) => {
    return (
        <nav className={cls.menu}>
            {items.map(item => 
                <Link className={cls.link}>{item.value}</Link>
            )}
        </nav>
    );
}
