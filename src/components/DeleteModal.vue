<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <div class="modal-icon">
        <span class="icon">!</span>
      </div>
      <h2>Delete Order</h2>
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
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  width: 360px;
  max-width: 90%;
  text-align: center;
}

.modal-icon {
  margin: 0 auto 16px;
  background: #ffeaea;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.question {
  font-size: 16px;
  margin: 12px 0 4px;
  color: #333;
}

.info {
  font-size: 13px;
  color: #7d7d7d;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: space-evenly;
}

.cancel {
  background: #f5f6f7;
  color: #333;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.delete {
  background: #e53935;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
