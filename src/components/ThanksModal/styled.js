import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 1.8rem;
  color: var(--white);
  margin-bottom: 2rem;
`
export const Info = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 2rem;
`

export const Button = styled.button`
  background-color: var(--green);
  border-radius: 30px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: var(--white);
  line-height: 3rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 5px 10px;
  width: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--dark-green);
  }
`
