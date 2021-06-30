import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
 
let store = {
    _state: {
        ProfilePage: {
            posts: [
                { id: 1, message: "BLABLABLA", likescount: 11, image: "https://images11.esquire.ru/upload/img_cache/acf/acfbe9979332a4bab9cec3485f678f61_ce_1080x673x0x0_cropped_960x600.jpg" },
                { id: 2, message: "Its my first post!", likescount: 13, image: "https://images11.esquire.ru/upload/img_cache/acf/acfbe9979332a4bab9cec3485f678f61_ce_1080x673x0x0_cropped_960x600.jpg" },
                { id: 3, message: "YEAAAAAH", likescount: 15, image: "https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg" },
                { id: 4, message: "YOOOO", likescount: 12, image: "https://sib.fm/storage/article/February2020/Z0tp5pg7QDhkIZ06GKhM.jpg" },
                { id: 5, message: "WOW!", likescount: 16, image: "https://tumentoday.ru/media/cache/3f/85/3f858de2be76670f3da07bd0975ab516.jpg" }
            ],
            newPostText: "",
        },
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
        },
        SideBar: {}
    },
    _callSubscriber() {
        console.log("State Changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profilePageReducer(this._state.ProfilePage, action);
        this._state.MessagePage = messagePageReducer(this._state.MessagePage, action);
        this._callSubscriber(this._state);

    }        
}

window.store = store;

export default store;