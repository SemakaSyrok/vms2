import router from '@/router'
import store from '../index'

const state = {
    id: null,
    login: '',
    logged: false,
};
const getters = {
    SELF: state =>  state
};
const mutations = {
    login: ( state , payload) => {
        state.login = payload.login;
        state.id = payload.id;
        state.logged = true;
        localStorage.setItem('_login', payload.login);
        localStorage.setItem('_id', payload.id);
        router.push('/');
    },
    logout: (state) => {
        state.id = null;
        state.login = null;
        state.logged = false;
        localStorage.removeItem('_login');
        localStorage.removeItem('_id');
        router.push('/login')
    }
};
const actions = {
    login:  async ({ state, rootState , commit}, payload) => {
        commit('request_status', true);
        fetch(`${rootState.api.url}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: payload.login, password: payload.password })
        })
        .then(res => {
            return res.status === 200 ? res.json() : null
        })
        .then(payload => {
            if(payload === null) {
                alert('Authorization Error')
                return;
            }
            commit('login', payload);
            commit('token', payload.token);
            commit('connect', {
                token: rootState.api.token,
                url: rootState.api.url
            })
        })
        .catch(err => alert('Authorization Error'))
        .finally(() => commit('request_status', false))        
    },
    logout: ({commit}) => {
        commit('logout');
        commit('token_destroy');
    },
    loginUserByStorage: ({commit, rootstate}, payload) => {
        commit('token', payload.token);
        commit('login', payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};

let test_request = async () => {
    return   {
        code: 404
    }
}