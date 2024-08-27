<template>
  <button
    class="px-3 py-1.5 cursor-pointer justify-center items-center rounded group"
    :class="[loadingButton, setVariant, { 'cursor-not-allowed ': disabled }]"
    :disabled="disabled"
    :style="setSize"
    @click="handleClick"
  >
    <span
      class="flex w-full justify-center items-center gap-2 select-none"
      :class="setColor"
    >
      <div v-if="loading" class="fill-current mr-2 mt-0.5">
        <loading class="animate-spin text-white fill-current h-4 w-4" />
      </div>
      <slot v-if="icon" class="fill-current" name="icon"> </slot>
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts">
import loading from '~/assets/icons/loading.vue'
export default {
  name: 'AppButton',
  components: { loading },
  props: {
    label: {
      type: String,
      default: '',
    },
    setColor: {
      type: String,
      default: 'text-white',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'bg-primary-default"',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    setVariant(this: any) {
      return this.variant
    },
    loadingButton(this: any) {
      const classes = {} as any
      if (this.loading) classes['opacity-50 cursor-not-allowed'] = true
      return classes
    },
    setSize(this: any) {
      const size = {
        width: '',
        height: '',
      }
      if (this.size === 'small') {
        size.width = '120px'
        size.height = '40px'
      } else if (this.size === 'medium') {
        size.width = '218px'
        size.height = '40px'
      } else if (this.size === 'large') {
        size.width = '332px'
        size.height = '40px'
      }
      return size
    },
  },
  methods: {
    handleClick(this: any) {
      if (!this.disabled) {
        this.$emit('clicked')
      }
    },
  },
}
</script>
