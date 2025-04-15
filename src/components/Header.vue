<template>
  <header class="header">
    <!-- Menu Hamburguer (visível apenas no mobile) -->
    <button
      class="menu-toggle"
      @click="$emit('toggle-sidebar')"
      aria-label="Toggle Menu"
    >
      ☰
    </button>

    <!-- Logo -->
    <div class="logo">
      <div class="logo-icon"></div>
      <span>ClarityUI</span>
    </div>

    <!-- Campo de busca -->
    <div class="search-container">
      <span class="icon">🔍</span>
      <input type="text" placeholder="Type to search" class="search-input" />
    </div>

    <!-- Ícones do topo -->
    <div class="header-icons">
      <div class="icon-wrapper">
        <!-- Envelope Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
          <polyline points="3,7 12,13 21,7" />
        </svg>
        <span class="badge">2</span>
      </div>

      <!-- Bell Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>

      <!-- Avatar -->
      <img
        class="avatar"
        src="https://i.pravatar.cc/32?img=3"
        alt="User Avatar"
      />

      <!-- Botão de troca de tema -->
      <button
        class="toggle-btn"
        @click="$emit('toggle-dark')"
        :aria-label="
          isDarkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'
        "
        :title="isDarkMode ? 'Modo Claro' : 'Modo Escuro'"
      >
        {{ isDarkMode ? "🌞" : "🌙" }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: var(--header-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Montserrat", sans-serif;
  color: var(--text-color);
  position: sticky;
  top: 0;
  z-index: 1020;
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  margin-right: 16px;
  cursor: pointer;
  color: inherit;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: inherit;
}

.logo-icon {
  width: 30px;
  height: 30px;
  background-color: #4232a1;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
}

.logo-icon::after {
  content: "";
  position: absolute;
  top: 6px;
  left: 6px;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
}

.search-container {
  position: relative;
  width: 760px;
  height: 40px;
  background-color: var(--input-bg);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-shrink: 1;
}

.icon {
  position: absolute;
  left: 12px;
  font-size: 14px;
  color: #999;
}

.search-input {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  outline: none;
  background-color: transparent;
  color: inherit;
  font-family: "Montserrat", sans-serif;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.icon-wrapper {
  position: relative;
}

.icon-img {
  width: 30px;
  height: 28px;
  object-fit: contain;
}

.badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #4232a1;
  color: white;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #dcdcdc;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  transition: transform 0.2s ease;
  color: inherit;
}

.toggle-btn:hover {
  transform: scale(1.2);
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .search-container,
  .header-icons {
    display: none;
  }

  .logo {
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
