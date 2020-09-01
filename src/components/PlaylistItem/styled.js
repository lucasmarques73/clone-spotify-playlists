import styled from 'styled-components'

export const Item = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--grey);
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
`

export const Owner = styled.span`
  font-size: 1.2rem;
`

export const Bold = styled.span`
  font-weight: 600;
`
