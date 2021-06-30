import React from "react";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
    let newMessage = React.createRef();
    let friendsNames = props.friendsNames;
    let friendsMessages = props.friendsMessages;
    let createNewMessage = () => {props.createNewMessage(newMessage)};
    let onMessageChange = () => {props.onMessageChange(newMessage)};
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {friendsNames}
            </div>
            <div className={css.dialogsItem}>
                {friendsMessages}
                <div>
                    <div>
                        <textarea onChange = {onMessageChange} value = {props.newMessage} ref={newMessage}></textarea>
                    </div>
                    <button onClick={createNewMessage}>New Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;