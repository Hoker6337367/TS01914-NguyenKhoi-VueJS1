<script setup>
import { ref, computed } from "vue";

const birthYear = ref("");
const currentYear = new Date().getFullYear();

const age = computed(() => {
  if (!birthYear.value) return "";
  return currentYear - birthYear.value;
});

const category = computed(() => {
  if (age.value === "") return "";

  if (age.value <= 11) return "Trẻ em";
  if (age.value <= 17) return "Thiếu niên";
  if (age.value <= 35) return "Thanh niên";
  if (age.value <= 59) return "Trung niên";
  return "Lớn tuổi";
});
</script>

<template>
  <div class="container">
    <h3>Kiểm tra độ tuổi</h3>

    <label>Nhập năm sinh:</label>
    <input
      type="number"
      v-model="birthYear"
      placeholder="Ví dụ: 2007"
    />

    <div v-if="birthYear">
      <p>Năm sinh của bạn: <b>{{ birthYear }}</b></p>
      <p>Tuổi của bạn: <b>{{ age }}</b></p>
      <p>Phân loại: <b>{{ category }}</b></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
  margin: 30px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 6px;
  margin: 10px 0;
}
</style>
