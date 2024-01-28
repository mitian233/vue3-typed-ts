# Vue3 Typed.js

## Usage

### Install

```shell
npm install vue3-typed-js typed.js sass
```

### Import

```vue
<script setup lang="ts">
  import {VueTypedJs} from "vue3-typed-js";
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
