<template>
  <header class="header-top">
    <div class="logo">
      <div class="logo-circle"></div>
      <span class="logo-text">ClarityUI</span>
    </div>

    <div class="search-box">
      <input type="text" placeholder="Type to search" />
    </div>

    <div class="header-icons">
      <i class="icon-message">📬</i>
      <i class="icon-bell">🔔</i>
      <img class="avatar" src="https://i.pravatar.cc/40" alt="User" />
    </div>
  </header>
</template>

<style scoped>
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-circle {
  width: 30px;
  height: 30px;
  border: 5px solid #4232a1;
  border-radius: 50%;
}

.logo-text {
  font-weight: bold;
  font-size: 16px;
}

.search-box {
  flex: 1;
  min-width: 240px;
}

.search-box input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  outline: none;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .header-top {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    order: 3;
    width: 100%;
  }

  .header-icons {
    justify-content: flex-end;
  }
}
</style>
