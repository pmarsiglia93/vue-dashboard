<template>
  <div>
    <!-- Overlay para fechar ao clicar fora (apenas mobile) -->
    <div
      v-if="!isDesktop && visible"
      class="sidebar-overlay"
      @click="$emit('close-sidebar')"
    ></div>

    <aside class="sidebar" v-if="visible || isDesktop">
      <ul>
        <li class="menu-item">
          <i class="icon">🏠</i>
          <span>Dashboard</span>
        </li>

        <li class="section-title">Analytics</li>
        <li class="menu-item">
          <i class="icon">📊</i>
          <span>Performance</span>
        </li>
        <li class="menu-item new">
          <i class="icon">🔥</i>
          <span>Hotjar</span>
          <span class="tag-new">NEW</span>
        </li>

        <li class="section-title">Support</li>
        <li class="menu-item">
          <i class="icon">🎟️</i>
          <span>Tickets</span>
          <span class="badge">15</span>
        </li>
        <li class="menu-item">
          <i class="icon">🧑‍💼</i>
          <span>Agents</span>
        </li>
        <li class="menu-item">
          <i class="icon">👥</i>
          <span>Customers</span>
        </li>

        <li class="section-title">Shop</li>
        <li class="menu-item">
          <i class="icon">🗂️</i>
          <span>Products</span>
        </li>
        <li class="menu-item">
          <i class="icon">🛒</i>
          <span>Orders</span>
        </li>
        <li class="menu-item">
          <i class="icon">📄</i>
          <span>Reports</span>
        </li>

        <div class="bottom-section">
          <li class="menu-item">
            <i class="icon">⚙️</i>
            <span>Settings</span>
          </li>
          <li class="menu-item" @click="handleLogout">
            <i class="icon">🚪</i>
            <span>Logout</span>
          </li>
        </div>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isDesktop: window.innerWidth > 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSize);
  },
  methods: {
    handleLogout() {
      this.$router.replace("/login");
    },
    updateSize() {
      this.isDesktop = window.innerWidth > 768;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 85vh;
  background-color: var(--sidebar-bg, #f7f6fc);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", sans-serif;
  font-size: 14px;
  color: var(--text-color);
  z-index: 1001;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-item:hover {
  background-color: var(--hover-bg, #e6e4f1);
}

.menu-item .icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.section-title {
  font-size: 11px;
  color: var(--sidebar-section-color, #b0b0b0);
  text-transform: uppercase;
  margin: 24px 0 6px 24px;
  letter-spacing: 0.8px;
}

.tag-new {
  background-color: var(--tag-bg, #e1dbfc);
  color: var(--tag-text, #4232a1);
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: auto;
  font-weight: 500;
}

.badge {
  background-color: #4232a1;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  padding: 2px 6px;
  margin-left: auto;
}

.bottom-section {
  margin-top: auto;
  padding-top: 24px;
}

/* Mobile sidebar como sobreposição */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 56px; /* altura do header */
    left: 0;
    height: calc(95vh - 56px);
    background-color: var(--sidebar-bg);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
  }

  .sidebar-overlay {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100vw;
    height: calc(95vh - 56px);
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
}
</style>
