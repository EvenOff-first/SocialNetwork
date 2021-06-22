const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";
const createNewMessage = "CREATE-NEW-MESSAGE";

const messagePageReducer = (state, action) => {

    switch (action.type) {
        case createNewMessage:
            let newMessageId = state.messages.length + 1;
            let message = {
                id: newMessageId,
                message: action.newMessage,
            }

            state.messages.push(message);
            state.newMessage = "";
            break;

        case updateNewMessageText:
            state.newMessage = action.newMessage;
            break;
        default: 
            return state;
    }

    return state;
}

export const createNewMessageActionCreator = (newMessage) => {
    return {
        type: createNewMessage,
        newMessage: newMessage,
    }
}

export const updateNewMessageActionCreator = (newMessage) => {
    return {
        type: updateNewMessageText,
        newMessage: newMessage,
    }
}

export default messagePageReducer;