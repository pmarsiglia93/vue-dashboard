<template>
  <div class="layout" :class="{ 'dark-mode': isDarkMode }">
    <Header
      @toggle-dark="toggleTheme"
      :isDarkMode="isDarkMode"
      @toggle-sidebar="sidebarVisible = !sidebarVisible"
    />

    <div class="main-section">
      <Sidebar
        :visible="sidebarVisible"
        @close-sidebar="sidebarVisible = false"
      />
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
      sidebarVisible: window.innerWidth > 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },
    handleResize() {
      if (window.innerWidth > 768 && !this.sidebarVisible) {
        this.sidebarVisible = true;
      } else if (window.innerWidth <= 768 && this.sidebarVisible) {
        this.sidebarVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.main-section {
  display: flex;
  flex: 1;
  position: relative;
  min-height: 0;
  overflow: hidden;
}
</style>
