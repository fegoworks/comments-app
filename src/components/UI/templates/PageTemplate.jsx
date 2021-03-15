/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '<organisms>/Header';
import Sidebar from '<organisms>/Sidebar';
import {backgroundColors} from '<variables>/colorPalette';

const PageTemplate = ({ children }) => {
  return (
    <PageTemplate.Container>
      <Header />
      <PageTemplate.Body>
        <PageTemplate.Content>{children}</PageTemplate.Content>
        <Sidebar />
      </PageTemplate.Body>
    </PageTemplate.Container>
  );
};

PageTemplate.Container = styled.section`
  background-color: ${backgroundColors['bg']};
  border-radius: 0.75rem;
  min-height: 100vh;
  margin: 3.5rem;
  padding: 3.5rem;
`;
PageTemplate.Body = styled.section`
  display: grid;
  padding: 0 5rem;
  grid-template-columns:  2fr 1fr;
`;

PageTemplate.Content = styled.div``;

PageTemplate.propTypes = {
  children: PropTypes.node,
}

export default PageTemplate;
