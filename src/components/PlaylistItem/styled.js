import styled from 'styled-components'
import media from 'styled-media-query'

export const Item = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray);
  }
`

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  ${media.lessThan('small')`
    display:none;
  `}
`

export const Owner = styled.span`
  font-size: 1.2rem;
`

export const Bold = styled.span`
  font-weight: 600;
`
