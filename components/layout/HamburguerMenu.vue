<template>
  <button class="w-max" @click="toggleMenu">
    <div
      class="hamburger-shadow bg-transparentWhite-default relative h-12 w-12 flex items-center justify-center rounded-md transition-all ease-in-out duration-200 all cursor-pointer"
    >
      <span
        class="icon-1"
        :class="{ a: isMenuOpen }"
        :style="{ backgroundColor: isMenuOpen ? 'black' : 'white' }"
      ></span>
      <span
        class="icon-2"
        :class="{ 'opacity-0': isMenuOpen }"
        :style="{ backgroundColor: isMenuOpen ? 'black' : 'white' }"
      ></span>
      <span
        class="icon-3"
        :class="{ c: isMenuOpen }"
        :style="{ backgroundColor: isMenuOpen ? 'black' : 'white' }"
      ></span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    },
  },
}
</script>

<style scoped>
.icon-1,
.icon-2,
.icon-3 {
  position: absolute;
  width: 25px;
  height: 2px;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
}

.icon-1 {
  transform: translateY(-8px);
  animation-delay: 100ms;
}

.icon-3 {
  transform: translateY(8px);
  animation-delay: 250ms;
}

.hamburger-shadow {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.a {
  transform: rotate(40deg);
}

.c {
  transform: rotate(-40deg);
}
</style>
