import styled from "styled-components";

export const PinChartWrapper = styled.div.attrs({
  className: "pin-chart-wrapper",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.cardBg}
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  transition: ${({ theme }) => theme.transition};
`;

export const ChartTitle = styled.h3.attrs({ className: "chart-title" })`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-align: center;
`;

export const SVGWrapper = styled.div.attrs({ className: "svg-wrapper" })`
  display: flex;
`;
export const SVG = styled.svg.attrs({ className: "chart-svg" })`
  width: 200px;
  border-radius: 50%;
  transform: rotate(-90deg);
`;

export const Cube = styled.div.attrs({ className: "cube" })`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const DesList = styled.ul.attrs({ className: "des-list" })`
  margin: 20px;
`;

export const DesListItem = styled.li.attrs({ className: "des-list-item" })`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.white};
  &:first-child > .cube {
    background-color: #8d9b84;
  }
  &:nth-child(2) .cube {
    background-color: #ebe5d9;
  }
  &:nth-child(3) .cube {
    background-color: #b58849;
  }
  &:nth-child(4) .cube {
    background-color: #748f96;
  }
  &:nth-child(5) .cube {
    background-color: #404968;
  }
`;

export const Circle = styled.circle.attrs({ className: "chart-circle" })`
  fill: none;
  stroke-width: 32;
  r: 16;
  cx: 16;
  cy: 16;
  &:first-child {
    stroke: #8d9b84;
  }
  &:nth-child(2) {
    stroke: #ebe5d9;
  }
  &:nth-child(3) {
    stroke: #b58849;
  }
  &:nth-child(4) {
    stroke: #748f96;
  }
  &:nth-child(5) {
    stroke: #404968;
  }
`;

export const Text = styled.text.attrs({ className: "text" })`
  font-size: 5px;
  transform: rotate(90deg);
  fill: ${({ theme, type }) => (type === "date" ? theme.white : theme.black)};
`;
