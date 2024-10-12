<script lang="ts" setup>

const props = defineProps<{
  id: string
  title: string
  text: string
}>()

</script>

<template>
  <div>
    Component: block/Hero Hello hello
    {{ props.id }}
    {{ props.title }}
    {{ props.text }}
  </div>
</template>

<style scoped></style>
