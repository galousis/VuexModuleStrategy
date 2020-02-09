<template>
  <div>
    <h2>Latest Articles</h2>
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
  name: "LatestArticles",
  components: {
    PaginatedList,
  },
  created() {
    this.fetchPage();
  },
  methods: {
    fetchPage(page = 1) {
      store.dispatch('latestArticles/FETCH_PAGE', { page });
    },
  },
  computed: {
    articles() {
      return store.getters['latestArticles/items'];
    },
    meta() {
      return store.getters['latestArticles/meta'];
    },
  },
};
</script>
