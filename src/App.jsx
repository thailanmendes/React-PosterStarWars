import Card from "./components/Card"

export default function App() {
  return (
    // o React possui o Fragment, ele é um componente que, ao ser renderizado, desaparece do HTML: Esse é um componente tão útil do React que nas versões mais recentes o seu uso foi facilitado através de um “atalho”. Agora, para usarmos o Fragment não precisamos nem mesmo importá-lo, basta usar uma tag vazia:
    <>
      <Card />
    </>
  )
}



/*
antes
    <div>
      <Card />
    </div>
depois
        <>
      <Card />
    </>
 */

//Repare que agora temos o mesmo efeito de forma muito mais fácil. Com isso podemos respeitar a regra do JSX sem poluir o nosso HTML de uma forma super simples