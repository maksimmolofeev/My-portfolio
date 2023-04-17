import { Link } from "react-scroll";
import cls from './BurgerMenu.module.scss'

export const BurgerMenu = ({items, active, setActive}) => {
    return (
        <div className={active ? `${cls.menu} ${cls.active}` : cls.menu}>
            <div className={cls.content}>
                {items.map(item => 
                    <Link
                        key={item.id}
                        className={cls.link}
                        to={item.to}
                        hashSpy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setActive(false)}
                    >
                        {item.value}
                    </Link>
                )}
            </div>
        </div>
    );
}
