<template>
  <aside class="sidebar">
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
        <li class="menu-item">
          <i class="icon">🚪</i>
          <span>Logout</span>
        </li>
      </div>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: #f7f6fc;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", sans-serif;
  font-size: 14px;
  color: #3c3c3c;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
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
  background-color: #e6e4f1;
}

.menu-item .icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.section-title {
  font-size: 11px;
  color: #b0b0b0;
  text-transform: uppercase;
  margin: 24px 0 6px 24px;
  letter-spacing: 0.8px;
}

.tag-new {
  background-color: #e1dbfc;
  color: #4232a1;
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
  border-top: 1px solid #e0e0e0;
}
</style>
