import styled from "styled-components";
export const StyledInput = styled.input.attrs({ className: "input" })`
  outline: none;
`;

export const SelectorWrapper = styled.div.attrs({
  className: "selector-wrapper",
})`
  position: relative;
`;

export const DropdownContainer = styled.ul.attrs({
  className: "selector-dropdown-container",
})`
  width: 100%;
  position: absolute;
  background-color: #ccc;
  z-index: 10;
`;

export const DropdownItem = styled.li.attrs({
  className: "selector-dropdown-item",
})``;

export const Cover = styled.div.attrs({ className: "selector-cover" })`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  opacity: 0;
`;
