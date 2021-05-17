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

export const DayListWrapper = styled.div.attrs({
  className: "day-list-wrapper",
})`
  flex: 2.5;
`;

const gap = "45px";
export const ChartWrapper = styled.div.attrs({
  className: "chart-wrapper",
})`
  display: flex;
  flex: 5;
  > div {
    flex: 1;
    margin-top: ${gap};
    margin-right: 0;
    margin-bottom: ${gap};
    margin-left: ${gap};
    &:last-child {
      margin-right: ${gap};
    }
  }
`;
