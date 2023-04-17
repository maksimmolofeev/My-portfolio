import { Link } from "react-scroll";
import cls from './Menu.module.scss'

export const Menu = ({items}) => {
    return (
        <nav className={cls.menu}>
            {items.map(item => 
                <Link
                    key={item.id}
                    className={cls.link}
                    to={item.to}
                    hashSpy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >
                    {item.value}
                </Link>
            )}
        </nav>
    );
}
