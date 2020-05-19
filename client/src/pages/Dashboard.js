import React from 'react';
import Header from '../components/Header';
import { CoinProvider } from '../utils/CoinContext';
import Cards from '../components/Cards';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../utils/hooks';
import Sidebar from '../components/Sidebar';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

function Dashboard() {
  const username = localStorage.getItem('username');
  const history = useHistory();
  const { width } = useWindowDimensions();

  if (!username) {
    history.push(`/login`);
  }

  return (
    <>
      <CoinProvider>
        <Container>
          {width < 1024 ? (
            <Header mobile={true} lastLogin="18.05.2020 - 19:01" />
          ) : (
            <Sidebar active={true} lastLogin="08.05.2020 - 19:01" />
          )}

          <Cards />
        </Container>
      </CoinProvider>
    </>
  );
}

export default Dashboard;
