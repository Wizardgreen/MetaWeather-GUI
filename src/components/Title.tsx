import styled from "styled-components";

export default styled.h2.attrs({ className: "title" })`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white};
  font-size: 3rem;
  letter-spacing: 3px;
  text-transform: capitalize;
`;
