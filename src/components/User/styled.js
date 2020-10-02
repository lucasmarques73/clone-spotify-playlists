import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  color: var(--white);
  align-items: center;
  margin: 2rem;
  border-bottom: solid 1px var(--gray);
  padding-bottom: 1rem;
`

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`

export const Avatar = styled.img`
  width: 7rem;
  border-radius: 5rem;
`
