export default async function({ store, route }) {
  const { page } = route.query;
  await store.dispatch('support/notice/list/getList', page, { root: true });
}
