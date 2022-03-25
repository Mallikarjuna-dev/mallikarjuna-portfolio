import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin:auto;
  padding: 40px 0px;
  /* margin-bottom: 100px; */
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Common = styled.div`
  width: 33.33333333333333%;
  margin: 20px auto;
  text-align: center;
`;

export const H1 = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
`;
