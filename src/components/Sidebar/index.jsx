import PropTypes from 'prop-types'
import Logo from 'components/Logo'
import MyPlaylists from 'components/MyPlaylists'
import User from 'components/User'
import * as S from './styled'

const Sidebar = ({ user, userPlaylists }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Link href="/">
          <Logo />
          <S.Title>Clone Spotify Playlists</S.Title>
        </S.Link>
      </S.Header>
      <User name={user.name} avatar={user.avatar} />
      <MyPlaylists playlists={userPlaylists} />
    </S.Wrapper>
  )
}

Sidebar.propTypes = {
  user: PropTypes.object,
  userPlaylists: PropTypes.array
}

export default Sidebar
