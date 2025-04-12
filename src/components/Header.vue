<template>
  <header class="header">
    <div class="logo">
      <div class="logo-icon"></div>
      <span>ClarityUI</span>
    </div>

    <div class="search-container">
      <span class="icon">🔍</span>
      <input type="text" placeholder="Type to search" class="search-input" />
    </div>

    <div class="header-icons">
      <div class="icon-wrapper">
        <img
          src="https://img.icons8.com/?size=100&id=85022&format=png&color=000000"
          alt="Envelope"
          class="icon-img"
        />
        <span class="badge">2</span>
      </div>
      <img
        src="https://img.icons8.com/?size=100&id=82754&format=png&color=000000"
        alt="Bell"
        class="icon-img"
      />
      <img
        class="avatar"
        src="https://i.pravatar.cc/32?img=3"
        alt="User Avatar"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Montserrat", sans-serif;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #000;
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

/* SEARCH BAR */

.search-container {
  position: relative;
  width: 760px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: 40px;
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
  font-family: "Montserrat", sans-serif;
}

/* ICONS */

.header-icons {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* Envelope com badge */
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

/* Avatar */
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #dcdcdc;
}
</style>
