const numberOfLoops = 6;
for (let i = 1; i < numberOfLoops; i++) {
  const rad = document.createElement("h3");

  document.body.append(rad);
  rad.innerText = `Rad ${i}`;

  const hue = 150 + i * ((200 - 150) / numberOfLoops);
  rad.style.backgroundColor = `hsl(${hue}, 74%, 77%)`;

  rad.style.fontSize = `${i * 10}px`;
  rad.style.textAlign = "center";
  rad.style.color = "hsl(240, 60%, 60%)";
}

let rows = 3;

const divOne = document.createElement("div");
divOne.style.border = "2px solid grey";
divOne.style.display = "flex";
divOne.style.justifyContent = "center";

document.body.append(divOne);

for (let x = 1; x <= rows; x++) {
  const divTwo = document.createElement("div");
  divTwo.style.border = "solid 8px hsl(240, 74%, 77%)";
  divTwo.style.margin = "50px";
  divTwo.style.width = "50px";

  divOne.appendChild(divTwo);

  if (x === 1) {
    for (let i = 0; i < 10; i++) {
      const texts = document.createElement("p");
      texts.innerText = i;
      document.body.append(texts);
      divTwo.appendChild(texts);
      texts.style.margin = "0px";

      if (i === 4) {
        texts.style.backgroundColor = "hsl(240, 74%, 75%)";
      } else if (i % 2 === 0) {
        texts.style.backgroundColor = "black";
        texts.style.color = "white";
      } else {
        texts.style.backgroundColor = "white";
      }
    }
  }

  if (x === 2) {
    for (let i = 9; i >= 0; i--) {
      const texts = document.createElement("p");
      texts.innerText = i;
      document.body.append(texts);
      divTwo.appendChild(texts);
      texts.style.margin = "0px";

      if (i === 8) {
        texts.style.backgroundColor = "hsl(240, 74%, 75%)";
      } else if (i % 2 === 0) {
        texts.style.backgroundColor = "black";
        texts.style.color = "white";
      } else {
        texts.style.backgroundColor = "white";
      }
    }
  }

  if (x === 3) {
    const arrayList = [
      "ett",
      "två",
      "tre",
      "fyra",
      "fem",
      "sex",
      "sju",
      "åtta",
      "nio",
      "tio",
    ];

    for (let i = 0; i < arrayList.length; i++) {
      const texts = document.createElement("p");
      texts.innerText = arrayList[i];
      document.body.append(texts);
      divTwo.appendChild(texts);
      texts.style.margin = "0px";
      texts.style.textAlign = "right";

      if (i === 5) {
        texts.style.backgroundColor = "hsl(240, 74%, 75%)";
      } else if (i % 2 === 0) {
        texts.style.backgroundColor = "black";
        texts.style.color = "white";
      } else {
        texts.style.backgroundColor = "white";
      }
    }
  }
}
