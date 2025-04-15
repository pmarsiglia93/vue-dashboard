<template>
  <div class="layout" :class="{ 'dark-mode': isDarkMode }">
    <Header @toggle-dark="toggleTheme" />

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
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },
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
  min-height: 0;
}
</style>
