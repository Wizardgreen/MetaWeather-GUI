import styled from "styled-components";

export const PinChartWrapper = styled.div.attrs({
  className: "pin-chart-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    flex: 1;
  }
  ${({ theme }) => theme.cardBg}
`;

export const ChartTitle = styled.h3.attrs({ className: "chart-title" })`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-align: center;
`;

export const Bar = styled.g.attrs({ className: "bar" })`
  fill: #aaa;
  height: 30px;
  transition: fill 0.3s ease;
  cursor: pointer;
`;

const babyBlue = "#6af6fa";
const pink = "#ee76a3";
export const Rect = styled.rect.attrs(({ type }) => ({
  className: `rect ${type}`,
}))`
  &.max {
    fill: ${pink};
  }
  &.min {
    fill: ${babyBlue};
  }
`;

export const Text = styled.text.attrs({ className: "text" })`
  fill: ${({ theme, type }) => (type === "date" ? theme.white : theme.black)};
`;
