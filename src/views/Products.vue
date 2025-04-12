<template>
  <div class="layout">
    <Header />

    <div class="main-section">
      <Sidebar />
      <MainContent />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  components: {
    Sidebar,
    Header,
    MainContent,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-section {
  display: flex;
  flex: 1;
}
</style>
