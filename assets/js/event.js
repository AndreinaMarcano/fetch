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
  