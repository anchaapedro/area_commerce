<template>
  <div class="py-10">
    <Carrossel></Carrossel>
    <section>
      <article>
        <h3
          class="text-[#666666] font-light underline decoration-blue-500 underline-offset-8 mt-5"
        >
          Super Promoção
        </h3>
        <div
          class="flex flex-row gap-5 mt-5 w-full overflow-hidden"
          ref="scrollContainer"
        >
          <ProductCard
            v-for="(item, index) in Product"
            :product="item"
            :key="index"
            :promotion="true"
            :promotionPer="10 + index"
          />
        </div>
      </article>

      <article>
        <div class="flex justify-between items-center mt-5">
          <h3
            class="text-[#666666] font-light underline decoration-blue-500 underline-offset-8"
          >
            Novidades
          </h3>
          <a
            href="/"
            class="text-blue-500 font-light text-xl underline underline-offset-4"
          >
            Ver todos
          </a>
        </div>
        <section>
          <div class="flex items-center flex-wrap gap-6 my-5 overflow-hidden">
            <button
              class="border rounded-lg px-5 py-2"
              :class="
                selectedCategory === item
                  ? 'bg-[#008ECC] text-white'
                  : 'bg-white text-black'
              "
              v-for="(item, index) in categories"
              @click="selectCategory(item)"
              :key="index"
            >
              {{ item }}
            </button>
          </div>
        </section>

        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full gap-5 mt-5"
        >
          <ProductCard
            v-for="(item, index) in Product"
            :product="item"
            :key="index"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Carrossel from "@/components/common/misc/Carrossel.vue";
import ProductCard from "@/components/common/misc/ProductCard.vue";
import "vueperslides/dist/vueperslides.css";
import { Product } from "@/data/mock/product";

export default Vue.extend({
  components: {
    Carrossel,
    ProductCard,
  },
  data: () => ({
    categories: [
      "All",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
    ],
    selectedCategory: "All",
    Product,
  }),
  name: "IndexPage",
  methods: {
    selectCategory(category: string) {
      this.selectedCategory = category;
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  methods: {
    selectCategory(category: string) {
      this.selectedCategory = category;
    },
    startAutoScroll() {
      const container = this.$refs.scrollContainer as HTMLElement;
      let scrollAmount = 0;

      const scrollStep = () => {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scrollStep);
      };

      scrollStep();
    },
  },
});
</script>

<style scoped>
.auto-scroll {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
