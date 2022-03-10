import './App.css'

function App() {
const title = 'welcome to the new blog';
const likes = 50;
const person = {name : 'yoshi', age : 30};
const link = "https://www.google.com"; 

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        {/* title é uma variavel com valor string*/} 
        <p> liked { likes } times</p>
        {/*likes é uma variavel com valor number*/} 
        {/*<p> {person} </p> não funciona por ser um objeto */} 

        <p>{ 10 }</p>
        {/* valores colocados diretamente no jsx são transformados em string*/} 
        <p>{ "Hello Ninjas" }</p>
        <p>{ [1,2,3,4,5,6,7] }</p>
        {/* vetores tambem serão transformados em string*/} 
        <p>{ Math.random() * 10 }</p>
        {/* tambem é possivel utilizar funções do JS para escrever na tela*/} 
        <a href={link}>Google</a>
      </div>
    </div>
  )
}

export default App
