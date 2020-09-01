import PropTypes from 'prop-types'
import * as S from './styled'

const SearchPlaylists = ({ playlists }) => {
  return (
    <S.Wrapper>
      <S.List>
        {playlists &&
          playlists.map((playlist) => (
            <S.Item key={playlist.id}>
              <S.Cover src={playlist.cover} />
              <S.Info>
                <S.Name>{playlist.name}</S.Name>
                {playlist.description && (
                  <S.Description>
                    <S.Bold>Descrição:</S.Bold> {playlist.description}
                  </S.Description>
                )}
                <S.Owner>
                  <S.Bold>Criador:</S.Bold> {playlist.owner}
                </S.Owner>
              </S.Info>
            </S.Item>
          ))}
      </S.List>
    </S.Wrapper>
  )
}

SearchPlaylists.propTypes = {
  playlists: PropTypes.array
}

export default SearchPlaylists
