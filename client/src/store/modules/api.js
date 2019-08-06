
const state = {
    // url: 'https://domles-camera.herokuapp.com',
    url: 'http://localhost:3001',
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
        localStorage.setItem('token', state.token);
    },
    token_destroy: (state) => {
        localStorage.removeItem('token');
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

