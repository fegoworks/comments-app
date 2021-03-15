import React from 'react'
import styled from 'styled-components'
import Text from '<atoms>/Text'
import { textColors } from '<variables>/colorPalette'
import { spacing } from '<variables>/spacing'

const Header = () => (
  <Header.Navigation>
    <div className="left">
      <Text
        fontSize="base"
        textAlign="center"
        color="white"
        fontWeight="semiBold"
        padding={spacing["xs"]}
        margin= "0"
      >
        MiniComments
      </Text>
    </div>
    <div className="right">
      <ul>
        <li>Articles</li>
        <li>Comment</li>
      </ul>
    </div>
  </Header.Navigation>
)

Header.Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .left {
    display: flex;
    align-items: center;

  }

  .right {
    ul {
      display: flex;
      li {
        list-style: none;
        margin: 0 2rem;
        color: ${textColors['secondary']}
      }
    }
  }
`

export default Header