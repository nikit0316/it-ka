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
            ]
        }
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
        if (action.type === 'ADD-POST') {
            debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                count: 3
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.message;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;