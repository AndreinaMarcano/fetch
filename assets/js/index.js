function convertir() {
  let valor = parseFloat(document.getElementById("cantidad").value);
  (document.getElementById("valor").innerHTML = "<b>" + valor + "</b>"),
    (de = document.getElementById("de").value),
    (a = document.getElementById("a").value),
    (dólar = 800),
    (euro = 900),
    (resultado = 0);

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

fetch("monedas.json")
  .then((res) => res.json())
  .then((monedas) => {
    console.log(monedas);
  });
