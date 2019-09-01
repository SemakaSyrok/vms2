const state = {
    cameras: []
};
const getters = {
    CAMERAS: state => state.cameras,
};
const mutations = {
    renewCameras: (state, payload) => state.cameras = payload
};
const actions = {
    camerasRequest: async ({state, rootState, commit}) => {
        commit('request_status', true);
        fetch(`${rootState.api.url}/api/cameras`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Authorization': rootState.api.token
            }
        }).then(res =>
            res.status === 200 ? res.json() : null
        ).then(payload =>
            commit('renewCameras', payload)
        ).catch(err =>
            alert('Error receiving information')
        ).finally(() =>
            commit('request_status', false)
        )
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};