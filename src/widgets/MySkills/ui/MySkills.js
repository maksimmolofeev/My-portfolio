import { IconContext } from "react-icons";
import { skills } from "shared/const/skills";
import cls from "./MySkills.module.scss"

export const MySkills = () => {
    return (
        <section className={cls.my_skills}>
            <div className={cls.content}>
                <h2 className={cls.title}>Стэк & Технологии</h2>
                <div className={cls.skills}>
                    {skills.map(skill => 
                        <div className={cls.skill}>
                            <IconContext.Provider value={{className: `${cls.icons}`}}>
                                {skill.icons}
                            </IconContext.Provider>
                            <h3>{skill.name}</h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
