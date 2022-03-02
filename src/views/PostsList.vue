<template>
  <h1>List of Posts from JsonPlaceHolder</h1>
  <button @click="getPosts" class="btn btn-primary">Get Posts</button>
  <div v-if="posts.length !== 0">
    <div v-for="post in posts" :key="post.id" class='mt-5'>
      <div class="card">
        <div class="card-header">{{ post.title }}</div>
        <div class="card-body">
          <p class="card-text">
            {{ post.body }}
          </p>
          <button class="btn btn-primary">
             <router-link :to="`/posts/${post.id}`">Get Details</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => (this.posts = response.data));
    },
  },
};
</script>

<style>
</style>