<template>
    <div>
        <pure-inbox-screen :error="error" @addTask="addTask($event)"/>
    </div>
</template>

<script>
  import PureInboxScreen from './PureInboxScreen';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'inbox-screen',
    components: {
      PureInboxScreen,
    },
    computed: { ...mapState(['error']) },
    methods: { ...mapActions(['addTask',]) },
  };
</script>
