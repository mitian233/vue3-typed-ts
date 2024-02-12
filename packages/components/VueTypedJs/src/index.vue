<script setup lang="ts">
import Typed from 'typed.js';
import {TypedOptions} from 'typed.js';
import {props as TypedProps, getEventHandlers} from "./typed-component.config";
import {onMounted, onUnmounted, ref, getCurrentInstance, ComponentInternalInstance, useSlots, watch} from "vue";

const {proxy, props} = getCurrentInstance() as ComponentInternalInstance;
const slots = useSlots();
const slotElements = slots.default ? slots.default() : [];

defineProps(TypedProps);

const typedObj = ref<Typed | null>(null);
const typedElement = ref<HTMLDivElement | null>(null);

const throwError = (message: string) => {
  throw new TypeError(message)
}

const initTypedJS = () => {
  const $typed = typedElement.value?.querySelector('.typing');
  if (slotElements.length > 1) {
    throwError(`Just one child element allowed inside VueTypedJs component.`)
  } else if (slotElements.length === 1) {
    const typedConfig = getEventHandlers(proxy, (props as TypedOptions));
    typedObj.value = new Typed($typed, typedConfig);
  }
}

onMounted(() => {
  initTypedJS();
})
watch(props, () => {
  typedObj.value?.destroy();
  initTypedJS();
})
onUnmounted(() => {
  typedObj.value?.destroy();
})

</script>

<template>
  <div class="typed-element" ref="typedElement">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.typed-element {
  display: flex;
  align-items: center;

  .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }
}

@keyframes typedjsBlink {
  50% {
    opacity: 0.0;
  }
}
</style>
