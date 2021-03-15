/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize } from '<styles>/variables/fonts';
import { textColors } from '<styles>/variables/colorPalette';

const Title = ({ display, fontSize, children, margin, color }) => (
  <Title.Container display={display} fontSize={fontSize} margin={margin} color={color}>{children}</Title.Container>
);

Title.Container = styled.span`
  ${({ display, color, margin, fontSize: userFontSize, theme: { spacing, fontSize } }) => `
  text-align: left;
  font-size: ${fontSize[userFontSize]};
  font-weight: bold;
  margin: ${margin};
  color: ${color};
  display: ${display || 'inline'};
  padding-bottom: ${spacing.base};
`}
`;

Title.defaultProps = {
  fontSize: 'xsMd',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  color: PropTypes.oneOf(Object.keys(textColors)),
  margin: PropTypes.string,
};

export default Title;
