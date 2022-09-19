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
import Condicional from "./Componentes/S08 - Ex 10 - Renderização condicional/Condicional";
import Focus from "./Componentes/S09 - Ex 05 - useRef/useRef";
import Mensagens from "./Componentes/S09 - Ex 06 - Mensagens/Mensagens";
import ProgressBar from "./Componentes/S09 - Ex 07 - Barra de Progresso/Progresso";
import ProgressBarProducts from "./Componentes/S09 - Ex 08 - Barra de Progresso com mais Produtos/ProgressoProdutos";
import ModeloDeHooks from "./Componentes/S09 - Ex 09 - Converter para Hooks/ModeloDeHooks";
import ControleInput from "./Componentes/S09 - Ex 10 - Controle de Estado/ControleInput";
import Table from "./Componentes/S11 - Aula 04 - Bootstrap/Bootstrap";
import Site from "./Componentes/S11 - Ex 01 - Site/Site";
import SiteBootstrap from "./Componentes/S11 - Ex 02 - Bootstrap/SiteBootstrap";

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
      "data:image/jpeg;base64,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",
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
      {/* <Titulo /> */}

      {/* <Soma num1={5} num2={10} /> */}
{/* 
      <Botao corDeFundo={"#FFD8A9"} titulo={"Sou um botão"} /> */}

      {/* {arrayPosts.map((item) => {
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
      })} */}
      
      {/* {arrayContatos.map((item) => {
        return (
          <Contatos
            photo={item.photo}
            name={item.name}
            description={item.description}
          />
        );
      })}; */}

      {/* {arrayProdutos.map((item) => {
        return (
        <Produtos
        photo={item.photo}
        name={item.name}
        price={item.price}
        />
        )
      })} */}

      {/* <Frutas /> */}

      {/* <Console /> */}

      {/* <Cliques /> */}

      {/* <Titulos /> */}

      {/* <Condicional /> */}

      {/* <Focus /> */}

      <Mensagens />

      {/* <ProgressBar /> */}

      {/* <ProgressBarProducts /> */}

      {/* <ModeloDeHooks /> */}

      {/* <ControleInput /> */}

      {/* <Table /> */}

      {/* <Site /> */}

      {/* <SiteBootstrap /> */}

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
