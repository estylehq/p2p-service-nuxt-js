export default async function({ store, route }) {
  const isSignedIn = store.state['sign-in'].success;
  if (isSignedIn) {
    return;
  }
  const id = route.params.id;
  await store.dispatch('invest/detail/get', id);
}
