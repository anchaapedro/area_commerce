<template>
  <button
    class="text-gray-500 w-10 h-10 relative focus:outline-none"
    @click="toggleMenu"
  >
    <div
      class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 transform transition duration-500 ease-in-out"
        :class="{
          'bg-black': !customColor,
          [customColor]: customColor,
          'rotate-45': isMenuOpen,
          ' -translate-y-1.5': !isMenuOpen,
        }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 transform transition duration-500 ease-in-out"
        :class="{
          'bg-black': !customColor,
          [customColor]: customColor,
          'opacity-0': isMenuOpen,
        }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 transform transition duration-500 ease-in-out"
        :class="{
          'bg-black': !customColor,
          [customColor]: customColor,
          '-rotate-45': isMenuOpen,
          ' translate-y-1.5': !isMenuOpen,
        }"
      ></span>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuButton',
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
    customColor: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    },
  },
})
</script>

<style scoped></style>
