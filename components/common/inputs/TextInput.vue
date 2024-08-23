<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <div class="flex flex-col gap-1">
      <span
        v-if="label"
        id="label"
        class="flex flex-row items-center select-none"
        >{{ label }}
        <strong v-if="required" class="text-primary-default ml-1"
          >*</strong
        ></span
      >
      <div class="flex flex-row w-full relative">
        <div class="absolute left-2 px-2 py-2 h-10 z-10">
          <slot name="icon" />
        </div>
        <input
          v-model="inputValue"
          class="w-full relative py-1.5 px-2 ring-1 ring-tertiary-light ring-opacity-20 focus:outline-none"
          :class="[setStyle, { 'pr-10': type === 'password', 'pl-10': icon }]"
          :type="setType"
          :min="min"
          :max="max"
          :name="name"
          :rules="rules"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @blur="$emit('blur', inputValue)"
          @focus="$emit('focus', inputValue)"
        />
        <eye-outline
          v-if="type === 'password'"
          id="toggle-Password"
          class="absolute right-0 py-3 h-10 w-10 cursor-pointer"
          @click.native="hiddenPassword = !hiddenPassword"
        />
      </div>
      <span v-if="errors[0]" class="text-primary-default text-xs">{{
        errors[0]
      }}</span>
      <span
        v-if="description"
        class="flex text-xs text-primary-light text-opacity-50"
        >{{ description }}</span
      >
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import eyeOutline from '~/assets/icons/eye-outline.vue'
export default {
  name: 'TextInput',
  components: { eyeOutline },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    customStyle: {
      type: String,
      default: 'bg-quaternary-default',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    rounded: {
      type: String,
      default: 'rounded-sm',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    hiddenPassword: true,
  }),
  computed: {
    inputValue: {
      get(this: any) {
        return this.value
      },
      set(this: any, value: any) {
        this.$emit('input', value)
      },
    },
    setType(this: any) {
      if (this.type === 'password' && this.hiddenPassword) return 'password'
      if (this.type === 'password' && !this.hiddenPassword) return 'text'
      return this.type
    },
    setStyle(this: any) {
      const style = {} as any
      style[`${this.customStyle} ${this.rounded}`] = true
      return style
    },
  },
}
</script>
