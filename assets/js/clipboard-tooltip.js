var btns = document.querySelectorAll(".clipboard");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseleave", clearTooltip);
  btns[i].addEventListener("blur", clearTooltip);
}
function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "clear clipboard");
  e.currentTarget.removeAttribute("aria-label");
}
function showTooltip(elem, msg) {
  elem.setAttribute("class", "tooltipped clear clipboard");
  elem.setAttribute("aria-label", msg);
}
