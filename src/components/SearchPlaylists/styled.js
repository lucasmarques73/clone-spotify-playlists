import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
`

export const List = styled.ul`
  font-weight: 400;
`

export const Item = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--grey);
  }
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
