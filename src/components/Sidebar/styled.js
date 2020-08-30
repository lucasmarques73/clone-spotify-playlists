import styled from 'styled-components'

export const Wrapper = styled.aside`
  background: var(--ligth-black);
  box-shadow: 0px 5px 8px var(--ligth-black);
  height: 100%;
  width: 31%;
`

export const Header = styled.header`
  margin: 2rem;
  border-bottom: solid 1px var(--white);
`

export const Link = styled.a`
  align-items: center;
  justify-content: center;
  color: var(--white);
  display: flex;
  height: 3rem;
  text-decoration: none;
  transition: color 0.4s;
`

export const Title = styled.h1`
  line-height: 3rem;
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`
