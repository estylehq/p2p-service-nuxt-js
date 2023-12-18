export default function({ app, store }) {
  app.router.afterEach((to, from) => {
    if (!from.name) {
      return;
    }
    const isIncludesUserFrom = from.name.includes('user-');
    const isIncludesUserTo = to.name.includes('user-');
    if (!isIncludesUserFrom) {
      return;
    }
    if (isIncludesUserTo) {
      return;
    }
    store.dispatch('user/check-password/clear');
  });
}
