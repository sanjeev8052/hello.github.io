$(document).ready(function () {
  $("#hFname").hide();

  fnameError = true; //No Error
  $("#txtFname").keyup(function () {
    validateFname();
  });

  function validateFname() {
    fnameValue = $("#txtFname").val();
    if (fnameValue.length == " ") {
      $("#hFname").show();

      fnameError = false;
      $("#txtFname").focus();
      return false;
    } else if (fnameValue.length < 3 || fnameValue.length > 10) {
      $("#hFname").show();

      $("#hFname").html("**Length of first name is between 2 and 10");
      fnameError = false;
      $("#txtFname").focus();
      return false;
    } else {
      $("#hFname").hide();
    }
  }

  $("#hpass").hide();

  passError = true; //No Error
  $("#txtpass").keyup(function () {
    validatepass();
  });
  function validatepass() {
    // At least 1 Uppercase
    // At least 1 Lowercase
    // At least 1 Symbol, symbol allowed --> !@#$%^&*_=+-
    // Min 8 chars and Max 12 chars

    pattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;
    passValue = $("#txtpass").val();
    if (passValue.length == " ") {
      $("#hpass").show();

      passError = false;
      $("#txtpass").focus();
      return false;
    } else if (!pattern.test(passValue)) {
      $("#hpass").show();
      $("#hpass").text(
        "1 Uppercase,Lowercase,Symbol,number ,symbol allowed !@#$%^&*_=+-,Min 8 chars and Max 12 chars"
      );
      passError = false;
      $("#txtpass").focus();
      return false;
    } else {
      $("#hpass").hide();
    }
  }

  $("#hpass1").hide();

  pass1Error = true; //No Error
  $("#txtpass1").keyup(function () {
    validatepass1();
  });
  function validatepass1() {
    pass1Value = $("#txtpass1").val();
    if (pass1Value != passValue) {
      $("#hpass1").show();

      pass1Error = false;
      $("#txtpass1").focus();
      return false;
    } else {
      $("#hpass1").hide();
    }
  }

  $("#hPhone").hide();

  PhoneError = true; //No Error
  $("#txtPhone").keyup(function () {
    validatePhone();
  });

  pattern = /^[0-9]{10}$/;
  function validatePhone() {
    PhoneValue = $("#txtPhone").val();
    if (PhoneValue.length == " ") {
      $("#hPhone").show();

      PhoneError = false;
      return false;
    } else if (!pattern.test(PhoneValue)) {
      $("#hPhone").show();

      $("#hPhone").html("Invalid Phone Number");
      PhoneError = false;
      return false;
    } else {
      $("#hPhone").hide();
    }
  }

  $("#hEmail").hide();

  EmailError = true; //No Error
  $("#txtEmail").keyup(function () {
    validateEmail();
  });

  pattern1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  function validateEmail() {
    EmailValue = $("#txtEmail").val();
    if (EmailValue.length == " ") {
      $("#hEmail").show();

      EmailError = false;
      return false;
    } else if (!pattern1.test(EmailValue)) {
      $("#hEmail").show();

      $("#hEmail").html("Invalid Email");
      EmailError = false;
      return false;
    } else {
      $("#hEmail").hide();
    }
  }
  $("#btnSubmit").click(function () {
    validateFname();
    validateLname();
    validatePhone();
    validateEmail();
    validatepass();
    validatepass1();
    if (fnameError == true) {
      return true;
    } else {
      return false;
    }

    if (lnameError == true) {
      return true;
    } else {
      return false;
    }

    if (PhoneError == true) {
      return true;
    } else {
      return false;
    }

    if (EmailError == true) {
      return true;
    } else {
      return false;
    }

    if (passError == true) {
      return true;
    } else {
      return false;
    }

    if (pass1Error == true) {
      return true;
    } else {
      return false;
    }
  });
});
