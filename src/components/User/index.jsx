import PropTypes from 'prop-types'
import * as S from './styled'

const User = ({ name, avatar }) => {
  return (
    <S.Wrapper>
      {avatar && <S.Avatar src={avatar} />}
      <S.Name>{name}</S.Name>
    </S.Wrapper>
  )
}

User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
}

export default User
