import Logo from 'components/Logo'
import * as S from './styled'

const Home = () => {
  return (
    <S.Wrapper>
      <S.Title>Clone playlists públicas para você!!</S.Title>
      <S.Button href="/api/spotify/login">
        <S.Text>Login com Spotify</S.Text>
        <Logo />
      </S.Button>
    </S.Wrapper>
  )
}

export default Home
