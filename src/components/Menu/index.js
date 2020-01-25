import React from 'react'
import PropTyes from 'prop-types'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

function Menu ({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value="http://rocketseat.com.br"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE" />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Pedir função débito</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="monetization-on" size={20} color="#FFF"/>
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="business" size={20} color="#FFF"/>
          <NavText>Pedir Conta PJ</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}

Menu.propTypes = {
  translateY: PropTyes.object
}

export default Menu
