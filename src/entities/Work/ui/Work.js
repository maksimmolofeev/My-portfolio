import { Button } from "shared/ui/Button/Button";

export const Work = ({work}) => {
    return (
        <div>
            <div>
                <h3>{work.name}</h3>
                <p>{work.description}</p>
                <p><span>STACK:</span>{work.stack}</p>
                <div>
                    <Button>
                        Открыть демо
                    </Button>
                    <Button>
                        Посмотреть проект в Git
                    </Button>
                </div>
            </div>
            <div>
                <img src={work.img} alt="" />
            </div>
        </div>
    );
}
