import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        home :0,
        about : undefined,
        contact : undefined,
        projects : undefined,
        resume : undefined,
        services : undefined
    }
})