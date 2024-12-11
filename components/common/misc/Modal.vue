<template>
  <div
    class="backdrop backdrop-filter backdrop-blur-sm fixed inset-0 flex items-center justify-center z-20"
  >
    <div
      class="py-8 rounded-lg shadow bg-white mx-6 lg:mx-0"
      :style="setModalSize"
    >
      <div class="w-full relative">
        <div
          class="absolute rounded-full p-2 bg-white hover:bg-gray-300 ease-in duration-150 text-right right-0 bottom-10 cursor-pointer"
          @click="$emit('close')"
        >
          <close-icon class="w-4 h-4 fill-current hover:text-gray-300" />
        </div>
      </div>
      <div class="w-full flex flex-col px-6 relative">
        <div
          v-if="loading"
          class="inset-0 absolute bg-white opacity-75 z-30"
        ></div>
        <div
          v-if="loading"
          class="inset-0 absolute z-40 h-full w-full flex flex-wrap justify-center items-center flex-col"
        >
          <loading></loading>
        </div>
        <div>
          <slot name="header"></slot>
        </div>
        <div>
          <slot name="body"></slot>
        </div>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Loading from '../loaders/loading.vue'
import CloseOutline from '~/assets/icons/close-outline.vue';

export default Vue.extend({
  components: { CloseOutline, Loading },
  props: {
    size: { type: String, default: 'md' },
    loading: { type: Boolean, default: false }
  },
  computed: {
    setModalSize(this: any) {
      const returnSize = {
        'max-width': ''
      }
      if (this.size === 'md') {
        returnSize['max-width'] = '484px'
      }
      if (this.size === 'lg') {
        returnSize['max-width'] = '600px'
      }
      if (this.size === 'xl') {
        returnSize['max-width'] = '768px'
      }
      if (this.size === '2xl') {
        returnSize['max-width'] = '840px'
      }
      return returnSize
    }
  }
})
</script>
<style>
.backdrop {
  background-color: rgba(0, 0, 40, 0.5);
}
</style>
