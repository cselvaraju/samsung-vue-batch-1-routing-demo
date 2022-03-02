<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyComponent />
    This is Home View
    <p>
      <button @click="gotoAboutPage" class="btn btn-info">Go to About Page</button>
    </p>
    <p>
      <BackAndForward />
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import MyComponent from '@/components/MyComponent.vue';
import BackAndForward from '../components/BackAndForward.vue';

export default {
  name: 'HomeView',
  components: {
    MyComponent,
    BackAndForward
  },
  methods: {
    gotoAboutPage() {
      this.$router.push('/about');
    }
  }
}
</script>
