<template>
    <div id="app">
        <inbox-screen />
    </div>
</template>

<script>
  import store from './state-management/store';
  import InboxScreen from './components/InboxScreen/InboxScreen.vue';
  export default {
    name: 'app',
    store,
    components: {
      InboxScreen,
    },
  };
</script>

<style>
    @import "./index.css";
</style>
