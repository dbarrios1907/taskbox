import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'Something', state: 'TASK_INBOX' },
      { id: '2', title: 'Something more', state: 'TASK_INBOX' },
      { id: '3', title: 'Something else', state: 'TASK_INBOX' },
      { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    ]
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED';
    },
    PIN_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_PINNED';
    },

    ADD_TASK(state, title) {
      state.tasks.push({
        id: state.tasks.length + 1,
        title,
        state: 'TASK_INBOX'
      });
    }
  },
  actions: {
    archiveTask({ commit }, id) {
      commit('ARCHIVE_TASK', id);
    },
    pinTask({ commit }, id) {
      commit('PIN_TASK', id);
    },
    addTask({ commit }, title) {
      console.log(title);
      commit('ADD_TASK', title);
    }
  }
});
