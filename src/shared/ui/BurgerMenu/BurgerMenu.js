import { Link } from "react-scroll";
import cls from './BurgerMenu.module.scss'

export const BurgerMenu = ({items, active}) => {
    return (
        <div className={active ? `${cls.menu} ${cls.active}` : cls.menu}>
            <div className={cls.content}>
                {items.map(item => 
                    <Link className={cls.link}>{item.value}</Link>
                )}
            </div>
        </div>
    );
}
