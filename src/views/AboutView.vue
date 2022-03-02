<template>
  <div class="about">
    <MyComponent />
    <h1>This is an about page</h1>
  </div>
  <p>
    <button @click="gotoHomePage" class="btn btn-info">Go To Home Page</button>
  </p>
  <p>
    <BackAndForward />
  </p>
</template>

<script>
import MyComponent from '../components/MyComponent.vue';
import BackAndForward from "../components/BackAndForward.vue";

export default {
  name: 'AboutView',
  components: {
    MyComponent,
    BackAndForward
  },
  methods: {
    gotoHomePage() {
      this.$router.push('/home');
    }
  }
}
</script>
