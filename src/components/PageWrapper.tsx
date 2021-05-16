import styled from "styled-components";
import bg from "../assets/img/background.png";

const PageWrapper = styled.div.attrs({ className: "page-wrapper" })`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-size: cover;
  background-position: center;
`;

export default PageWrapper;
