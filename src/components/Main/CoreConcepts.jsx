import {CORE_CONCEPTS} from "../../data";

export default function CoreConcepts(props) {

    const tagTitle = props.children

    return (
        <section id="core-concepts">
            <h2>{tagTitle}</h2>
            <ul>
                {CORE_CONCEPTS.map((value, index) => (
                    <li>
                        <img src={value.image} alt="core concepts"/>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}