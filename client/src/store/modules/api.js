
const state = {
    // url: 'https://video-surveillance-system.herokuapp.com',
    url: 'http://82.146.44.70',
    is_request: false,
    token: null
};
const getters = {
    API: state => state,
    REQUEST: state => state.is_request,
    TOKEN: state => state.token
};
const mutations = {
    request_status:(state, payload)=> {
        state.is_request = payload
    },
    token:(state, payload) => {
        state.token = payload;
        localStorage.setItem('_token', state.token);
    },
    token_destroy: (state) => {
        localStorage.removeItem('_token');
        state.token = null;
    }
};
const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
};

