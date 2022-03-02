<template>
  <div class="container" v-if="post">
    <div class="card">
      <h3>Post ID: {{ post.id }}</h3>
      <div class="card-body">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostDetail",
  data() {
    return {
      id: this.$route.params.id,
      post: null,
    };
  },
  methods: {
    getPost() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        .then((response) => this.post = response.data);
    },
  },
  mounted() {
      this.getPost();
  }
};
</script>

<style>
</style>