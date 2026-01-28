<template>
  <div>
    <h2>Danh sách bài viết</h2>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      :class="{ highlighted: post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
    >
      <h3>{{ post.title }}</h3>
      <h4>Tác giả: {{ post.author }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.highlighted {
  border: 2px solid lightskyblue;
}
</style>
