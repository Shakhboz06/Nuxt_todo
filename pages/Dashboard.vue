<template>
  <div class="dashboard" :class="{bg_active: bgActive}">
    <div class="wrapper">
      <div class="headers">
        <div class="heading">
          <h1>Dashboard</h1>
          <button @click="AddTask()">Добавить задачу</button>
        </div>
        <div class="subheading">
          <span>Показать задачи как:</span>
          <p class="table" @click="Change_table()" :class="{'tabWhite': isBlue}">Таблица</p>
          <p class="tile" @click="Change_view()"  :class="{'tabBlue': isBlue}">Плитка</p>
        </div>
      </div>
      <div class="table_bar" :class="{'bar_active': tileActive}">
        <div class="title">
          <div class="title_block_1">
            <span class="heading">Заголовок задачи</span>
            <span class="info">Описание задачи</span>
          </div>
          <div class="title_block_2">
            <span class="date">Дата</span>
            <span class="time">Время</span>
            <span class="CheckUp">Выполнено</span>
          </div>
        </div>
        <div class="taskbar">
          <div class="item" v-for="item of this.data" :key="item.key" :class="{'ItemActive': isItem}">
            <div class="task_block_1">
              <p class="heading">{{ item.title }}</p>
              <p class="info">
                {{ item.description }}
              </p>
            </div>
            <div class="task_block_2">
              <p class="date">{{ item.date }}</p>
              <p class="time">{{ item.time }}</p>
              <p class="Check_Up" :class="{isRed: item.check == 'Не выполнено', isBlue: item.check == 'В прогрессе' }">
                {{ item.check }}
              </p>
            </div>
             <p class="tile_Up" :class="{isRed: item.check == 'Не выполнено', isBlue: item.check == 'В прогрессе' }">
                {{ item.check }}
              </p>
          </div>
        </div>
      </div>
      <div class="modal modal-edit" :class="{ active: isActive }">
        <form @submit.prevent="ADD_TASK()">
          <h2>Добавить</h2>
          <img src="~/static/2561211_circle_x_icon.svg" @click="HideBar()" />
          <input type="text" name="title" placeholder="Заголовок" />
          <input type="text" name="description" placeholder="Описание" />
          <input type="date" name="date" placeholder="Дата" />
          <input type="time" name="time" placeholder="Время" />
          <select name="check">
            <option value="Не выполнено">Не выполнено</option>
            <option value="В прогрессе">В прогрессе</option>
            <option value="Готово">Готово</option>
          </select>
          <button>Добавить</button>
          <h3>Введите правильные данные</h3>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { style } from "~/Styles/CSS/style.css";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      isActive: false,
      bgActive: false,
      tileActive: false,
      isBlue: false,
      isItem: false
    };
  },
  computed: {
    ...mapGetters(["data"], mapActions),
  },
  methods: {
    HideBar: function () {
      this.isActive = false,
      this.bgActive = false
      this.isItem = false
    },
    AddTask: function () {
      this.isActive = true,
      this.bgActive = true
      this.isItem = true
    },
    Change_view: function(){
      this.tileActive = true
      this.isBlue = true
    },
    Change_table: function(){
      this.tileActive = false
      this.isBlue = false
    },
    ...mapActions(["ADD_TASK"]),
  },
};
</script>

<style>
</style>