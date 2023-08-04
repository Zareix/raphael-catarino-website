export const closeDialog = (dialog: HTMLDialogElement) => {
  dialog.setAttribute('closing', '');
  dialog.addEventListener(
    'animationend',
    () => {
      dialog.removeAttribute('closing');
      dialog.close();
    },
    { once: true },
  );
};

export const handleDialogBackdropClick = (
  dialog: HTMLDialogElement | undefined | null,
) => {
  dialog?.addEventListener('click', (event) => {
    event.stopPropagation();
    const rect = dialog.getBoundingClientRect();
    if (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    ) {
      return;
    }
    closeDialog(dialog);
  });
};
