import { contacts } from "shared/const/contacts";
import { Button, Theme } from "shared/ui/Button/Button";
import cls from "./Contacts.module.scss"
import { IconContext } from "react-icons";

export const Contacts = () => {
    return (
        <section name='contacts' className={cls.contacts}>
            <div className={cls.content}>
                <h2 className={cls.title}>Давайте работать вместе!</h2>
                <div className={cls.container}>
                    <div className={cls.info}>
                        <p className={cls.text}>Понравился мой код?</p>
                        <p className={cls.text}>Я в поисках работы в качестве Frontend разработчика. Рассматриваю как удаленный так и офисный формат работы.</p>
                        <a
                            href="Maksim_Molofeev_CV.pdf"
                            download='Maksim_Molofeev_CV.pdf'
                        >
                            <Button btnTheme={Theme.OUTLINE}>
                                Скачать CV
                            </Button>
                        </a>
                    </div>
                    <div className={cls.links}>
                        {contacts.map(contact =>
                            <a
                                key={contact.id}
                                className={cls.link}
                                href={contact.url}
                                target="_blank"
                            >
                                <IconContext.Provider value={{className: `${cls.icon}`}}>
                                    {contact.icon}
                                </IconContext.Provider>
                                <p>{contact.name}</p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
