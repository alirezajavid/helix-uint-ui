import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        test: 12
    },
    getters: {
        getTest (state)
        {
            return state.test
        }
    },
    mutations: {
        setTest (state, v)
        {
            state.test = v;
        }
    },
    actions: {
        getTestFromServer ({ commit })
        {
            commit("setTest", 4000);
        }
    }


})