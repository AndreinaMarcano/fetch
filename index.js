Swal.fire({
  title: "Hola",
  text: "Bienvenido al Convertido de Divisa.",
  imageUrl: "../multimedia/imagen/moneda.png",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image",
});

function convertir() {
  let valor = parseFloat(document.getElementById("cantidad").value);
  document.getElementById("valor").innerHTML = "<b>" + valor + "</b>";
  let de = document.getElementById("de").value;
  let a = document.getElementById("a").value;
  let dólar = 800;
  let euro = 900;
  resultado = 0;

  // Peso a dólar
  if (de == 1 && a == 2) {
    resultado = valor / dólar;
  }
  // peso a euro
  else if (de == 1 && a == 3) {
    resultado = valor / euro;
  }
  //    dolar a peso
  else if (de == 2 && a == 1) {
    resultado = valor * dólar;
  }
  // dolar a euro
  else if (de == 2 && a == 3) {
    resultado = valor * (dólar / euro);
  }
  // euro a peso
  else if (de == 3 && a == 1) {
    resultado = valor * euro;
  }

  // euro a dolar
  else if (de == 3 && a == 2) {
    resultado = valor * (euro / dólar);
  }
  // peso a peso
  else {
    resultado = valor;
  }
  document.getElementById("resultado").innerHTML =
    "Resultado: $" + valor.toFixed(1);
}

document.getElementById("form-initial").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.children);

  for (const input of event.target.children) {
    console.log(input);
    const obj = {};
    obj["tipo"] = input.name;
    obj["valor"] = input.value;
    // console.log(obj)
    localStorage.setItem(obj.tipo, obj.valor);
    localStorage.setItem(obj.tipo, JSON.stringify(obj.valor));
  }
});



fetch("monedas.json")
  .then((res) => res.json())
  .then((monedas) => {
    console.log(monedas);
    
  });
