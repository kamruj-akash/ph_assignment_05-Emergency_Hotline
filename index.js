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

      //call history append
      const callHistoryTittle =
        cartBtn.parentNode.parentNode.children[1].innerText;
      const callHistorySubTittle =
        cartBtn.parentNode.parentNode.children[2].innerText;
      const callNumber = cartBtn.parentNode.parentNode.children[3].innerText;
      const localTime = new Date().toLocaleTimeString();

      const callHistoryParent = getByID("call_history_parent");
      const newCallHistory = document.createElement("div");
      newCallHistory.innerHTML = `
       <div
              class="flex justify-between bg-[#FAFAFA] rounded-xl p-4 mt-4 gap-y-2 md:p-2 md:flex-col lg:flex-row lg:p-4"
            >
              <div class="w-2/3 md:w-full lg:w-2/3">
                <h1 class="text-[#111111] text-xl font-semibold mb-1">
                 ${callHistoryTittle}
                </h1>
                <p class="text-[#5C5C5C] text-sm font-normal">${callNumber}</p>
              </div>
              <div
                class="w-1/3 flex justify-center items-center md:w-full lg:w-1/3"
              >
                <p class="text-[#5C5C5C] text-sm font-normal">${localTime}</p>
              </div>
            </div>
      `;
      callHistoryParent.appendChild(newCallHistory);
      // calling alert
      alert(`📞 Calling ${callHistorySubTittle} ${callNumber}...`);
    } else {
      alert(
        "❗You don't have enough coins! You need at least 20 coins to make a call."
      );
    }
  });
}

// copy count function
const copyCartBtn = getByClassName("card_copy_btn");

for (const cartBtn of copyCartBtn) {
  cartBtn.addEventListener("click", function () {
    const callNumber = cartBtn.parentNode.parentNode.children[3].innerText;
    // count function
    const newCopy = Number(getByID("copy_count").innerText) + 1;
    getByID("copy_count").innerText = newCopy;
    // copy function
    navigator.clipboard.writeText(callNumber).then(() => {
      alert("The number has been copied: " + callNumber);
    });
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

// delete call history function
getByID("clear_callHistory_btn").addEventListener("click", function () {
  getByID("call_history_parent").innerHTML = "";
});
