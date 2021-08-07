import { audio } from './audio'

export const edit = {
    state: () => ({
        ...audio.state,
    }),
    getters: {
        ...audio.getters,
    },
    mutations: {
        ...audio.mutation,
    },
    actions: {
        ...audio.actions,
    },
}
