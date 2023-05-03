import Code from 'shared/assets/icons/Code.svg'
import PhotoDark from 'shared/assets/icons/PhotoDark.png'
import PhotoLight from 'shared/assets/icons/PhotoLight.png'
import cls from './AboutMe.module.scss'
import { Button, Theme } from 'shared/ui/Button/Button';
import { Link } from 'react-scroll';
import { useTheme } from 'app/providers/ThemeProvider';

export const AboutMe = () => {
    const {theme} = useTheme()

    return (
        <section name='aboutMe' className={cls.about_me}>
            <div className={cls.content}>
                <div className={cls.info}>
                    <h1 className={cls.title}>Привет! меня зовут Максим, я Frontend разработчик</h1>
                    <p className={cls.text}>Я занимаюсь разработкой на протяжении 2-х лет.</p>
                    <p className={cls.text}>В свободное время увлекаюсь футболом и шахматами</p>
                    <div className={cls.buttons}>
                        <Button btnTheme={Theme.OUTLINE}>
                            <Link
                                to='contacts'
                                hashSpy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                Мои контакты
                            </Link>
                        </Button>
                        <a
                            className={cls.link_cv}
                            href="Maksim_Molofeev_CV.pdf"
                            download='Maksim_Molofeev_CV.pdf'
                        >
                            <Button btnTheme={Theme.OUTLINE}>
                                Скачать CV
                            </Button>
                        </a>
                    </div>
                </div>
                <div className={cls.block_img}>
                    <Code className={cls.img_code} />
                    <img className={cls.photo} src={theme === 'dark' ? PhotoLight : PhotoDark} alt="" />
                </div>
            </div>
        </section>
    );
}
