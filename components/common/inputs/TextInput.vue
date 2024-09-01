<template>
  <div class="flex flex-col mb-3">
    <span id="label" class="mb-2">{{ label }}</span>
    <div class="relative w-full">
      <input
        v-model="inputValue"
        class="w-full py-2 px-4 outline-none"
        :class="{
          'border rounded bg-gray-100 border-gray-300 focus:border-2  focus:border-primary-default':
            isBorder,
          'cursor-not-allowed text-gray-400': disabled,
        }"
        :type="type"
        :min="min"
        :max="max"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <slot v-if="icon"></slot>
    </div>
    <span v-if="!!error" id="error" class="text-red-500 text-xs py-2">{{
      error
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TextInput",
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: "",
    },
    max: {
      type: String,
      default: "",
    },
    isBorder: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    inputValue: {
      get(): any {
        return this.value;
      },
      set(value: any) {
        this.$emit("input", value);
      },
    },
  },
});
</script>
