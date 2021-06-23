import React from "react";
import { NavLink } from "react-router-dom";
import { createNewMessageActionCreator, updateNewMessageActionCreator } from "../../redux/messagePageReducer";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.css";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let friendsNames = props.dialogs.map(p => {
        return <Dialog name={p.name} id={p.id} />;
    });

    let friendMessages = props.messages.map(p => {
        return <Message message={p.message} />;
    });

    let newMessage = React.createRef();

    let createNewMessage = () => {

        let message = newMessage.current.value;
        props.dispatch(createNewMessageActionCreator(message));
    }

    let onMessageChange = () => {
        
        let messageText = newMessage.current.value;
        props.dispatch(updateNewMessageActionCreator(messageText));

    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {friendsNames}
            </div>
            <div className={css.dialogsItem}>
                {friendMessages}
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