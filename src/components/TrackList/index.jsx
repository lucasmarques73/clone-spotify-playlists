import Checkbox from 'components/Checkbox'
import PropTypes from 'prop-types'
import * as S from './styled'

const arrayEquals = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  )
}

const TrackList = ({
  tracks,
  handleTrackClick,
  tracksSelected,
  handleSelectAllTracks
}) => {
  return (
    tracks && (
      <>
        <S.CheckAllWrapper>
          <S.CheckAllText>Selecionar todas:</S.CheckAllText>
          <S.CheckboxWrapper onClick={handleSelectAllTracks}>
            <Checkbox
              checked={arrayEquals(
                tracksSelected,
                tracks.map((track) => track.id)
              )}
            />
          </S.CheckboxWrapper>
        </S.CheckAllWrapper>
        <S.ListWrapper>
          <S.List>
            {tracks.map((track) => (
              <S.Item key={track.id} onClick={() => handleTrackClick(track.id)}>
                <S.TrackWrapper>
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
                </S.TrackWrapper>
                <S.CheckboxWrapper>
                  <Checkbox checked={tracksSelected.includes(track.id)} />
                </S.CheckboxWrapper>
              </S.Item>
            ))}
          </S.List>
        </S.ListWrapper>
      </>
    )
  )
}

TrackList.propTypes = {
  tracks: PropTypes.array,
  handleTrackClick: PropTypes.func,
  handleSelectAllTracks: PropTypes.func,
  tracksSelected: PropTypes.array
}

export default TrackList
