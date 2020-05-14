import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const PrimaryButton = styled(Button)`
  &.btn-primary {
    background-color: red;
    &:hover {
      background-color: green;
    }
  }
`

export default PrimaryButton