<template>
  <div class="container">
    <span>
      <button @click="goBackward" class="btn btn-primary">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
    </span>
    <span>
      <button @click="goForward" class="btn btn-primary">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </span>
  </div>
</template>

<script>
export default {
    name: 'BackAndForward',
    methods: {
        goForward() {
            this.$router.go(1);
        },
        goBackward() {
            this.$router.go(-1);
        }
    }
};
</script>

<style>
</style>