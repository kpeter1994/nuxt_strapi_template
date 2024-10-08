<script lang="ts" setup>

const { find } = useStrapi()

const response = await find('articles')

</script>

<template>
  <div>
    <pre>
      {{response}}
    </pre>
  </div>
</template>

<style scoped></style>
