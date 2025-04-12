<template>
  <div class="main-content">
    <div class="top-bar">
      <div class="entries-filter">
        <div class="pagination-controls">
          <label
            >Show
            <select v-model.number="entriesPerPage">
              <option
                v-for="option in [5, 10, 15]"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
            entries
          </label>
        </div>
      </div>

      <button @click="openAddModal">+ Add Customer</button>
    </div>

    <ProductTable
      ref="productTable"
      :entries-per-page="entriesPerPage"
      @edit="openEditModal"
      @delete="openDeleteModal"
    />

    <ProductModal
      v-if="showModal"
      :isEdit="!!productToEdit"
      :data="productToEdit"
      @close="closeModal"
      @submit="handleSubmit"
    />

    <DeleteModal
      v-if="showDeleteModal"
      @close="showDeleteModal = false"
      @confirm="deleteProduct"
    />
  </div>
</template>

<script>
import ProductTable from "./ProductTable.vue";
import ProductModal from "./ProductModal.vue";
import DeleteModal from "./DeleteModal.vue";
import api from "@/services/api";

export default {
  components: {
    ProductTable,
    ProductModal,
    DeleteModal,
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      productToEdit: null,
      productToDeleteId: null,
      entriesPerPage: 10,
    };
  },
  methods: {
    openAddModal() {
      this.productToEdit = null;
      this.showModal = true;
    },
    openEditModal(product) {
      this.productToEdit = product;
      this.showModal = true;
    },
    openDeleteModal(id) {
      this.productToDeleteId = id;
      this.showDeleteModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.productToEdit = null;
    },
    async handleSubmit(data) {
      try {
        if (this.productToEdit) {
          await api.put(`/products/${this.productToEdit.id}`, {
            trackingId: this.productToEdit.trackingId,
            ...data,
          });
        } else {
          await api.post("/products", {
            trackingId: "#" + Math.floor(Math.random() * 90000 + 10000),
            ...data,
          });
        }

        this.productToEdit = null;
        this.showModal = false;
        this.$refs.productTable.fetchProducts();
      } catch (error) {
        console.error("Erro ao salvar:", error);
      }
    },
    async deleteProduct() {
      try {
        await api.delete(`/products/${this.productToDeleteId}`);
        this.$refs.productTable.fetchProducts();
        this.showDeleteModal = false;
        this.productToDeleteId = null;
      } catch (error) {
        console.error("Erro ao deletar:", error);
      }
    },
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.entries-filter label {
  font-size: 14px;
  color: #444;
}

.entries-filter select {
  margin: 0 6px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.top-bar button {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.top-bar button:hover {
  background-color: #483d8b;
}
</style>
