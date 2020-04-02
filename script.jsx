
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

const src = './imgs/209_031529SierraNevada.jpg';
const imagen = <img src={src}></img>;


ReactDOM.render(
  imagen,
  document.getElementById('imagen')
);

ReactDOM.render(
  element,
  document.getElementById('titulo')
);







