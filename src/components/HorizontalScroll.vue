<template>
  <div class="scroll-container">
    <div class="scroll-content">
      <!-- Duplicate the images to ensure seamless scrolling -->
      <div class="scroll-images" v-for="n in 2" :key="n">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Scrolling Image" />
      </div>
    </div>
  </div>
</template>

<script>
import scrollImg from "@/assets/images/scrollImg.png"
export default {
  data() {
    return {
      // Replace with your image URLs
      images: [
        scrollImg,
        scrollImg,
        scrollImg,
        scrollImg,
      ],
    };
  },
};
</script>
<style scoped>
.scroll-container {
  width: 100vw; /* Full screen width */
  overflow: hidden; /* Hide the scrollbar */
  white-space: nowrap; /* Prevent line breaks */
}

.scroll-content {
  display: flex;
  animation: scroll 20s linear infinite; /* Infinite scroll animation */
}

.scroll-images {
  display: flex; /* Keep images in a single row */
}

img {
  width: 483px;
  height: 308px;
  margin-right: 10px; /* Space between images */
}


/* Scroll animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Scroll half of the total width */
  }
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
  img {
    flex: 0 0 45%; /* Each image takes 45% of the container width on smaller screens */
  }

  /* Adjust animation speed for smaller screens */
  .scroll-content {
    animation: scroll 15s linear infinite;
  }
}
</style>