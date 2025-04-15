<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <div class="modal-icon">
        <span class="icon">!</span>
      </div>

      <h2 class="modal-title">Delete Order</h2>
      <p class="question">
        <strong>Are you sure you want to delete this order?</strong>
      </p>
      <p class="info">This action cannot be undone.</p>

      <div class="actions">
        <button class="cancel" @click="close">Cancel</button>
        <button class="delete" @click="confirm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  emits: ["close", "confirm"],
  methods: {
    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: var(--header-bg);
  padding: 32px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  text-align: left;
  color: var(--text-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-icon {
  background: #ffeaea;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.question {
  font-size: 15px;
  margin: 12px 0 4px;
}

.info {
  font-size: 13px;
  color: #7d7d7d;
  margin-bottom: 24px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.cancel,
.delete {
  width: 156px;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
}

.cancel {
  background: var(--input-bg);
  color: var(--text-color);
  border: 1px solid #ccc;
}

.delete {
  background: #e53935;
  color: white;
  border: none;
}
</style>
