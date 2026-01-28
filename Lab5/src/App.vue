<template>
  <div class="container">
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}
</style>
