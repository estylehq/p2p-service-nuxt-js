export default function({ store, app, redirect }) {
  const { success } = store.state['sign-in'];
  if (!success) {
    return;
  }
  redirect(app.localePath('user-dashboard'));
}
