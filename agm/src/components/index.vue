<template>
  <!-- HEADER -->
  <div class="cha">
    <div class="menu">
      <div class="menu-1">
        <img src="/file-img/logo.png" height="40" />
        <input type="text" placeholder="Bạn muốn gì..." />
      </div>

      <div class="menu-2">
        <div class="pt-nhan-hang">
          <img src="/file-img/delivery.png" height="20" />
          <a href="#">Chọn phương thức nhận hàng</a>
        </div>
        <i class="bx bx-envelope"></i>
        <i class="bx bx-user"></i>
      </div>
    </div>

    <div class="menu2">
      <a class="tc1">Trang chủ</a>
      <a class="tc1">Menu</a>
      <a class="tc1">Khuyến mãi</a>
      <a class="tc1">Về chúng tôi</a>
    </div>
  </div>

  <!-- SLIDER -->
  <div class="slider">
    <img
      v-for="(img, i) in slides"
      :key="i"
      :src="img"
      class="slide"
      :class="{ active: currentSlide === i }"
    />
    <button class="prev" @click="changeSlide(-1)">❮</button>
    <button class="next" @click="changeSlide(1)">❯</button>
  </div>

  <!-- SẢN PHẨM -->
  <h2 class="tieude">BST Tea Latte - Bánh Banaberry mới!</h2>
  <div class="noidung">
    <div class="sanpham0" v-for="sp in products" :key="sp.name">
      <img :src="sp.img" height="80" />
      <p class="tensp">{{ sp.name }}</p>
      <p class="giasp">{{ sp.price }} đ</p>
      <div class="button-mua">
        <i class="bx bx-cart-add"></i>
        <span>Đặt mua</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

/* SLIDER */
const slides = [
  "/file-img/slidebar1.jpg",
  "/file-img/slidebar2.jpg",
  "/file-img/slidebar3.jpg",
];
const currentSlide = ref(0);

function changeSlide(step) {
  currentSlide.value =
    (currentSlide.value + step + slides.length) % slides.length;
}

onMounted(() => {
  setInterval(() => changeSlide(1), 10000);
});

/* PRODUCTS */
const products = ref([
  { name: "Hồng Trà Latte Mây (L)", price: "65.000", img: "/file-img/sp1.png" },
  { name: "Hồng Trà Latte Nguyên Vị (L)", price: "65.000", img: "/file-img/sp2.png" },
  { name: "Bánh cuộn Dâu", price: "42.000", img: "/file-img/sp3.png" },
  { name: "Bánh Chuối Hạt Dinh Dưỡng", price: "39.000", img: "/file-img/sp4.png" },
]);
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

body {
  margin-top: 150px;
  font-family: Arial, Helvetica, sans-serif;
}

.cha {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1000;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
}

.menu-1 {
  display: flex;
  gap: 20px;
}

.menu-1 input {
  border-radius: 20px;
  padding: 10px 40px;
  border: none;
  background: #eceff1;
}

.menu2 {
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.menu2 a {
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
}

/* SLIDER */
.slider {
  position: relative;
  height: 400px;
  margin: 20px auto;
  width: 70%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 400px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s;
}

.slide.active {
  opacity: 1;
}

.slider button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 10px;
}
.next {
  right: 10px;
}

/* PRODUCTS */
.noidung {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.sanpham0 {
  width: 200px;
  text-align: center;
}

.button-mua {
  background: #0c713d;
  color: white;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
