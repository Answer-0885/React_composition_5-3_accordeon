import Collapse from "./components/Collapse";
import Paragraph from "./components/Paragraph";
import './App.css';


const App=()=> {

    return (
        <div>
            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}>
                <Paragraph>
                Заря прощается с землею,
                Ложится пар на дне долин,
                Смотрю на лес, покрытый мглою,
                И на огни его вершин.
                </Paragraph>
            </Collapse>

            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}>
                <Paragraph>
                Как незаметно потухают
                Лучи и гаснут под конец!
                С какою негой в них купают
                Деревья пышный свой венец!
                </Paragraph>
            </Collapse>

            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}>
                <Paragraph>
                И все таинственней, безмерней
                Их тень растет, растет, как сон;
                Как тонко по заре вечерней
                Их легкий очерк вознесен!
                </Paragraph>
            </Collapse>

            <Collapse collapsedLabel='Подробнее'
                      expandedLabel='Скрыть'
                      isExpanded={false}>
                <Paragraph>
                Как будто, чуя жизнь двойную
                И ей овеяны вдвойне, —
                И землю чувствуют родную,
                И в небо просятся оне.
                </Paragraph>
            </Collapse>

        </div>
    );
}

export default App;