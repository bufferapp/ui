import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Modal } from '../SimpleModal/style'
import { useAnimation } from '../AnimationWrapper'
import { stageInCenter, stageOutCenter } from '../style/animations'

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const NonDismissibleModal = ({ children }) => {
  const modalRef = useRef(null)
  const { AnimationWrapper, animationProps } = useAnimation({
    stageInAnimation: stageInCenter,
    stageOutAnimation: stageOutCenter,
    duration: 400,
  })

  useEffect(() => {
    // @ts-expect-error TS(2531) FIXME: Object is possibly 'null'.
    modalRef.current.focus()
  }, [])

  return (
    <Container role="dialog" aria-modal="true" NonDismissibleModal>
      <AnimationWrapper {...animationProps}>
        <Modal ref={modalRef}>{children}</Modal>
      </AnimationWrapper>
    </Container>
  )
}

NonDismissibleModal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NonDismissibleModal
