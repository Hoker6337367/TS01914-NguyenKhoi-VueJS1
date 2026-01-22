<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const greeting = ref('Xin chào bạn!')
const buttonTitle = ref('Nhấn để thay đổi lời chào')

const changeGreeting = () => {
  greeting.value = 'Hello, World!'
  buttonTitle.value = 'Lời chào mới đã được cập nhật'
}
</script>

<template>
  <h1>{{ greeting }}</h1>
  <button v-bind:title="buttonTitle" @click="changeGreeting">Click để thay đổi</button>
</template>

<style scoped>
</style>