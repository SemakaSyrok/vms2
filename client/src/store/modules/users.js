const state = {
    users: []
};
const getters = {
    USERS: state => state.users.filter(user => user.login !== 'admin'),
    SIMPLE_USERS: state => state.users.filter(user => user.is_admin !== 1)
};
const mutations = {
    renewUsers(state, payload) {
        state.users = payload;
    }
};
const actions = {
    usersRequest: async ({state, rootState, commit}) => {
        commit('request_status', true);
        fetch(`${rootState.api.url}/users`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Authorization': rootState.api.token
            }
        })
            .then(res => res.status === 200 ? res.json() : null)
            .then(payload => commit('renewUsers', payload))
            .catch(err => alert('Error receiving users data'))
            .finally(() => commit('request_status', false))
    },
    createUser: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/user`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': rootState.api.token
            },
            body: JSON.stringify({
                login: payload.login,
                password: payload.password,
                is_admin: payload.is_admin,
                name: payload.name
            })
        })
            .then(res => res.status !== 200 ? alert('Error') : alert('Success'))
            .catch(err => alert('Error'))
            .finally(() => commit('request_status', false))
    },
    deleteUser: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/user`, {
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
    updateUser: async ({state, rootState, commit}, payload) => {
        commit('request_status', true);
        return fetch(`${rootState.api.url}/user`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': rootState.api.token
            },
            body: JSON.stringify({
                id: payload.id,
                login: payload.login,
                password: payload.password,
                is_admin: payload.is_admin,
                name: payload.name
            })
        }).then(res =>
            res.status !== 200 ? alert('Error') : alert('Success')
        ).catch(err =>
            alert('Error')
        ).finally(() =>
            commit('request_status', false)
        )
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};