export default function makePaginatedList({ dataModel, name }) {
  return {
    namespaced: true,
    actions: {
      async FETCH_PAGE({ commit, dispatch }, query = {}) {
        const key = `${name}_FETCH_PAGE`;
        const payload = { key, query };
        const queryId = await dispatch(`${dataModel}/FETCH_ITEMS`, payload, {
          root: true
        });
        commit("SET_QUERY_ID", { queryId });
      }
    },
    mutations: {
      SET_QUERY_ID(state, { queryId }) {
        state.queryId = queryId;
      }
    },
    getters: {
      items(state, _, __, rootGetters) {
        return rootGetters[`${dataModel}/items`](state.queryId);
      },
      meta(state, _, __, rootGetters) {
        const response = rootGetters[`${dataModel}/response`](state.queryId);
        if (!response) return { page: 0, pages: 0, pageSize: 0, total: 0 };
        return response.meta;
      }
    },
    state: {
      queryId: null
    }
  };
}
