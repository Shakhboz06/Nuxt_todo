import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    data: [{
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum estautem sunt rem eveniet architecto',
        date: '21.10.2021',
        time: '14:31',
        check: 'Не выполнено',
      },
      {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum estautem sunt rem eveniet architecto',
        date: '21.10.2021',
        time: '14:31',
        check: 'Готово',
      },
      {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum estautem sunt rem eveniet architecto',
        date: '21.10.2021',
        time: '14:31',
        check: 'В прогрессе',
      },
    ],
  },
  getters: {
    data: state => state.data,
  },
  mutations: {
    ADD_NEWTASK(state) {
      let fm = new FormData(event.target)
      let h3 = document.querySelector("form h3")
      event.target.reset()
      let obj = {}
      fm.forEach((value, key) => {
        obj[key] = value
      })
      if (obj.title.length < 3 || obj.description.length < 3 || obj.date.length < 6 || obj.time.length < 5) {
        h3.style.display = "block"
      } else {
        h3.style.display = "none"
        obj.date = `${obj.date.slice(8,10)}.${obj.date.slice(5,7)}.${obj.date.slice(0,4)}`
        state.data.push(obj)
        console.log(state.data)
      }
    }
  },
  actions: {
    ADD_TASK({
      commit
    }) {
      commit('ADD_NEWTASK')
    }
  },
  modules: {}
})
