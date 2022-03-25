import styled from "styled-components";

export const FooterCont = styled.footer`
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`;

export const A = styled.a`
  padding: 10px;
  color: ${(props) => props.theme.fontColorSecondary};
  &:hover {
    color: ${(props) => props.theme.socialIconColor};
  }
`;
