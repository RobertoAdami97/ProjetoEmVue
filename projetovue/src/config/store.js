import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuVisivel: false
    },
    mutations: {
        estadoMenu(state, visivel) {
            if(visivel === undefined) {
                state.menuVisivel = !state.menuVisivel;
            } else {
                state.menuVisivel = visivel;
            }
        }
    }
})