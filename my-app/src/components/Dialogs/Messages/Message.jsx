import css from "./Message.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return (
        <div>
            <div className={css.message}>{props.message}</div>
        </div>
    );
}

export default Message;