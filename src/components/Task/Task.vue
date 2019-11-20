<template>
  <div :class="taskClass">
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
    title: 'Vue/Task',
    name: 'task',
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    computed: {
      taskClass() {
        return `list-item ${this.task.state}`;
      },
      isChecked() {
        return this.task.state === 'TASK_ARCHIVED';
      },
    },
  };
</script>
