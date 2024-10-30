//importando o componente Card e as imagens dos pôsteres. 
import Card from "./components/Card"
import poster1 from "./assets/poster1.jpg"
import poster2 from "./assets/poster2.jpg"
import poster3 from "./assets/poster3.jpg"
import Button from "./components/Button";

//definindo o componente principal App, que será renderizado na tela.
export default function App() {
  //Criando o Array cards com Informações dos Pôsteres
  //array chamado cards que contém três objetos.
  const cards = [
    {
      title: "Pôster: Star Wars (1977)",
      poster: poster1,
      text: "Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!"
    },
    {
      title: "Pôster: Empire Strikes Back (1980)",
      poster: poster2,
      text: "O filme fala dos conflitos contínuos da Aliança Rebelde contra o Império Galáctico, depois da destruição total da primeira Estrela da Morte, que mesmo assim as rebeliões continuam fugindo da ameaça do Império, que manda sondas espiãs por toda a Galáxia em busca dos rebeldes"
    },
    {
      title: "Pôster: Return of the Jedi (1983)",
      poster: poster3,
      text: "O imperador está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso Luke Skywalker liberta Hans Solo e a Princesa Leia das mãos de Jaba, o pior bandido das galáxias. Luke só se tornará um cavaleiro jedi quando destruir Darth Vader, que ainda pretende atraí-lo para o lado negro da Força"
    },
  ];
    
  // o React possui o Fragment, ele é um componente que, ao ser renderizado, desaparece do HTML: Esse é um componente tão útil do React que nas versões mais recentes o seu uso foi facilitado através de um “atalho”. Agora, para usarmos o Fragment não precisamos nem mesmo importá-lo, basta usar uma tag vazia:
  return (
    //cards.map() é uma função JavaScript que percorre cada item do array cards.
    //key={index} é uma prop especial que o React usa para identificar cada item na lista. É recomendável para ajudar o React a atualizar corretamente os componentes na tela.
    <>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} poster={card.poster} text={card.text} />
      ))}
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