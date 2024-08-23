<template>
  <section
    class="flex flex-col relative border border-gray-300 rounded-md p-4 cursor-pointer"
  >
    <span
      v-if="canExclude"
      id="remove"
      class="flex absolute top-1 right-2 z-10 px-2 justify-center items-center rounded-full hover:bg-red-400 hover:text-white border-2 text-gray-400 font-semibold duration-300 select-none"
      @click="$emit('remove', { position, product })"
      >X</span
    >
    <span
      v-if="promotion"
      title="Reverter"
      class="flex absolute top-1 right-2 z-10 rounded-md border-2 border-blue-400 hover:bg-blue-400 hover:text-white w-10 h-10 justify-center items-center group transition duration-300"
      @click="$emit('revertExclusion', product)"
    >
      {{ promotionPer }}%
    </span>
    <img
      class="w-full h-20 md:h-28 object-scale-down transform duration-300 hover:scale-110"
      :src="product.image"
      alt="image-alt"
      @click="$emit('edit', product)"
    />
    <div class="flex flex-col w-56">
      <span id="title" class="text-sm sm:text-md font-semibold"
        >MT {{ currencyFormat(product.price) }}</span
      >
      <p id="description" class="text-xs sm:text-sm text-gray-400">
        {{ product.description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { IProduct } from "~/data/types";
import { currencyFormat } from "~/utils";
import Swap from "~/assets/icons/swap.vue";

export default {
  components: {
    Swap,
  },
  props: {
    product: {
      type: Object as () => IProduct,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    canExclude: {
      type: Boolean,
      default: false,
    },
    promotion: {
      type: Boolean,
      default: false,
    },
    promotionPer: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currencyFormat,
  }),
};
</script>
