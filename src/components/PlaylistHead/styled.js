import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px var(--gray);
  padding: 1rem 3rem;

  ${media.lessThan('small')`
    padding 1rem;
  `}
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

  ${media.lessThan('medium')`
    display:none
  `}
`

export const Owner = styled.span`
  font-size: 1.2rem;

  ${media.lessThan('medium')`
    display:none
  `}
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
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--dark-green);
  }

  &:disabled {
    background-color: var(--gray);
  }

  ${media.lessThan('small')`
    width: 10rem;
    padding: 0.3rem;
  `}
`
