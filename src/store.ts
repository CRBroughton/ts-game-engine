import { ref } from 'vue'

export const store = () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  return {
    counter,
    increment,
  }
}
