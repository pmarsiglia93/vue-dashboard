<template>
  <transition name="fade">
    <div v-if="visible" class="toast">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return { visible: true };
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
      this.$emit("close");
    }, 3000);
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4232a1;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
