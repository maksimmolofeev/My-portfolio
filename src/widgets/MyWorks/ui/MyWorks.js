import { Work } from "entities/Work";
import { works } from "shared/const/works";
import cls from './MyWorks.module.scss'

export const MyWorks = () => {
    return (
        <section name='works' className={cls.my_work}>
            <div className={cls.content}>
                <h2 className={cls.title}>Проекты</h2>
                {works.map(work => 
                    <Work key={work.id} work={work}/>
                )}
            </div>
        </section>
    );
}
