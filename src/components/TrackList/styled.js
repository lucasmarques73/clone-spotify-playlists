import styled from 'styled-components'

export const ListWrapper = styled.section`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding: 3rem;
`

export const List = styled.ul`
  font-weight: 400;
`

export const Item = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--grey);
  }
`

export const Cover = styled.img`
  width: 4rem;
  height: 4rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  text-align: left;
`

export const Name = styled.span`
  font-size: 1.5rem;
`

export const Artists = styled.span`
  font-size: 1.2rem;
`

export const Album = styled.span`
  font-size: 1rem;
`

export const Bold = styled.span`
  font-weight: 600;
`
