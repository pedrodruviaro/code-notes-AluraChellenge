import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuStyled = styled.aside`
    grid-area: menu;
`

export default function Menu() {
    return (
        <MenuStyled>
            <h2>Menu</h2>
            <Link to="/editor">Editor de código</Link>
            <Link to="/">Comunidade</Link>
        </MenuStyled>
    )
}
