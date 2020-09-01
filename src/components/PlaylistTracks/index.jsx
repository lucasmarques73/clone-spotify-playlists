import PropTypes from 'prop-types'
import PlaylistHead from 'components/PlaylistHead'
import TrackList from 'components/TrackList'
import { ArrowBackOutline as Back } from '@styled-icons/evaicons-outline/ArrowBackOutline'

import * as S from './styled'

const PlaylistTracks = ({ playlist, tracks, showTracks, goBack }) => {
  return (
    showTracks && (
      <S.Wrapper>
        <S.GoBackButton onClick={() => goBack()}>
          <S.IconWrapper>
            <Back />
          </S.IconWrapper>
        </S.GoBackButton>
        <PlaylistHead playlist={playlist} />
        <TrackList tracks={tracks} />
      </S.Wrapper>
    )
  )
}

PlaylistTracks.propTypes = {
  playlist: PropTypes.object,
  tracks: PropTypes.array,
  showTracks: PropTypes.bool,
  goBack: PropTypes.func
}
export default PlaylistTracks
