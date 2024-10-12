<script lang="ts" setup>
// import {getPageQuery} from "~/graphql/page";
// import Hero from "~/components/block/Hero.vue";
// import CTA from "~/components/block/CTA.vue";
// import Blog from "~/components/block/Blog.vue";
// import Services from "~/components/block/Services.vue";
// import About from "~/components/block/About.vue";
// import Team from "~/components/block/Team.vue";

// const graphql = useStrapiGraphQL()
// const $documentId = 'm6q2wx2rvi76mhmmbcss7u6p'
// const pages = await graphql(getPageQuery, {documentId: $documentId})
//
// const components = await pages?.data?.page?.components

const { find } = useStrapi()
const response = await find('articles')

</script>

<template>
  <div>
    <pre>
      {{response}}
    </pre>

<!--    <div>-->
<!--      <div v-if="components && components.length">-->
<!--        <div v-for="component in components" :key="component.id">-->
<!--          <component-->
<!--              v-if="componentMap[component.__typename]"-->
<!--              :is="componentMap[component.__typename]"-->
<!--              v-bind="component"-->
<!--          ></component>-->
<!--          <div v-else>-->
<!--            <p>Ismeretlen komponens típusa: {{ component.__typename }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-else>-->
<!--        <p>Nincsenek komponensek.</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped></style>
