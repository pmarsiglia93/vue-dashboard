<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Tracking ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in paginatedProducts" :key="product.id">
          <td>{{ product.trackingId }}</td>
          <td>{{ product.product }}</td>
          <td>{{ product.customer }}</td>
          <td>{{ product.date }}</td>
          <td>${{ product.amount }}</td>
          <td>{{ product.payment }}</td>
          <td>
            <span :class="'status ' + product.status.toLowerCase()">
              {{ product.status }}
            </span>
          </td>
          <td class="action-cell">
            <img
              src="https://img.icons8.com/?size=100&id=49&format=png&color=000000"
              alt="Edit"
              class="action-icon"
              @click="$emit('edit', product)"
            />
            <img
              src="https://img.icons8.com/?size=100&id=67884&format=png&color=FA5252"
              alt="Delete"
              class="action-icon"
              @click="$emit('delete', product.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  props: {
    entriesPerPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      products: [],
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.entriesPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.entriesPerPage;
      return this.products.slice(start, start + this.entriesPerPage);
    },
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await api.get("/products");
        this.products = res.data;
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    entriesPerPage() {
      this.changePage(1);
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.pagination-controls {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
  font-size: 14px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.pagination button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.pagination button.active {
  background-color: #6a5acd;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
}

thead {
  background-color: #f0f0f0;
}

th,
td {
  padding: 12px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

.status {
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
}

.status.delivered {
  color: green;
  background: #e6ffe6;
}

.status.cancelled {
  color: red;
  background: #ffe6e6;
}

.status.process {
  color: orange;
  background: #fff5e6;
}

.action-cell {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.action-icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.action-icon:hover {
  transform: scale(1.1);
}
</style>
