import {EXAMPLES} from "../../data";
import TabButton from "../Button/TabButton";
import {useState} from "react";

export default function TabContent(props) {

    // 컴포넌트 최상위 함수에서만 사용되어야 한다.
    const [selectedTopic, setSelectedTopic] = useState();
    let tagTitle = props.children;

    function handleSelect(value) {
        setSelectedTopic(value);
    }

    function getTabContent(selectedTopic) {

        if (selectedTopic) {
            return <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>;
        }

        return getDefaultTabContent();
    }

    function getDefaultTabContent() {
        return <p>Select a topic to see an example</p>;
    }

    return <section id="examples">
        <h2>{tagTitle}</h2>
        <menu>
            {Object.keys(EXAMPLES).map((value, index) => (
                <TabButton key={index}
                           onSelect={() => handleSelect(value)}
                           isSelected={selectedTopic === value.toString()}>
                    {EXAMPLES[value]}
                </TabButton>
            ))}
        </menu>
        {getTabContent(selectedTopic)}
    </section>
}