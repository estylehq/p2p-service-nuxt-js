export default async function({ store, route }) {
  const isSignedIn = store.state['sign-in'].success;
  if (isSignedIn) {
    return;
  }
  const pageNumber = parseInt(route.query.page) || 1;
  await store.dispatch('invest/list/getList', pageNumber);
}
