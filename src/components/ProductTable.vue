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
          <td class="product-cell">
            <img
              v-if="productImages[product.product]"
              :src="
                require(`@/assets/products/${productImages[product.product]}`)
              "
              alt="Product Icon"
              class="product-icon"
            />
            {{ product.product }}
          </td>
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
            <!-- Edit -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="action-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click="$emit('edit', product)"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
            </svg>

            <!-- Delete -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="action-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click="$emit('delete', product.id)"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-2 14H7L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
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
      productImages: {
        Hat: "hat.png",
        Laptop: "laptop.png",
        Phone: "phone.png",
        Bag: "bag.png",
        Headset: "headset.png",
        Mouse: "mouse.png",
        Clock: "clock.png",
        "T-shirt": "t-shirt.png",
        Monitor: "monitor.png",
        Keyboard: "keyboard.png",
      },
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
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
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
  padding: 10px;
  background-color: var(--bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  height: auto;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
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
  min-width: 700px;
  border-collapse: collapse;
  background-color: var(--header-bg);
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
}

thead {
  background-color: var(--input-bg);
}

th,
td {
  padding: 12px;
  text-align: left;
  color: var(--text-color);
}

tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.06);
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
  stroke: var(--text-color);
}

.action-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .table-container {
    padding: 10px 0;
  }

  table {
    border-radius: 0;
  }
}
</style>
