const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";
const createNewMessage = "CREATE-NEW-MESSAGE";

let initialState = {
    MessagePage: {
        dialogs: [
            { id: 1, name: "Max" },
            { id: 2, name: "Alya" },
            { id: 3, name: "Den" },
            { id: 4, name: "Ram" },
            { id: 5, name: "Rose" }],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Whats your anything?" },
            { id: 4, message: "Everything is okey." },
            { id: 5, message: "Bye" }],
        newMessage: ""
    }
}

const messagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case createNewMessage:
            let newMessageId = state.MessagePage.messages.length + 1;
            let message = {
                id: newMessageId,
                message: action.newMessage,
            }

            state.MessagePage.messages.push(message);
            state.MessagePage.newMessage = "";
            return state;

        case updateNewMessageText:
            state.MessagePage.newMessage = action.newMessage;
            return state;
        default: 
            return state;
    }

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