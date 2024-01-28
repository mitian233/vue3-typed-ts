# Vue3 Typed.js

A Vue3 component for Typed.js with TypeScript support. You can use it in Vue3 + TypeScript projects.

## Usage

### Install

```shell
npm install vue3-typed-ts typed.js sass
```

### Import

```vue
<script setup lang="ts">
  import {VueTypedJs} from "vue3-typed-ts";
</script>

<template>
  <VueTypedJs
    :strings="['Hello World', 'Hello Vue3']"
    :typeSpeed="100"
    :backSpeed="100"
    :loop="true"
  >
    <span class="typing"></span>
  </VueTypedJs>
</template>
```
