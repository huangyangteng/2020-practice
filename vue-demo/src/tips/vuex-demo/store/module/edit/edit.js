import { audio } from './audio'
import {material} from './material'

export const edit = {
    state: () => ({
        ...audio.state,
        ...material.state
    }),
    getters: {
        ...audio.getters,
        ...material.getters
    },
    mutations: {
        ...audio.mutation,
        ...material.mutation
    },
    actions: {
        ...audio.actions,
        ...material.actions
    },
}
