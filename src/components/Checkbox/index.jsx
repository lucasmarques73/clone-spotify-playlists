import PropTypes from 'prop-types'

import * as S from './styled'

const Checkbox = ({ checked, onChange }) => (
  <S.Input type="checkbox" checked={checked} onChange={onChange} />
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox
