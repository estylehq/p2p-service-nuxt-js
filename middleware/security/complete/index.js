export default function({ store, app, redirect }) {
  const isRequested = store.state.security.success;
  if (isRequested) {
    return;
  }
  redirect(app.localePath('index'));
}
