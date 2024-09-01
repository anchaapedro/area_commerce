<template>
  <div class="py-10">
    <section class="flex flex-col lg:flex-row gap-10">
      <div
        class="flex w-full h-96 items-center justify-center lg:w-1/2 border bg-gray-200 rounded-lg overflow-hidden"
      >
        <img
          :src="product.img"
          alt="Product Image"
          class="w-full h-56 object-contain transform duration-300 hover:scale-110"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ product.title }}
        </h1>
        <p class="text-lg text-gray-700 mb-4">{{ product.description }}</p>
        <div class="flex items-center gap-4 mb-4">
          <span class="text-xl font-semibold text-gray-900">
            ${{ product.price.toFixed(2) }}
          </span>
          <span
            class="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-green-100 text-green-800 rounded-full"
          >
            {{ product.inStock ? "Em estoque" : "Sem stoque" }}
          </span>
        </div>

        <div class="mb-4">
          <label
            for="quantity"
            class="block text-lg font-medium text-gray-700 mb-2"
          >
            Quantidade do Produto
          </label>
          <div class="flex items-center gap-4 mb-2">
            <button
              @click="decrementQuantity"
              :disabled="quantity <= 1"
              class="bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              -
            </button>
            <div class="flex items-center gap-4">
              <span class="text-lg font-medium text-gray-900">
                {{ quantity }}/{{ product.availableQuantity }}
              </span>
              <button
                @click="incrementQuantity"
                :disabled="quantity >= product.availableQuantity"
                class="bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            class="border border-blue-500 hover:text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Comprar agora
          </button>
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>

    <section class="mt-12">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-semibold text-gray-800">
          Produtos Semelhantes
        </h3>
      </div>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5 mt-5"
      >
        <ProductCard
          v-for="(item, index) in similarProducts"
          :product="item"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductCard from "@/components/common/misc/ProductCard.vue";
import { Product } from "@/data/mock/product";

export default Vue.extend({
  components: {
    ProductCard,
  },
  data: () => ({
    similarProducts: Product.slice(0, 10),
    quantity: 1, // Quantidade inicial
  }),
  computed: {
    product() {
      const id = this.$route.params.id;
      return Product[id - 1];
    },
  },
  methods: {
    incrementQuantity() {
      if (this.quantity < this.product.availableQuantity) {
        this.quantity += 1;
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
  name: "ProductDetailsPage",
});
</script>
