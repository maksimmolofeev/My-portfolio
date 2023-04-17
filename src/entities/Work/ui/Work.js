import { Button, Theme } from "shared/ui/Button/Button";
import cls from './Work.module.scss'
import { useTheme } from "app/providers/ThemeProvider";

export const Work = ({work}) => {
    const {theme} = useTheme()
    return (
        <div className={cls.work}>
            <div className={cls.info}>
                <h3 className={cls.name}>{work.name}</h3>
                <p className={cls.description}>{work.description}</p>
                <p className={cls.stack}><span className={cls.stack_title}>STACK: </span>{work.stack}</p>
                <div className={cls.buttons}>
                    <a href="">
                        <Button btnTheme={Theme.OUTLINE}>
                            Открыть демо
                        </Button>
                    </a>
                    <a 
                        href={work.urlGit}
                        target="_blank"
                    >
                        <Button btnTheme={Theme.OUTLINE}>
                            Посмотреть проект в Git
                        </Button>
                    </a>
                </div>
            </div>
            <div className={cls.block_img}>
                <img className={cls.img} src={theme === 'dark' ? work.imgLight : work.imgDark} alt="" />
            </div>
        </div>
    );
}
