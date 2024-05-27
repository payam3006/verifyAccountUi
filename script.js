const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

document.getElementById("input1").focus();

let digitNum = 1;

window.addEventListener("keydown", (event) => {
  if (
    event.key == 0 ||
    event.key == 1 ||
    event.key == 2 ||
    event.key == 3 ||
    event.key == 4 ||
    event.key == 5 ||
    event.key == 6 ||
    event.key == 7 ||
    event.key == 8 ||
    event.key == 9
  ) {
    if (digitNum !== 6) {
      document.getElementById(`digit${digitNum}`).innerHTML = ` ${event.key}
    <input id="input${digitNum}" onfocus="this.value=''"  type="text">`;
      document.getElementById(`digit${digitNum}`).classList.add("full");
      document.getElementById(`input${digitNum}`).disabled = true;
      document.getElementById(`input${digitNum + 1}`).disabled = false;
      setTimeout(() => {
        document.getElementById(`input${digitNum + 1}`).focus();
        digitNum += 1;
      }, 1);
    } else {
      document.getElementById(`digit${digitNum}`).innerHTML = ` ${event.key}
      <input id="input${digitNum}" onfocus="this.value=''"  type="text">`;
      document.getElementById(`digit${digitNum}`).classList.add("full");
    }
  } else if (event.key === "Backspace") {
    q("Backspace");

    if (digitNum !== 1) {
      document.getElementById(`digit${digitNum}`).innerHTML = ` 0
    <input id="input${digitNum}" type="text">`;
      document.getElementById(`digit${digitNum - 1}`).innerHTML = ` 0
    <input id="input${digitNum - 1}" type="text">`;
      document.getElementById(`digit${digitNum}`).classList.remove("full");
      document.getElementById(`digit${digitNum - 1}`).classList.remove("full");

      document.getElementById(`input${digitNum}`).disabled = true;
      document.getElementById(`input${digitNum - 1}`).disabled = false;
      document.getElementById(`input${digitNum - 1}`).focus();
      digitNum -= 1;
    }
  } else {
    setTimeout(() => {
      document.getElementById(`input${digitNum}`).value = "";
    }, 1);
  }
});
