export const user = {
    state: () => ({
       info:{}
    }),
    getters: {},
    mutation: {
        setUser(state,info){//提交Mutation时，同时存到本地储存中
            localStorage.setItem('user',JSON.stringify(info))
            state.info=info
        }
    },
    actions: {},
}
