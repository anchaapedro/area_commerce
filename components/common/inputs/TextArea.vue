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
      <div class="flex flex-row w-full">
        <textarea
          v-model="inputValue"
          class="
            w-full
            py-1.5
            px-2
            ring-1 ring-tertiary-light ring-opacity-20
            rounded-sm
            focus:outline-none
            resize-none
          "
          :class="[setStyle]"
          :rows="rows"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @blur="$emit('blur', inputValue)"
          @focus="$emit('focus', inputValue)"
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
export default {
  name: 'TextArea',
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
    disabled: {
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
    resizeble: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: [Number, String],
      default: 5,
    },
  },
  computed: {
    inputValue: {
      get(this: any) {
        return this.value
      },
      set(this: any, value: any) {
        this.$emit('input', value)
      },
    },
    setStyle(this: any) {
      const style = {} as any
      style[`${this.customStyle}`] = true
      return style
    },
  },
}
</script>
