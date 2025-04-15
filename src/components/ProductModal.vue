<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <form @submit.prevent="submitForm">
        <label>Status:</label>
        <select v-model="form.status">
          <option>Delivered</option>
          <option>Cancelled</option>
          <option>Process</option>
        </select>

        <label>Product:</label>
        <select v-model="form.product">
          <option v-for="item in productOptions" :key="item" :value="item">
            {{ item }}
          </option>
        </select>

        <label>Customer:</label>
        <input v-model="form.customer" type="text" />

        <div class="input-group">
          <div>
            <label>Date:</label>
            <input v-model="form.date" type="date" />
          </div>
          <div>
            <label>Amount:</label>
            <input
              v-model="form.amount"
              type="text"
              @blur="formatAmount"
              placeholder="$0.00"
            />
          </div>
        </div>

        <label>Payment Mode:</label>
        <select v-model="form.payment">
          <option>Transfer Bank</option>
          <option>Cash on Delivery</option>
        </select>

        <div class="modal-actions">
          <button type="button" class="cancel-btn" @click="close">
            Cancel
          </button>
          <button type="submit" class="apply-btn">
            {{ isEdit ? "Save Changes" : "Apply" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductModal",
  props: {
    isEdit: Boolean,
    data: Object,
  },
  data() {
    return {
      productOptions: [
        "Hat",
        "Laptop",
        "Phone",
        "Bag",
        "Headset",
        "Mouse",
        "Clock",
        "T-shirt",
        "Monitor",
        "Keyboard",
      ],
      form: {
        status: "",
        product: "",
        customer: "",
        date: "",
        amount: "",
        payment: "",
      },
    };
  },
  created() {
    if (this.data) {
      this.form = { ...this.data };
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submitForm() {
      this.$emit("submit", this.form);
      this.close();
    },
    formatAmount() {
      const value = this.form.amount.replace(/[^\d.]/g, "");
      const num = parseFloat(value);
      if (!isNaN(num)) {
        this.form.amount = num.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      }
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
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: var(--table-bg);
  padding: 24px;
  border-radius: 12px;
  width: 460px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 12px;
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 13px;
  color: var(--text-color);
}

input,
select {
  height: 38px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
}

.input-group {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
}

.input-group > div {
  flex: 1;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.cancel-btn,
.apply-btn {
  width: 264px;
  height: 56px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
}

.cancel-btn {
  background-color: #ffffff;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
}

.apply-btn {
  background-color: #6a5acd;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
