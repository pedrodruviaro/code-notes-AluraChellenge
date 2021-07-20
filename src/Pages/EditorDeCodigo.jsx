import React from "react";
import styled from "styled-components";
import { TituloSecundario } from "../Components/Menu";

const EditorDeCodigoStyled = styled.section`
  grid-area: principal;

  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Editor = styled.div`
  border: 1px solid green;
  flex: 1;
`;

const Formulario = styled.form`
  border: 1px solid yellow;
  width: 30%;
  padding: 1rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
`;

export default function EditorDeCodigo() {
  return (
    <EditorDeCodigoStyled>
      <Editor>MOSTRA O CODIGO</Editor>

      <Formulario>
        <TituloSecundario>Seu projeto</TituloSecundario>
        <input type="text" placeholder="Nome do seu projeto" />
        <textarea
          placeholder="Descrição do seu projeto"
        ></textarea>
        <TituloSecundario>Personalização</TituloSecundario>
        <select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <input type="color" />
        <button type="submit">Salvar projeto</button>
      </Formulario>
    </EditorDeCodigoStyled>
  );
}
