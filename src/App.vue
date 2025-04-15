<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <router-view :toggleTheme="toggleTheme" :isDarkMode="isDarkMode" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

:root {
  --header-bg: #ffffff;
  --text-color: #333333;
  --input-bg: #f0f0f0;
  --bg-color: #f9f9f9;

  --table-bg: #ffffff;
  --thead-bg: #f0f0f0;
  --row-even-bg: #f9f9f9;
  --status-delivered-bg: #e6ffe6;
  --status-cancelled-bg: #ffe6e6;
  --status-process-bg: #fff5e6;

  --sidebar-bg: #f7f6fc;
  --hover-bg: #e6e4f1;
  --sidebar-section-color: #b0b0b0;
  --tag-bg: #e1dbfc;
  --tag-text: #4232a1;
  --border-color: #e0e0e0;
}

.dark-mode {
  --header-bg: #2a2a3c;
  --input-bg: #37374d;
  --text-color: #ffffff;
  --bg-color: #1f1f2e;

  --table-bg: #2a2a3c;
  --thead-bg: #1e1e2c;
  --row-even-bg: #2f2f44;
  --status-delivered-bg: #244b24;
  --status-cancelled-bg: #5a1e1e;
  --status-process-bg: #4b3c1d;

  --sidebar-bg: #202030;
  --hover-bg: #2a2a40;
  --sidebar-section-color: #888;
  --tag-bg: #342e59;
  --tag-text: #cfcfff;
  --border-color: #444;
}
</style>
