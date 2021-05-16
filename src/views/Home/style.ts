import styled from "styled-components";

export const SearchBarWrapper = styled.div.attrs({
  className: "search-bar-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2.5;
  > div {
    flex: 1;
  }
`;

export const MainContentWrapper = styled.div.attrs({
  className: "main-content-wrapper",
})`
  flex: 7.5;
`;
