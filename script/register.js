let ERRORS = [];
$(document).ready(() => {
  $("#name").keyup(event => {
    checkValid("name", event.target.value);
  });
  $("#email").keyup(event => {
    checkValid("email", event.target.value);
  });
  $("#phone").keyup(event => {
    checkValid("phone", event.target.value);
  });
  $("#pwd").keyup(event => {
    checkValid("pwd", event.target.value);
  });
  $("#re-pwd").keyup(event => {
    checkValid("re-pwd", event.target.value);
  });
  $("#add").keyup(event => {
    checkValid("add", event.target.value);
  });

  function checkValid(element, value) {
    switch (element) {
      case "name":
        isNameValid(value);
        break;
      case "email":
        isMailValid(value);
        break;
      case "phone":
        isPhoneValid(value);
        break;
      case "pwd":
        isPwdValid(value);
        break;
      case "re-pwd":
        isRePwdValid(value);
        break;
      case "add":
        isAddValid(value);
        break;
      default:
        return;
    }
  }

  function displayError(element) {
    $(`#${element}`).addClass("error");
    if ($(`.${element}-error`).length === 0) {
      $(
        `<div  class="error-message ${element}-error">${
          ERRORS.filter(err => {
            return err.element === element;
          })[0].message
        }</div>`
      ).appendTo($(`#${element}`).parent());
    }
  }

  function removeError(element) {
    $(`#${element}`).removeClass("error");
    $(`.${element}-error`).remove();
  }

  function isNameValid(name) {
    if (name.length < 3 || name.length > 30) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "name";
          }).length > 0
        ) {
          ERRORS.push({
            element: "name",
            message: "Tên không hợp lệ"
          });
        }
      } else {
        ERRORS.push({
          element: "name",
          message: "Tên không hợp lệ"
        });
      }
      displayError("name");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "name";
      });
      removeError("name");
    }
  }

  function isMailValid(email) {
    let emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    if (!email.match(emailRegex)) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "email";
          }).length > 0
        ) {
          ERRORS.push({
            element: "email",
            message: "Email không hợp lệ"
          });
        }
      } else {
        ERRORS.push({
          element: "email",
          message: "Email không hợp lệ"
        });
      }
      displayError("email");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "email";
      });
      removeError("email");
    }
  }

  function isPhoneValid(phone) {
    if (phone.length < 6 || phone.length > 10) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "phone";
          }).length > 0
        ) {
          ERRORS.push({
            element: "phone",
            message: "Số điện thoại không hợp lệ"
          });
        }
      } else {
        ERRORS.push({
          element: "phone",
          message: "Số điện thoại không hợp lệ"
        });
      }
      displayError("phone");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "phone";
      });
      removeError("phone");
    }
  }

  function isPwdValid(pwd) {
    if (pwd.length < 5 || pwd.length > 26) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "pwd";
          }).length > 0
        ) {
          ERRORS.push({
            element: "pwd",
            message: "Password phải từ 6 kí tự đến 26 kí tự"
          });
        }
      } else {
        ERRORS.push({
          element: "pwd",
          message: "Password phải từ 6 kí tự đến 26 kí tự"
        });
      }
      displayError("pwd");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "pwd";
      });
      removeError("pwd");
    }
  }

  function isRePwdValid(pwd) {
    if (pwd.length < 1 || pwd !== $("#pwd").val()) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "re-pwd";
          }).length > 0
        ) {
          ERRORS.push({
            element: "re-pwd",
            message: "Password không khớp"
          });
        }
      } else {
        ERRORS.push({
          element: "re-pwd",
          message: "Password không khớp"
        });
      }
      displayError("re-pwd");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "re-pwd";
      });
      removeError("re-pwd");
    }
  }

  function isAddValid(add) {
    if (add.length < 10 || add.length > 100) {
      if (ERRORS.length > 0) {
        if (
          !ERRORS.filter(err => {
            return err.element === "add";
          }).length > 0
        ) {
          ERRORS.push({
            element: "add",
            message: "Địa chỉ không hợp lệ"
          });
        }
      } else {
        ERRORS.push({
          element: "add",
          message: "Địa chỉ không hợp lệ"
        });
      }
      displayError("add");
    } else {
      ERRORS = ERRORS.filter(error => {
        return error.element !== "add";
      });
      removeError("add");
    }
  }
});
