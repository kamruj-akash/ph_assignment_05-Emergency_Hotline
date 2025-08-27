// re-useable function
function getByID(id) {
  return document.getElementById(id);
}
function getByClassName(id) {
  return document.getElementsByClassName(id);
}

// call btn function
const callCartBtn = getByClassName("card_call_btn");

for (const cartBtn of callCartBtn) {
  cartBtn.addEventListener("click", function () {
    if (Number(getByID("coin_count").innerText) > 0) {
      const newCoins = Number(getByID("coin_count").innerText) - 20;
      getByID("coin_count").innerText = newCoins;
    } else {
      alert("Not Enough Coin");
    }
  });
}

// copy count function
const copyCartBtn = getByClassName("card_copy_btn");

for (const cartBtn of copyCartBtn) {
  cartBtn.addEventListener("click", function () {
    const newCopy = Number(getByID("copy_count").innerText) + 1;
    getByID("copy_count").innerText = newCopy;
  });
}
// heart count function
const cartHeartBtn = getByClassName("heart_add_btn");

for (const cartBtn of cartHeartBtn) {
  cartBtn.addEventListener("click", function () {
    const newHear = Number(getByID("heart_count").innerText) + 1;
    getByID("heart_count").innerText = newHear;
  });
}
