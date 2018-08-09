import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TestComponent from '../TestComponent'

storiesOf('Components/TestComponent', module).add('Default', () => (
  <TestComponent text='test' />
))
