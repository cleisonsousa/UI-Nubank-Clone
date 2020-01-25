import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TabsContainer, TabItem, TabText } from './styles'

function Tabs ({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 400],
          outputRange: [0, 30],
          extrapolate: 'clamp'
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 400],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF"/>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-download" size={24} color="#FFF"/>
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF"/>
          <TabText>Tranferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF"/>
          <TabText>Blaquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}

Tabs.propTypes = {
  translateY: PropTypes.object
}

export default Tabs
