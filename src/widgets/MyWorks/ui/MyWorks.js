import { Work } from "entities/Work";
import { works } from "shared/const/works";

export const MyWorks = () => {
    return (
        <section>
            <div>
                <h2>Проекты</h2>
                <div>
                    {works.map(work => 
                        <Work work={work}/>
                    )}
                </div>
            </div>
        </section>
    );
}
