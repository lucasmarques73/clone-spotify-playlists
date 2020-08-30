import Logo from 'components/Logo'
import * as S from './styled'

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Link href="/">
          <Logo />
          <S.Title>Clone Spotify Playlists</S.Title>
        </S.Link>
      </S.Header>
    </S.Wrapper>
  )
}

export default Sidebar
