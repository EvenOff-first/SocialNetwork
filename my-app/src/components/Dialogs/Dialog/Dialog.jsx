import css from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <div className={css.dialog}>
                <NavLink to={"/dialogs/" + props.id} activeClassName={css.active}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;