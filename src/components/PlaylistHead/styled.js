import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px var(--grey);
  padding: 1rem 3rem;
`

export const Item = styled.section`
  display: flex;
  align-items: center;
`

export const Cover = styled.img`
  width: 10rem;
  height: 10rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  text-align: left;
`

export const Name = styled.span`
  font-size: 1.9rem;
`

export const Description = styled.span`
  font-size: 1.3rem;
`

export const Owner = styled.span`
  font-size: 1.2rem;
`

export const Bold = styled.span`
  font-weight: 600;
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
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: var(--dark-green);
  }
`
