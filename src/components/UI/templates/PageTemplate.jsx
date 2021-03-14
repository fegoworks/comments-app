/** @format */
import React from 'react';
import styled from 'styled-components';
import Header from '<organisms>/Header';
import Sidebar from '<organisms>/Sidebar';

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
  background: #435560;
  border-radius: 0.75rem;
  min-height: 100vh;
  margin: 3.5rem;
  padding: 3.5rem;
`;
PageTemplate.Body = styled.section`
  display: grid;
  grid-template-columns:  2fr 1fr;
  border: solid red 1px;
`;

PageTemplate.Content = styled.div``;

export default PageTemplate;
