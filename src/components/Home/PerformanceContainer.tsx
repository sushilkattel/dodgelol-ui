import * as React from 'react';
import styled from 'styled-components';
import {Divider, ScreenshotContainer, StyledContainer, StyledHeading2, StyledParagraph} from '../shared/common';

interface Props {
  section: string;
  copy: any;
  containerAlignLeft?: boolean;
  Screenshot: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface StyleProps {
  name: string;
}

const StyledDiv = styled.div<StyleProps>`
  clear: both;
  margin: 0 0 10%;
  overflow: auto;
  padding-top: ${props => props.name === "overview" ? "0" : "200px"};
`;

const PerformanceContainer: React.FC<Props> = ({section, copy, containerAlignLeft, Screenshot}: Props) => {
  return(
    <StyledDiv id={section} name={section}>
      <StyledContainer floatAlignLeft={containerAlignLeft}>
        <StyledHeading2>{copy.header}</StyledHeading2>
        <Divider />
        <StyledParagraph>{copy.body}</StyledParagraph>
      </StyledContainer>
      <ScreenshotContainer floatAlignLeft={!containerAlignLeft}>
        <Screenshot />
      </ScreenshotContainer>
    </StyledDiv>
  );
};

export default PerformanceContainer;
