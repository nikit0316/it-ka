const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you', count: 15},
                {id: 2, message: "It's my first post", count: 20},
                {id: 3, message: "BlaBla", count: 25},
                {id: 4, message: "Skyv", count: 23}
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            dialogs: [ 
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'sup'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },


    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;  //observer pattern
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                count: 3
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody='';
            this._state.messagesPage.messages.push({id:6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (text) =>
    ({  type: UPDATE_NEW_POST_TEXT,
        newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;
export default store;