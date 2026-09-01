function handlePopup() {
  const popup = document.getElementById("popup");

  if (!popup) return;

  const cookieName = "cts_popup";

  const popupWasClosed = document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith(`${cookieName}=`));

  if (popupWasClosed) {
    popup.style.display = "none";
    return;
  }

  function closePopup() {
    popup.style.display = "none";

    const expires = new Date();
    expires.setMonth(expires.getMonth() + 1);

    document.cookie = `${cookieName}=1; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

    document.removeEventListener("keydown", handleEscape);
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      closePopup();
    }
  }

  popup.style.display = "flex";

  popup.querySelectorAll(".popup__close, .popup__link").forEach((element) => {
    element.addEventListener("click", closePopup);
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup();
    }
  });

  document.addEventListener("keydown", handleEscape);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handlePopup);
} else {
  handlePopup();
}
