import Vue from "vue";
import Vuex from "vuex";

import articleService from "../services/article";
import makeDataModel from "./modules/data-model";
import makePaginatedList from "./modules/paginated-list";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles: makeDataModel({ service: articleService }),
    latestArticles: makePaginatedList({
      dataModel: "articles",
      name: "latestArticles"
    }),
    userArticles: makePaginatedList({
      dataModel: "articles",
      name: "userArticles"
    })
  },
  strict: true
});
