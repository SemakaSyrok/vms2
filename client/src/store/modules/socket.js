import router from '@/router'
import io from 'socket.io-client';

const state = {
    io: {},
    messages: []
};
const getters = {
    IO: state =>  state.io,
    MESSAGES: state => state.messages
};
const mutations = {
    connect: ( state , payload, ) => {
        state.io = null;
        state.io = io(payload.url, { //токен поменять
            query: {
                token: payload.token
            }
        });
    },
    getMessage: (state, payload) => {
        state.messages.push(payload);
        setTimeout("window.scrollTo(0, document.body.offsetHeight + 100);", 75);
    },
    getMessages: (state, payload) => {
        state.messages = state.messages.concat(payload);
        state.messages = state.messages.sort((a, b) => {
           if(a.id > b.id) return  1;
           if(a.id < b.id) return -1;
        });
    },
    clearMessages: (state) => {
        state.messages = [];
    }
};
const actions = {
    connect: ({commit, rootState}) => {
        commit('connect', {
            token : rootState.api.token,
            url: rootState.api.url
        })
    },
    sendMessage: ({commit, rootState}, payload) => {
        rootState.socket.io.emit('message', payload)
    },
    getMessage: ({commit}, payload) => {
        commit('getMessage', payload);
    },
    getMessages: ({commit}, payload) => {
        console.log(payload.data);
        commit('getMessages', payload.data);
    },
    clearMessages: ({commit}) => {
        commit('clearMessages');
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};

