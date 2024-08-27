import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  confirmed,
  length,
  between,
  regex,
  min_value,
  numeric,
  integer,
} from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('email', { ...email, message: 'Email não é válido' })

extend('required', {
  ...required,
  message: 'Este campo é obrigatório',
})

extend('min', {
  ...min,
  validate(value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'O campo {_field_} deve conter no minimo {length} caracteres',
})
extend('max', {
  ...max,
  validate(value, { length }) {
    return value.length <= length
  },
  params: ['length'],
  message: 'O campo {_field_} deve conter no maxímo {length} caracteres',
})

extend('length', {
  ...length,
  // params: ['length'],
  message: 'O campo deve conter {length} caracteres',
})

extend('between', {
  ...between,
  params: ['min', 'max'],
  message: 'O campo {_field_} deve estar entre {min}, {max}',
})
extend('min_value', {
  ...min_value,
  message: 'O campo não deve possuir um número menor que 1',
})

extend('numeric', {
  ...numeric,
  message: 'O campo deve ter apenas números inteiros',
})

extend('integer', {
  ...integer,
  message: 'O campo deve ter números inteiros',
})

extend('regex', {
  ...regex,
  message: 'O formato do campo {_field_} não é valido',
})

extend('confirmed', {
  ...confirmed,
  message: 'Senhas diferentes. Digite a mesma senha em ambos os campos.',
})
