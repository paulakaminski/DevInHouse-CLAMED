import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Titulo from "./Componentes/S08 - Ex 03 - Componentes/Titulo";
import Soma from "./Componentes/S08 - Ex 05 - Props/Soma";
import Card from "./Componentes/CardNFT";
import Cronometro from "./Componentes/Cronometro";
import Botao from "./Componentes/S08 - Ex 06 - Props/Botao";
import Post from "./Componentes/S08 - Ex 07 - Props Fragment e PropTypes/Post";
import Contatos from "./Componentes/S08 - Ex 08 - Lista de contatos/Contatos";
import Produtos from "./Componentes/S08 - Ex 09 - Lista de produtos/Produtos";
import Frutas from "./Componentes/S09 - Ex 01 - ReactHooks/ReactHooks";
import Console from "./Componentes/S09 - Ex 02  -  useEffect/useEffect";
import Cliques from "./Componentes/S09 - Ex 03 - useState/useState";
import Titulos from "./Componentes/S09 - Ex 04 - Hooks/Hooks";

// const arrayProduto = [
//   {
//     id: 0,
//     nome: "Pasti 2",
//     criador: "sonyart",
//     nickcriador: "@sonyart.eth",
//     foto_perfil:
//       "https://lh3.googleusercontent.com/EZMq0106S03X0DsKFdVO9TH2-kbE1zgwF_36i9k0vbqJmUZV_0p0iz1e1PX-nx19eULcbN0UB7NhcCnKyG1l_4FA1kJosLsWKb3S=s168",
//     imagem_nft:
//       "https://img.seadn.io/files/8008d4e396a7f32bdf7a58025a19d75e.jpg?fit=max&w=600",
//     categoria: "ilustracao",
//     preco: 0.295,
//     precoreal: "2524,97",
//     liked: false,
//     moeda: "ETH",
//   },
//   {
//     id: 1,
//     nome: "Opened Stash Box",
//     criador: "Snoop Dogg - B.O.D.R",
//     foto_perfil:
//       "https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png",
//     nickcriador: "@snoopdoggbodr",
//     imagem_nft:
//       "https://lh3.googleusercontent.com/OjKan_e5lUX4Dgaj61CUObNpS96ZWAT1eYCNh-5__L90_jyeLc8Iih1P_LY3-RJSl_kajSVeqO0BxHjdfk8CtgeRqBavzOBXYTO9KFM=w600",
//     categoria: "musica",
//     preco: 1,
//     precoreal: "8.559,22",
//     liked: false,
//     moeda: "ETH",
//   },
//   {
//     id: 2,
//     nome: "2 Geez (Instrumental)",
//     criador: "Snoop Dogg - B.O.D.R",
//     foto_perfil:
//       "https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png",
//     nickcriador: "@snoopdoggbodr",
//     imagem_nft:
//       "https://lh3.googleusercontent.com/Q248R9pfAbkQlZKE8Xe1qXpj5MoX6W8e_0mljGdFaWpzajrG1xPkNWyCibkBCZKAVjSyE_ivw2vT0ItJPvKet57fy-hKBQ5AWkAI=w600",
//     categoria: "musica",
//     preco: 1.25,
//     precoreal: "10699,02",
//     liked: false,
//     moeda: "ETH",
//   },
//   {
//     id: 3,
//     nome: "Bored Ape Yacht Club #7369",
//     criador: "Bored Ape Yacht Club",
//     foto_perfil:
//       "https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png",
//     nickcriador: "@franklinisbored",
//     imagem_nft:
//       "https://img.seadn.io/files/ef6bcb8f383c1f74c5f7ccc92b9b46e8.png?fit=max&w=600",
//     categoria: "ilustracao",
//     preco: 76,
//     precoreal: "650500,40",
//     liked: false,
//     moeda: "ETH",
//   },
// ];

const arrayPosts = [
  {
    id: 0,
    fotoPerfil:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEGWKAZmmndlw/profile-displayphoto-shrink_200_200/0/1630364804418?e=1665014400&v=beta&t=Qd2Hy_2EtmtPQ1FVf2dvJNCTvNZ_zp7wI-GZjUZ5164",
    nomeUsuario: "Paula Kaminski",
    dataPost: "31/08/2022",
    descricaoPost: "Este é um post para testar meus conhecimentos em React",
    fotoPost:
      "https://topdev.vn/blog/wp-content/uploads/2021/04/clean-react-code-1.jpg",
    curtidoPor: "Marcel Santin",
    qtdeCurtidas: 15,
  },
  {
    id: 1,
    fotoPerfil:
      "https://media-exp2.licdn.com/dms/image/C4D03AQHfFQfOazNq2w/profile-displayphoto-shrink_200_200/0/1619113599526?e=1662595200&v=beta&t=lgBHC8LNbFFci6j3KKQHryQS0qfjxNy_bLrO9wVKqW0",
    nomeUsuario: "Marcel Santin",
    dataPost: "31/08/2022",
    descricaoPost: "Veja esse hamburguer!",
    fotoPost:
      "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg",
    curtidoPor: "Paula Kaminski",
    qtdeCurtidas: 10,
  },
];

const arrayContatos = [
  {
    id: 0,
    photo: "https://www.computerhope.com/people/pictures/joe_belfiore.jpg",
    name: "Joe Belfiore",
    description: "In a world far away",
  },
  {
    id: 1,
    photo:
      "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/08/20280559-10154756882766961-3434466954525858896-o-e1642766596994.jpg",
    name: "Bill Gates",
    description: "What I'm doing here?",
  },
  {
    id: 2,
    photo: "https://i0.wp.com/www.telesintese.com.br/wp-content/uploads/2016/02/mark-zuckerberg-headshot.jpg?fit=936%2C682&ssl=1",
    name: "Mark Zuckerberg",
    description: "Really busy, Whatsapp only"
  }
];

const arrayProdutos = [{
  id: 0,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/195267-500-500/713080_1.jpg?v=637973891873430000",
  name: "Cetaphil Creme Hidratante 250g",
  price: "R$ 49,90"
},
{
  id: 1,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/168265-500-500/729930.jpg?v=637343309522530000",
  name: "Neutrogena Hydro Boost Water Gel 50g",
  price: "R$ 52,15"
},
{
  id: 2,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/168892-500-500/733943.jpg?v=637343310043100000",
  name: "Fisiogel Loção Cremosa 200ml",
  price: "R$ 59,99"
},
{
  id: 3,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/168230-500-500/729872.jpg?v=637343309491870000",
  name: "Vichy Idéal Soleil Hydrasoft Fps50 200ml",
  price: "R$ 61,19"
},
{
  id: 4,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/177723-500-500/738547_.jpg?v=637376110935000000",
  name: "Protetor Solar Corporal Australian Gold Gel Creme Toque Seco Fps50 200g",
  price: "R$ 50,90"
},
{
  id: 5,
  photo: "https://farmagora.vteximg.com.br/arquivos/ids/183261-500-500/710566.jpg?v=637671329209000000",
  name: "Dermotivin Original Sabonete Líquido 300ml",
  price: "R$ 59,90"
}]

export default function App() {
  return (
    <div>
      <Titulo />

      <Soma num1={5} num2={10} />

      <Botao corDeFundo={"#FFD8A9"} titulo={"Sou um botão"} />

      {arrayPosts.map((item) => {
        return (
          <Post
            fotoPerfil={item.fotoPerfil}
            nomeUsuario={item.nomeUsuario}
            dataPost={item.dataPost}
            descricaoPost={item.descricaoPost}
            fotoPost={item.fotoPost}
            curtidoPor={item.curtidoPor}
            qtdeCurtidas={item.qtdeCurtidas}
          />
        );
      })}
      
      {arrayContatos.map((item) => {
        return (
          <Contatos
            photo={item.photo}
            name={item.name}
            description={item.description}
          />
        );
      })};

      {arrayProdutos.map((item) => {
        return (
        <Produtos
        photo={item.photo}
        name={item.name}
        price={item.price}
        />
        )
      })}

      <Frutas />

      <Console />

      <Cliques />

      <Titulos />

      {/* <Cronometro /> */}
      {/* {arrayProduto.map((item) => {
        return (
          <Card
            fotoPerfil={item.fotoPerfil}
            titulo={item.nome}
            nickName={item.nickcriador}
            imagem={item.imagem_nft}
            valorEtherium={item.preco}
            valorReais={item.precoreal}
          />
        );
      })} */}
    </div>
  );
}
