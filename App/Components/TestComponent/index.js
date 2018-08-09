import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return (
      <Wrapper>
        <Text>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
      </Wrapper>
    )
  }
}

const Wrapper = styled.View`
  background-color: green;
`
