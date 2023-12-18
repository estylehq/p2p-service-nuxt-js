export default async function({ store, route }) {
  const { id } = route.params;
  await store.dispatch('support/notice/detail/get', id, { root: true });
}
