import styled from "styled-components";

export const BarChartWrapper = styled.div.attrs({
  className: "bar-chart-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    flex: 1;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.cardBg}
`;

export const ChartTitle = styled.h3.attrs({ className: "chart-title" })`
  color: ${({ theme }) => theme.black};
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

const babyBlue = "#3582c4";
const pink = "#e65054";
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
