//get dropdown from document
const dropdowns = document.querySelectorAll(".faq");

//loop through all dropdown elements
dropdowns.forEach((faq) => {
  //get inner element from each dropdown
  const accordion = faq.querySelector(".accordion");
  const fag__icon = faq.querySelector(".faq__icon");
  const pannel = faq.querySelector(".pannel");
  const options = faq.querySelectorAll(".pannel p");

  //add a click event to the select element
  accordion.addEventListener("click", () => {
    //add the clicked select styles to the selected element
    accordion.classList.toggle("accordion-clicked");
    //add the clicked select styles to the selected element
    fag__icon.classList.toggle("faq__icon--rotate");
    //add the clicked select styles to the selected element
    pannel.classList.toggle("pannel-open");
  });
});

//ques sidebar focus
function changeColor(selectedElement) {
  // Lấy tất cả các phần tử dòng text
  const items = document.querySelectorAll(".ques-item a");

  // Xóa lớp 'red' khỏi tất cả các phần tử
  items.forEach((item) => item.classList.remove("ques-item__active"));

  // Thêm lớp 'red' vào phần tử đã chọn
  selectedElement.classList.add("ques-item__active");
}

//more dropdown on mobile
const mainques = document.querySelectorAll(".main-ques__content");
mainques.forEach((quesHeading) => {
  const heading = quesHeading.querySelector(".main-ques__heading");
  const faq = quesHeading.querySelector(".faq--block");

  heading.addEventListener("click", () => {
    heading.classList.toggle("main-ques__heading--active");
    faq.classList.toggle("faq--block--active");
  });
});

// <!-- Dropdown language -->
//get dropdown from document
const languages = document.querySelectorAll(".dropdown");

//loop through all dropdown elements
languages.forEach((faq) => {
  //get inner element from each dropdown
  const select = faq.querySelector(".select");
  const menu = faq.querySelector(".dropdown--list");
  const options = faq.querySelectorAll(".dropdown--item");

  //add a click event to the select element
  select.addEventListener("click", () => {
    //add the clicked select styles to the selected element
    select.classList.toggle("select-clicked");
    //add the clicked select styles to the selected element
    menu.classList.toggle("dropdown--list-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      menu.classList.remove("dropdown--list-open");
      options.forEach((option) => {
        option.classList.remove("dropdown--item__active");
      });
      option.classList.add("dropdown--item__active");
    });
  });
});

/* form pop-up */
document.addEventListener("DOMContentLoaded", (event) => {
  const section = document.querySelector(".form--popup"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal button"),
    showEmail = document.querySelector(".show-email button"),
    closeBtn = document.querySelector(".close-btn");

  showBtn.addEventListener("click", () => section.classList.add("active"));
  showEmail.addEventListener("click", () => section.classList.add("active"));
  overlay.addEventListener("click", () => section.classList.remove("active"));
  closeBtn.addEventListener("click", () => section.classList.remove("active"));
});

/**/

$(document).ready(function () {
  // Handle submit for info form
  $("#infoForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission
    $.ajax({
      url: "FAQS-jp.php",
      type: "POST",
      data: $(this).serialize() + "&action=Submit Info",
      success: function (response) {
        console.log("Infor form submitted successfully.");
        // alert(response);
      },
    });
  });

  // Handle submit for email form
  $("#emailForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission
    $.ajax({
      url: "FAQS-jp.php",
      type: "POST",
      data: $(this).serialize() + "&action=Submit Email",
      success: function (response) {
        console.log("Email form submitted successfully.");
        $("#popupbox").modal("show");
      },
    });
  });
});

//  <!-- click text copy -->
function copyToClipboard(element, text) {
  // Create a temporary input element
  var tempInput = document.createElement("input");
  // Set its value to the text to be copied
  tempInput.value = text;
  // Append it to the body
  document.body.appendChild(tempInput);
  // Select the text in the input
  tempInput.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Alert the user that the text has been copied
  // alert("Copied to clipboard: " + text);
  var notification = element.querySelector(".copy-notification");
  notification.style.display = "inline";
  setTimeout(function () {
    notification.style.display = "none";
  }, 2000); // Hide the notification after 2 seconds
}

// footer--validate
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("user_email");
  const submitFooterBtn = document.getElementById("submitFooterBtn");
  const emailHelp = document.getElementById("emailHelp");

  emailInput.addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "") {
      emailHelp.textContent = "";
      submitFooterBtn.disabled = true;
    } else if (!emailPattern.test(emailInput.value)) {
      emailHelp.textContent = "無効な電子メール";
      submitFooterBtn.disabled = true;
    } else {
      emailHelp.textContent = "";
      submitFooterBtn.disabled = false;
    }
  });

  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      if (!submitFooterBtn.disabled && emailPattern.test(emailInput.value)) {
        // Perform actions upon valid submission
        console.log("Email submitted:", emailInput.value);
      } else {
        emailHelp.textContent = "無効な電子メール";
      }
    });
});

//
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const contentInput = document.getElementById("content");
  const submitBtn = document.getElementById("submitBtn");
  const nameHelp = document.getElementById("nameHelp");
  const phoneHelp = document.getElementById("phoneHelp");
  const contentHelp = document.getElementById("contentHelp");

  // Regular expressions for validation
  const phonePattern = /^\d{10}$/; // Example pattern for a 10-digit phone number

  function validateForm() {
    const nameValid =
      nameInput.value.length > 0 && nameInput.value.length <= 16;
    const phoneValid = phonePattern.test(phoneInput.value);
    const contentValid = contentInput.value.trim().length > 0;

    nameInput.addEventListener("input", function () {
      if (nameInput.value === "") {
        nameHelp.textContent = "名前を空白にすることはできません";
        submitBtn.disabled = true;
      } else if (nameInput.value.length > 16) {
        nameHelp.textContent = "無効な名前 (最大 16 文字)";
        submitBtn.disabled = true;
      } else {
        nameHelp.textContent = "";
        submitBtn.disabled = false;
        // Thực hiện các hành động submit khác ở đây
      }
    });

    phoneInput.addEventListener("input", function () {
      if (phoneInput.value === "") {
        phoneHelp.textContent = "電話番号を空白にすることはできません";
        submitBtn.disabled = true;
      } else if (!phonePattern.test(phoneInput.value)) {
        phoneHelp.textContent = "無効な電話番号";
        submitBtn.disabled = true;
      } else {
        phoneHelp.textContent = "";
        submitBtn.disabled = false;
        // Thực hiện các hành động submit khác ở đây
      }
    });

    contentInput.addEventListener("input", function () {
      if (contentInput.value === "") {
        contentHelp.textContent = "コンテンツを空にすることはできません";
        submitBtn.disabled = true;
      } else if (contentInput.value.trim().length <= 0) {
        contentHelp.textContent = "コンテンツを空にすることはできません";
        submitBtn.disabled = true;
      } else {
        contentHelp.textContent = "";
        submitBtn.disabled = false;
        // Thực hiện các hành động submit khác ở đây
      }
    });

    // Enable/disable submit button based on validation
    submitBtn.disabled = !(nameValid && phoneValid && contentValid);
  }

  // Call validateForm initially and on every input change
  validateForm();
  nameInput.addEventListener("input", validateForm);
  phoneInput.addEventListener("input", validateForm);
  contentInput.addEventListener("input", validateForm);

  document
    .getElementById("infoForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate form before showing popup
      validateForm();

      if (!submitBtn.disabled) {
        // Perform actions upon valid submission
        console.log(
          "Form submitted:",
          nameInput.value,
          phoneInput.value,
          contentInput.value
        );
      } else {
        nameHelp.textContent = "無効な名前 (最大 16 文字)";
        phoneHelp.textContent = "無効な電話番号";
        contentHelp.textContent = "コンテンツを空にすることはできません";
      }
    });
});
