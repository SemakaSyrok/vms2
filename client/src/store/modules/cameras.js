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
        fetch(`${rootState.api.url}/cameras`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Authorization': rootState.api.token
            }
        }).then(res => res.status === 200 ? res.json() : null)
        .then(payload => commit('renewCameras', payload))
        .catch(err => alert('Error receiving cameras'))
        .finally(() => commit('request_status', false))
    },
    createCamera: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/camera`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': rootState.api.token
            },
            body: JSON.stringify({
                connection_string: payload.connection_string,
                name: payload.name,
                owner_id: payload.owner_id
            })
        }).then(res =>
            res.status !== 200 ? alert('Error') : alert('Success')
        ).catch(err =>
            alert('Error')
        ).finally(() => commit('request_status', false))
    },
    deleteCamera: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/camera`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': rootState.api.token
            },
            body: JSON.stringify({
                id: payload
            })
        }).then(res =>
            res.status !== 200 ? alert('Error') : alert('Success')
        ).catch(err =>
            alert('Error')
        ).finally(() =>
            commit('request_status', false)
        )
    },
    updateCamera: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/camera`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': rootState.api.token
            },
            body: JSON.stringify({
                id: payload.id,
                connection_string: payload.connection_string,
                name: payload.name,
                owner_id: payload.owner_id
            })
        }).then(res =>
            res.status !== 200 ? alert('Error') : alert('Success')
        ).catch(err =>
            alert('Error')
        ).finally(() =>
            commit('request_status', false)
        )
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};