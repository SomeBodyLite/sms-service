$(document).on("input", ".password-input", function () {
  var inputValue = $(this).val();
  var shownpassElement = $(this).closest(".form-item").find(".shownpass");

  shownpassElement.toggleClass("hidden", inputValue.length === 0);
});

$(document).on("click", ".shownpass", function () {
  var input = $(this).closest(".form-item").find(".password-input");

  var isPassword = input.attr("type") === "password";
  $(this).toggleClass("view", !isPassword);
  input.attr("type", isPassword ? "text" : "password");
});
