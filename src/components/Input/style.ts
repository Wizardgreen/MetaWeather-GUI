import styled from "styled-components";
export const StyledInput = styled.input.attrs({ className: "input" })`
  width: 300px;
  height: 35px;
  padding: 0 10px;
  outline: none;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.cardBg};
  &:hover,
  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    filter: brightness(1.5);
  }
  transition: ${({ theme }) => theme.transition};
`;

export const SelectorWrapper = styled.div.attrs({
  className: "selector-wrapper",
})`
  position: relative;
`;

export const DropdownContainer = styled.ul.attrs({
  className: "selector-dropdown-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  position: absolute;
  padding: 20px 10px;
  box-sizing: border-box;
  z-index: 10;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  filter: brightness(1.2);
  ${({ theme }) => theme.cardBg};
`;

export const DropdownItem = styled.li.attrs({
  className: "selector-dropdown-item",
})`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.black};
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  transition: ${({ theme }) => theme.transition};
`;

export const Cover = styled.div.attrs({ className: "selector-cover" })`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  opacity: 0;
`;
