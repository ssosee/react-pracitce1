import {Common} from "../../common/Common";

export default function TabButton({isSelected, ...props}) {
    const {title} = props.children;

    return (
        <li>
            <button className={Common.getClassNameIfConditionIsTrue('active', isSelected)}
                    {...props}>{title}
            </button>
        </li>
    );
}