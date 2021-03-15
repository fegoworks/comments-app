import React from 'react'
import Text from '<atoms>/Text'
import Button from '<atoms>/Button'
import styled from 'styled-components'
import { backgroundColors, textColors } from '../../../styles/variables/colorPalette'

const Sidebar = () => (
  <Sidebar.Container>
    <Text
      display="inline-block"
      fontSize="base"
      color="white"
      margin="0.25rem 0.35rem 0.85rem 0.35rem"
    >
      Add a comment
    </Text>
    <form action="">
      <label htmlFor="message">Message</label>
      <textarea type="text" className="message" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      
      <label htmlFor="email">Email</label>
      <input type="text" name="" id="email" />
      
      <Button
        border="none"
        borderRadius="1.5rem"
        background={backgroundColors["btnBg"]}
        padding="0.65rem"
        fontSize="xs"
        fontWeight="light"
        color={textColors['bg']}
        margin="0.45rem"
        textAlign="center"
        width="9rem"
      >
        Post comment
      </Button>
    </form>
  </Sidebar.Container>
)

Sidebar.Container = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: ${backgroundColors['secondaryBg']};
  height: 640px;

  input, textarea {
    background: ${backgroundColors['bg']};
    border-radius: 1rem;
    height: 2.5rem;
    width: 17rem;
    margin: 0.5rem;
    border: solid 0.5px ${textColors['secondary']};
    color: ${textColors['white']};
    :focus {
      outline: none;
    }
  }

  input {
    border-radius: 0.75rem;
  }

  label {
    color: ${textColors['primary']};
    display: inline-block;
    margin: 0.25rem 0.35rem;
  }

  textarea {
    border-radius: 0.5rem;
    height: 7rem;
  }
`

export default Sidebar