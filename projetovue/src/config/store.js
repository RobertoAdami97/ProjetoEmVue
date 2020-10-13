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
                if(state.menuVisivel) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'visible';
                }
            } else {
                state.menuVisivel = visivel;
            }
        }
    },
    escondeMenu(state) {
        if(state.menuVisivel) {
            state.menuVisivel = !state.menuVisivel
        }        
    }

})