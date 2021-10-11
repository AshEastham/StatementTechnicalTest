// Get elements
const bag = document.querySelector(".header__bag");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart__container");
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
  cart.style.width = "100%";
  cartTop.style.width = "100%";
  cartTop.style.opacity = "1";
  cartBottom.style.width = "100%";
  cartBottom.style.opacity = "1";
  overlay.style.display = "block";
  overlay.style.opacity = "1";
  document.body.style.top = "${window.scrollY}px";
}

function closeCart() {
  cart.style.width = "0%";
  cartTop.style.width = "0%";
  cartTop.style.opacity = "0";
  cartBottom.style.width = "0%";
  cartBottom.style.opacity = "0";
  overlay.style.display = "none";
  overlay.style.opacity = "0";
  document.body.style.position = "";
  document.body.style.top = "";
}
