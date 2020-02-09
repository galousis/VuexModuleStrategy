<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
    <template v-if="meta.pages > 1">
      <button :disabled="meta.page <= 1" @click="$emit('page', meta.page - 1)">&laquo;</button>
      &nbsp;
      <span>{{ meta.page }}</span>
      of
      <span>{{ meta.pages }}</span>
      &nbsp;
      <button
        :disabled="meta.page >= meta.pages"
        @click="$emit('page', meta.page + 1)"
      >&raquo;</button>
    </template>
  </div>
</template>

<script>
export default {
  name: "PaginatedList",
  props: {
    items: {
      default: () => [],
      type: Array
    },
    meta: {
      required: true,
      type: Object
    }
  }
};
</script>
