import PropTypes from 'prop-types'
import * as S from './styled'

const Error = ({ setHasError }) => {
  return (
    <S.Wrapper>
      <S.Message>Ocorreu um erro! Tente novamente.</S.Message>
      <S.ClosseButton onClick={() => setHasError(false)} />
    </S.Wrapper>
  )
}

Error.propTypes = {
  setHasError: PropTypes.func
}

export default Error
