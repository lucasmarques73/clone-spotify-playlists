import styled from 'styled-components'

export const Wrapper = styled.section`
  position: absolute;
  display: flex;
  background-color: var(--red);
  color: var(--white);
  width: 100vw;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
`

export const Message = styled.p`
  font-size: 1.6rem;
  margin-left: 1rem;
`

export const ClosseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  color: var(--white);

  &:after {
    content: '✕';
  }
`
