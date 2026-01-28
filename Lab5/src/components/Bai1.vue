<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-blue" @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Biến message với giá trị mặc định
const message = ref('xin chào ')

// Hàm xử lý khi bấm nút
const updateMessage = () => {
  message.value = 'hello nhìn bạn trong rất đẹp trai và xin gái'
}
</script>

<style>
.p-5 {
  padding: 20px;
}
</style>
