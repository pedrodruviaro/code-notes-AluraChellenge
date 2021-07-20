import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdCode, MdPeople } from "react-icons/md";
import { fundoBotao, linkInativo } from "./UI/Variaveis.styles";

const MenuStyled = styled.aside`
  padding: 0.5rem;
  padding-top: 2rem;
  grid-area: menu;
`;

const ListaLinks = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    padding-right: 0;
  }

  a {
    flex: 1;
    margin-left: 0.75rem;
    text-decoration: none;
  }
`;

const IconeWrap = styled.div`
  background-color: ${linkInativo};
  border-radius: 7px;
  display: flex;
  font-size: 1.15rem;
  padding: 0.5rem;
`;

export const TituloSecundario = styled.h2`
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 400;
    text-transform: uppercase;
    padding-bottom: 1rem;
`

export default function Menu() {
  const location = useLocation();

  const menuLinks = [
    {
      endereco: "/editor",
      label: "Editor de código",
      icone: <MdCode />,
    },
    {
      endereco: "/",
      label: "Comunidade",
      icone: <MdPeople />,
    },
  ];

  return (
    <MenuStyled>
      <TituloSecundario>Menu</TituloSecundario>
      <ListaLinks>
        {menuLinks.map((link, i) => (
          <li key={i}>
            <IconeWrap
              style={
                location.pathname === link.endereco
                  ? { backgroundColor: fundoBotao }
                  : null
              }
            >
              {link.icone}
            </IconeWrap>
            <Link to={link.endereco}>{link.label}</Link>
          </li>
        ))}
      </ListaLinks>
    </MenuStyled>
  );
}
