import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.aside`
  background: var(--ligth-black);
  box-shadow: 0px 5px 8px var(--ligth-black);
  height: 100vh;
  width: 30rem;
  position: fixed;

  ${media.lessThan('medium')`
    display:none;
  `}
`

export const Header = styled.header`
  margin: 2rem;
  border-bottom: solid 1px var(--gray);
  padding-bottom: 1rem;
`

export const Link = styled.a`
  align-items: center;
  color: var(--white);
  display: flex;
  height: 3rem;
  text-decoration: none;
`

export const Title = styled.h1`
  line-height: 3rem;
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`
