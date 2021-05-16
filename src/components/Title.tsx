import styled from "styled-components";

export default styled.h2.attrs({ className: "title" })`
  color: ${({ theme }) => theme.white};
  letter-spacing: 2px;
  text-transform: capitalize;
`;
