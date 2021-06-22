const createNewPostElement = "CREATE-NEW-POST-ELEMENT";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

const profilePageReducer = (state, action) => {

    switch (action.type) {

        case createNewPostElement:

            let newPostId = state.posts.length + 1;
            let post = {
                id: newPostId,
                message: state.newPostText,
                likescount: 0,
                image: "https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg",
            };
            state.posts.push(post);
            state.newPostText = "";
            break;

        case updateNewPostText:

            state.newPostText = action.newText;
            break;
        default: 
            return state;
    }

    return state;
}


export const createNewPostElementActionCreator = () => {
    return {
        type: createNewPostElement,
    }
}

export const updateNewPostTextActionCreator = (postText) => {
    return {
        type: updateNewPostText,
        newText: postText 
    }
}


export default profilePageReducer;