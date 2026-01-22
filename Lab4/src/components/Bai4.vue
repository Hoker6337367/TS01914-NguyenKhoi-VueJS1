<script setup>
import rauCu from '../assets/images/rau-cu.jpg'
import giaVi from '../assets/images/rau-cu2.jpg'
import hat from '../assets/images/hat.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content:
      'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.',
    image: rauCu
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content:
      'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác.',
    image: giaVi
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content:
      'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein và nhiều vitamin.',
    image: hat
  }
]
</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4 fw-bold">
      Kiến thức sức khỏe cộng đồng
    </h2>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card h-100">
          <img
            :src="item.image"
            class="card-img-top"
            :alt="item.title"
          >

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>

            <button class="btn btn-info mt-auto align-self-start">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
}

.card {
  border-radius: 6px;
}
</style>
