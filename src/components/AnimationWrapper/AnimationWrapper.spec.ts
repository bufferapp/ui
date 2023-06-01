// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'jest... Remove this comment to see the full error message
import snap from 'jest-auto-snapshots'
import 'jest-styled-components'

import AnimationWrapper from './AnimationWrapper'

snap(AnimationWrapper, './AnimationWrapper.jsx')
