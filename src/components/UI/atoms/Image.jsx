/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '<styles>/variables/spacing';

const Image = ({ onClick, imageUrl, altTitle, width, borderRadius, border, height}) => (
  <Image.Container
    onClick= {onClick}
    src={imageUrl}
    alt={altTitle}
    width={width}
    borderRadius={borderRadius}
    border={border}
    height={height}
  />
);

Image.Container = styled.img`
  width: ${(props) => props.theme.spacing[props.width] || '100%'};
  border-radius: ${(props) => props.borderRadius || '0.25rem 0.25rem 0 0'};
  border: ${(props) => props.border };
  height: ${(props) => props.height };
  cursor: pointer;
`;

Image.propTypes = {
  imageUrl: PropTypes.string,
  altTitle: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.oneOf(Object.keys(spacing)),
};

export default Image;
