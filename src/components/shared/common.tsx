import * as colors from '../../assets/colors';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export interface Props {
  floatAlignLeft?: boolean;
}

export const StyledContainer = styled(Container)<Props>`
  float: ${props => props.floatAlignLeft ? "left" : "right"};
  background-color: ${colors.$red};
  color: white;
  margin: 100px 0 0;
  max-width: 65%;
  padding: 25px;
  width: 57%;
`;

export const StyledHeading2 = styled.h2`
  font-size: 30px;
`;

export const StyledParagraph = styled.p`
  font-size: 70px;
`;

export const Divider = styled.div`
  background-color: ${colors.$white};
  border-radius: 9px;
  height: 5px;
  margin: 5px 0 10px;
  width: 285px;
`;

export const ScreenshotContainer = styled.div<Props>`
  float: ${props => props.floatAlignLeft ? "left" : "right"};
  margin: ${props => props.floatAlignLeft ? "0 0 0 4%" : "0 4% 0 0"};
`;
