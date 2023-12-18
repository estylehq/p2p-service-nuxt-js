export default async function({ store }) {
  await store.dispatch('support/faq/categories/getCategories');
  const type = store.state.support.faq.categories.items[0];
  await store.dispatch('support/faq/items/getList', type.value);
}
