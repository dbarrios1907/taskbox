<template>
  <div :class="taskClass" @mouseenter="hover = true" @mouseleave="hover = false">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" :disabled="true" name="checked" />
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <input type="text" :readonly="true" :value="this.task.title" placeholder="Input title" style="text-overflow: ellipsis;" />
    </div>
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
  /**
   * Use `Task` to visually display a item within a list or as an independent visual component!
   */
  export default {
    title: 'Task',
    name: 'task',
    data() {
      return { hover: false };
    },
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({})
      },
    },
    computed: {
      taskClass() {
        return `list-item ${this.task.state}` + (this.hover ? ' active': '');
      },
      isChecked() {
        return this.task.state === 'TASK_ARCHIVED';
      },
    },
  };
</script>

<style lang="scss">
  .list-item .actions {
    padding-right: 16px;
    padding-left: 5px;
  }

  .list-item.active {
    background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);

    .checkbox {
      cursor: pointer;
    }

    .actions a:hover {
      color: #c3c7ce;
    }
  }
</style>
