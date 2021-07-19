import React from 'react'
import styled from 'styled-components'
import LogoAluraDev from '../Assets/logo.png'
import { fundoInput } from './UI/Variaveis.styles'

const HeaderStyled = styled.header`
    grid-area: header;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${fundoInput};
    padding: .75rem;
    width: 700px;
`

const FotoProvisoria = styled.div`
    background-color: lightcoral;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 1rem;
`

const AvatarWrap = styled.div`
    display: flex;
    align-items: center;
`


export default function Header() {
    return (
        <HeaderStyled>
            <img src={LogoAluraDev} alt="Alura DEV Logo" />
            <Input type="text" placeholder="Busque por algo" />
            <AvatarWrap>
                <FotoProvisoria></FotoProvisoria>
                <span>Harry</span>
            </AvatarWrap>
        </HeaderStyled>
    )
}
