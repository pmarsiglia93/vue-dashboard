<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>{{ isEdit ? 'Edit Order' : 'Add Order' }}</h2>

      <form @submit.prevent="submitForm">
        <label>Status:</label>
        <select v-model="form.status">
          <option>Delivered</option>
          <option>Cancelled</option>
          <option>Process</option>
        </select>

        <label>Product:</label>
        <input v-model="form.product" type="text" />

        <label>Customer:</label>
        <input v-model="form.customer" type="text" />

        <label>Date:</label>
        <input v-model="form.date" type="date" />

        <label>Amount:</label>
        <input v-model="form.amount" type="text" />

        <label>Payment Mode:</label>
        <input v-model="form.payment" type="text" />

        <div class="modal-actions">
          <button type="button" @click="close">Cancel</button>
          <button type="submit">{{ isEdit ? 'Save Changes' : 'Apply' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductModal',
  props: {
    isEdit: Boolean,
    data: Object
  },
  data () {
    return {
      form: {
        status: '',
        product: '',
        customer: '',
        date: '',
        amount: '',
        payment: ''
      }
    }
  },
  created () {
    if (this.data) {
      this.form = { ...this.data }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submitForm () {
      this.$emit('submit', this.form)
      this.close()
    }
  }
}
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
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 12px;
  margin-bottom: 4px;
  font-weight: bold;
}

input,
select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.modal-actions button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.modal-actions button:first-child {
  background: #eee;
}

.modal-actions button:last-child {
  background: #6a5acd;
  color: white;
}
</style>
