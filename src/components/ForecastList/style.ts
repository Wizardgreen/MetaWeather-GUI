import styled from "styled-components";

export const ForecastListWrapper = styled.div.attrs({
  className: "forecast-list-wrapper",
})`
  width: 100%;
  display: flex;
  justify-content: center;
  > div:not(.loading-spinner) {
    flex: 1;
  }
`;

export const ForecastCard = styled.div.attrs({ className: "forecast-card" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 45px;
  padding-top: 30px;
  ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.shadow};
  &:last-child {
    margin-right: 45px;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    filter: brightness(1.5);
  }
  transition: ${({ theme }) => theme.transition};
`;

export const Day = styled.p.attrs({ className: "forecast-day" })`
  margin-top: 15px;
  margin-bottom: 0;
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.black};
`;

export const DateText = styled.p.attrs({ className: "forecast-date-text" })`
  margin-top: 0;
  color: ${({ theme }) => theme.black};
`;
