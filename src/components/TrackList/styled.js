import styled from 'styled-components'
import media from 'styled-media-query'

export const CheckAllWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
  padding: 0 4.1rem;

  ${media.lessThan('small')`
    padding 0px 1rem;
    justify-content: space-between;
  `}
`

export const CheckAllText = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 3rem;
`

export const ListWrapper = styled.section`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding: 3rem;

  ${media.lessThan('small')`
    padding 1rem;
  `}
`

export const List = styled.ul`
  font-weight: 400;
`

export const Item = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    background-color: var(--gray);
  }
`

export const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
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

  ${media.lessThan('medium')`
    display:none
  `}
`

export const Bold = styled.span`
  font-weight: 600;
`

export const CheckboxWrapper = styled.div`
  padding: 0 3rem;
`
