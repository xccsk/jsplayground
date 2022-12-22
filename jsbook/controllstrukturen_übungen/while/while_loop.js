const sourceList = document.getElementById("source"); //quellliste
const targetList = document.getElementById("target"); //Zielliste
const copyButton = document.getElementById("move"); //schaltfläche zum moven

copyButton.addEventListener("click", function () {
  if (targetList.hasChildNodes()) {
    while (targetList.hasChildNodes()) {
      const item = targetList.removeChild(targetList.firstChild);
      sourceList.appendChild(item);
    }
  }
  if (sourceList.hasChildNodes()) {
    while (sourceList.hasChildNodes()) {
      const item = sourceList.removeChild(sourceList.firstChild);
      targetList.appendChild(item);
    }
  }
});

//do while schleifen iterieren jewals einmal bevor die condtion geprüft wirdc
