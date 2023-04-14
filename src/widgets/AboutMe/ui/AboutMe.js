import Code from 'shared/assets/icons/Code.svg'
import PhotoDark from 'shared/assets/icons/PhotoDark.png'
import cls from './AboutMe.module.scss'
import { Button, Theme } from 'shared/ui/Button/Button';
import { Link } from 'react-scroll';

export const AboutMe = () => {
    return (
        <section className={cls.about_me}>
            <div className={cls.content}>
                <div className={cls.info}>
                    <h1 className={cls.title}>Привет! меня зовут Максим, я Frontend разработчик</h1>
                    <p className={cls.text}>Я занимаюсь разработкой уже 2 года.</p>
                    <p className={cls.text}>В свободное время я люблю гулять, играть в футбол и смотреть сериалы</p>
                    <div className={cls.buttons}>
                        <Button btnTheme={Theme.OUTLINE}>
                            <Link>
                                Мои контакты
                            </Link>
                        </Button>
                        <Button btnTheme={Theme.OUTLINE}>
                            Скачать CV
                        </Button>
                    </div>
                </div>
                <div className={cls.block_img}>
                    <Code />
                    <img className={cls.photo} src={PhotoDark} alt="" />
                </div>
            </div>
        </section>
    );
}
