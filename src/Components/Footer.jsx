import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
`

export default function Footer() {
    return (
        <FooterStyled>
           &copy; Copyright - 2021 
        </FooterStyled>
    )
}
