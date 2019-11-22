<template>
  <div class="add-task-container">
    <input
      type="text"
      v-model="value"
      placeholder="Add task"
      @keyup.enter="monitorEnterKey"
    />
    <button class="btn-add-task" @click="addTask">
      <span class="icon-plus" />
      Add
    </button>
  </div>
</template>

<script>
export default {
  title: "Add task",
  name: "addTask",
  data() {
    return { value: "" };
  },
  methods: {
    monitorEnterKey() {
      this.addTask();
    },
    addTask() {
      if (this.value && this.value.trim() !== '') {
        this.$emit("addTask", this.value);
        this.value = "";
      }
    }
  }
};
</script>

<style lang="scss">
  .add-task-container {
    padding: 0.5rem 1rem;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 2;
    border-bottom: 1px solid #ddd;
    background: white;

    input {
      flex: 1;
    }

    button {
      * {
        transition: all 0.1s ease;
      }

      background: #d3edf4;
      padding: 0 1rem 0 1rem;
      font-weight: bold;
      color: #1c3f53;
      border: lightblue solid 1px;
      outline: none;

      &:active {
        -webkit-box-shadow: inset 1px 1px 16px lightblue;
        -moz-box-shadow: inset 1px 1px 16px lightblue;
        box-shadow: inset 1px 1px 16px lightblue;
      }
    }
  }
</style>
