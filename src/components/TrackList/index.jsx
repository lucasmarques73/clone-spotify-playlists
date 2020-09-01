import PropTypes from 'prop-types'
import * as S from './styled'

const TrackList = ({ tracks }) => {
  return (
    <S.ListWrapper>
      <S.List>
        {tracks &&
          tracks.map((track) => (
            <S.Item key={track.id}>
              <S.Cover src={track.album.cover} />
              <S.Info>
                <S.Name>{track.name}</S.Name>
                <S.Artists>
                  <S.Bold>Artistas:</S.Bold> {track.artists}
                </S.Artists>
                <S.Album>
                  <S.Bold>Album:</S.Bold> {track.album.name}
                </S.Album>
              </S.Info>
            </S.Item>
          ))}
      </S.List>
    </S.ListWrapper>
  )
}

TrackList.propTypes = {
  playlist: PropTypes.object,
  tracks: PropTypes.array,
  showTracks: PropTypes.bool
}

export default TrackList
