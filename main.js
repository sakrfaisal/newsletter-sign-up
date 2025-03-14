const MessageCard = ``;
const subscribePage = `
<div class="-mt-4 sm:mt-0 sm:py-6 sm:pr-6 sm:w-83">
  <picture>
    <source
      srcset="images/illustration-sign-up-mobile.svg"
      media="(max-width: 639px)"
    />
    <img
      src="images/illustration-sign-up-desktop.svg"
      alt="Devices"
      class="w-full h-full rounded-[15px] object-cover"
    />
  </picture>
</div>
<div
  class="content sm:max-w-109 flex flex-col justify-center px-6 py-8 sm:p-10 gap-6 text-[var(--custom-blue800)]"
>
  <h1 class="text-[3.25rem] font-bold -mb-3">Stay updated!</h1>
  <p class="font-medium">
    Join 60,000+ product managers receiving monthly <wbr />updates on:
  </p>
  <ul class="flex flex-col gap-3 mb-2">
    <li class="flex gap-3 items-centers">
      <img
        src="images/icon-success.svg"
        alt="Check"
        width="20px"
      />Product discovery and building what matters
    </li>
    <li class="flex gap-3 items-centers">
      <img
        src="images/icon-success.svg"
        alt="Check"
        width="20px"
      />Measuring to ensure updates are a success
    </li>
    <li class="flex gap-3 items-centers">
      <img src="images/icon-success.svg" alt="Check" width="20px" />And
      much more!
    </li>
  </ul>
  <form action="" class="flex flex-col gap-5">
    <div>
      <label for="email" class="block mb-1 text-xs font-semibold"
        >Email address</label
      >
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email@company.com"
        class="w-full px-6 py-3 outline-none rounded-md border-1 border-gray-400"
      />
    </div>
    <input
      type="submit"
      value="Subscribe to monthly newsletter"
      class="px-6 py-3 outline-none rounded-md bg-[var(--custom-blue800)] text-white"
    />
  </form>
</div>
`;
const mainElement = document.getElementsByTagName("main")[0];
const form = document.forms[0];
const emailInput = form.querySelector("input");
const dismissButton = document;
const validationMsg = document.getElementById("validationMsg");

form.onsubmit = function (event) {
  event.preventDefault();
  isValid = validateEmail(emailInput.value);
  if (isValid) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    validationMsg.style.display = "none";
    emailInput.value = "";
    document.getElementById("subscribe-content").style.display = "none";
    document.getElementById("success-message").style.display = "flex";
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    validationMsg.style.display = "block";
  }
};

dismissButton.onclick = function () {
  document.getElementById("subscribe-content").style.display = "flex";
  document.getElementById("success-message").style.display = "none";
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
