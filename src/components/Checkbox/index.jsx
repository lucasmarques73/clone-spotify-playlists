import PropTypes from 'prop-types'

import * as S from './styled'

const Checkbox = ({ checked }) => <S.Input type="checkbox" checked={checked} />

Checkbox.propTypes = {
  checked: PropTypes.bool
}

export default Checkbox
