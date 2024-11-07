import {Common} from "../../common/Common";

export default function TabButton({onSelect, isSelected, ...props}) {
    const {title} = props.children;

    return (
        <li>
            <button className={Common.getClassName('active', isSelected)}
                    onClick={onSelect}>{title}</button>
        </li>
    );
}