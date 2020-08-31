import styled from 'styled-components'

export const Wrapper = styled.main`
  background-image: linear-gradient(rgb(70, 76, 82), rgb(7, 7, 8) 85%);
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 3rem;
`

export const Text = styled.span``

export const Button = styled.a`
  background-color: var(--green);
  border-radius: 30px;
  outline: none;
  border: none;
  text-decoration: none;
  color: var(--white);
  line-height: 3rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 5px 10px;
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: var(--dark-green);
  }
`
