import PropTypes from 'prop-types'
import PlaylistItem from 'components/PlaylistItem'
import * as S from './styled'

const PlaylistList = ({ playlists, onPlaylistClick }) => {
  return (
    <S.Wrapper>
      <S.List>
        {playlists &&
          playlists.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              playlist={playlist}
              onPlaylistClick={onPlaylistClick}
            />
          ))}
      </S.List>
    </S.Wrapper>
  )
}

PlaylistList.propTypes = {
  playlists: PropTypes.array,
  onPlaylistClick: PropTypes.func
}

export default PlaylistList
