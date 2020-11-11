import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../../assets/colors';
import Introduction from '../../components/Home/Introduction';
import Container from 'react-bootstrap/Container';

const StyledContainer = styled(Container)`
  background-color: ${colors.$red};
  margin: auto;
  width: 50%;
`;
function App() {
  return (
    <StyledContainer>
      <Introduction></Introduction>
    </StyledContainer>
  );
}

export default App;
