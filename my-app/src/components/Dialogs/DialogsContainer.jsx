import React from "react";
import { createNewMessageActionCreator, updateNewMessageActionCreator } from "../../redux/messagePageReducer";
import DialogContainer from "./Dialog/DialogContainer";
import MessageContainer from "./Messages/MessageContainer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let friendsNames = props.dialogs.map(p => {
        return <DialogContainer name={p.name} id={p.id} />;
    });

    let friendsMessages = props.messages.map(p => {
        return <MessageContainer message={p.message} />;
    });

    let createNewMessage = (newMessage) => {
        let message = newMessage.current.value;
        props.dispatch(createNewMessageActionCreator(message));
    }

    let onMessageChange = (newMessage) => {
        let messageText = newMessage.current.value;
        props.dispatch(updateNewMessageActionCreator(messageText));
    }

    return(<Dialogs friendsNames = {friendsNames} 
                    friendsMessages = {friendsMessages}
                    createNewMessage = {createNewMessage}
                    onMessageChange = {onMessageChange}
                    newMessage = {props.newMessage}/>)
}

export default DialogsContainer;