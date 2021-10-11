const bag = document.querySelector(".header__bag");
const cart = document.querySelector(".cart");
const cardCta = document.querySelector(".card__cta");
const cartTop = document.querySelector(".cart__top");
const cartClose = document.querySelector(".cart__close");
const cartBottom = document.querySelector(".cart__bottom");
const cartContinue = document.querySelector(".cart__continue");
const overlay = document.querySelector(".overlay");

// Event listeners
cardCta.addEventListener("click", function (e) {
  openCart();
});

bag.addEventListener("click", function (e) {
  openCart();
});

cartClose.addEventListener("click", function (e) {
  closeCart();
});

cartContinue.addEventListener("click", function (e) {
  closeCart();
});

overlay.addEventListener("click", function (e) {
  closeCart();
});

// Functions
function openCart() {
  cart.style.display = "flex";
  cart.style.opacity = 1;
  cart.style.width = "100%";
  cartTop.style.display = "flex";
  cartTop.style.opacity = 1;
  cartBottom.style.display = "flex";
  cartBottom.style.opacity = 1;
  overlay.style.display = "block";
  overlay.style.opacity = "1";
}
function closeCart() {
  cart.style.display = "none";
  cart.style.opacity = 0;
  cart.style.width = "0%";
  cartTop.style.display = "none";
  cartTop.style.opacity = 0;
  cartBottom.style.opacity = 0;
  cartBottom.style.display = "none";
  overlay.style.opacity = "0";
  overlay.style.display = "none";
}
