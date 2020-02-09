export default {
  // Pseudo code for demonstration purposes only.
  async list({ page = 1, pageSize = 10, userId }) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts${userId ? `?userId=${userId}` : ''}`)
      .then(response => response.json());

    const inRange = i => i < pageSize * page && i >= pageSize * page - pageSize;
    return {
      data: posts.filter((_, i) => inRange(i)),
      meta: {
        page,
        pageSize,
        pages: Math.ceil(posts.length / pageSize),
        total: posts.length,
      },
    };
  }
};
