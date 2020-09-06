let rerenderEntireTree =() =>{
}


let state = {
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
}

window.state=state;

export const addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        count:3
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;  //observer pattern
}

export default state;