import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: linear-gradient(rgb(70, 76, 82), rgb(7, 7, 8) 85%);
  background-color: var(--black);
  color: var(--white);
  height: 100%;
  width: 80%;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GoBackButton = styled.button`
  outline: none;
  border: none;
  text-decoration: none;
  background: none;
  cursor: pointer;
  align-self: flex-start;
  padding: 0 3rem;
`

export const IconWrapper = styled.div`
  color: var(--white);
  width: 3rem;
  height: 3rem;

  &:hover {
    color: var(--grey);
  }
`
