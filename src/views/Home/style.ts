import styled from "styled-components";

export const MainContentWrapper = styled.div.attrs({
  className: "main-content-wrapper",
})`
  display: flex;
  > div {
    flex: 1;
  }
`;
