<template>
  <div>
    <h2>My Articles</h2>
    <PaginatedList
      :items="articles"
      :meta="meta"
      @page="fetchPage"
    />
  </div>
</template>

<script>
import PaginatedList from "./PaginatedList";

import store from '../store';

export default {
  name: "MyArticles",
  components: {
    PaginatedList,
  },
  created() {
    this.fetchPage();
  },
  methods: {
    fetchPage(page = 1) {
      store.dispatch('userArticles/FETCH_PAGE', { page, userId: 2 });
    },
  },
  computed: {
    articles() {
      return store.getters['userArticles/items'];
    },
    meta() {
      return store.getters['userArticles/meta'];
    },
  },
};
</script>
