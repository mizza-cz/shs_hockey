document.addEventListener("click", function (e) {
  const link = e.target.closest('a[data-bs-toggle="modal"][data-product]');

  if (!link) return;

  e.preventDefault();

  const product = link.dataset.product;
  const url = new URL(window.location.href);

  url.searchParams.set("product", product);

  history.pushState({ product }, "", url);
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("hidden.bs.modal", function () {
    const url = new URL(window.location.href);

    url.searchParams.delete("product");

    history.replaceState({}, "", url);

    modal.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.src;

      iframe.src = "";
      iframe.src = src;
    });
  });
});
