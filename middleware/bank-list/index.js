export default async function({ store }) {
  const { success } = store.state['bank-list'];
  if (success) {
    return;
  }
  await store.dispatch('bank-list/getList');
}
