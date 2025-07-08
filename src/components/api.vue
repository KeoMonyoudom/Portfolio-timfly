<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Product List (Vue.js)
      </h1>

      <div v-if="loading" class="text-center text-gray-600">Loading products...</div>

      <div v-else-if="error" class="text-center text-red-500">Error: {{ error }}</div>

      <div v-else class="grid grid-cols-1 gap-6">
        <div v-if="products.length > 0">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between"
          >
            <div class="mb-4 sm:mb-0 sm:mr-6">
              <h2 class="text-xl font-semibold text-blue-800">
                {{ product.name }}
              </h2>
              <p class="text-gray-600 text-sm mt-1">
                {{ product.description }}
              </p>
            </div>
            <div class="text-lg font-bold text-green-600">
              ${{ product.price.toFixed(2) }}
            </div>
          </div>
        </div>
        <div v-else class="text-center text-gray-600">No products found.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // Reactive references to store data and state
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // Function to fetch products
    const fetchProducts = async () => {
      try {
        // Simulate a network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data that would typically come from a fetch call to data.json
        // In a real Vue CLI/Vite project, you might place data.json in the 'public' folder
        // and fetch it like: const response = await fetch('/data.json');
        const mockData = [
          {
            "id": 1,
            "name": "Product A",
            "price": 29.99,
            "description": "This is the first product, a high-quality item."
          },
          {
            "id": 2,
            "name": "Product B",
            "price": 49.50,
            "description": "Product B is an excellent choice for everyday use."
          },
          {
            "id": 3,
            "name": "Product C",
            "price": 12.75,
            "description": "A budget-friendly option with great features."
          },
          {
            "id": 4,
            "name": "Product D",
            "price": 99.00,
            "description": "Premium product designed for professionals."
          }
        ];

        products.value = mockData; // Assign the fetched data to the reactive ref
      } catch (err) {
        error.value = "Failed to fetch products: " + err.message; // Set error if something goes wrong
      } finally {
        loading.value = false; // Set loading to false once fetching is complete
      }
    };

    // onMounted hook to call fetchProducts when the component is mounted
    onMounted(() => {
      fetchProducts();
    });

    // Return the reactive variables and functions to be used in the template
    return {
      products,
      loading,
      error,
    };
  },
};
</script>

<style>
/* Tailwind CSS is assumed to be available in the environment */
/* If not, you would need to include it in your project setup. */
</style>