
const state = {
    url: 'https://domles-camera.herokuapp.com',
    // url: 'https://localhost:3001',
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
        state.token = payload
    },
    token_destroy: (state) => {
        state.token = null
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

