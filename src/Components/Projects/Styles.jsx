import styled from "styled-components";

export const A = styled.a`
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => props.theme.fontColorPrimary};
  color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 6px;
  margin: 5px;
  &:hover {
    color: #fff;
    background-color: #0556f3;
    border: 1px solid rgb(211, 220, 230);
  }
`;

export const BoxDiv = styled.div`
  text-align: center;
  width: 34.3333%;
  @media (max-width: 1025px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ServiceBox = styled.div`
  padding-bottom: 5px;
  background: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.fontColorSecondary};
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  margin: 10px;
  /* transition: all 0.5s linear; */
  &:hover {
    box-shadow: 0px 12px 24px ${(props) => props.theme.cardColor};
    /* color: #fff; */
  }
`;

export const ProjectDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 1125px) {
    width: 95%;
  }
`;
export const ServiceBoxHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => props.theme.fontColorHeader};
`;
export const ServiceBoxP = styled.div`
  font-size: 14px;
  /* text-align: left; */
  color: ${(props) => props.theme.fontColorSecondary};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

// export const Col = styled.div`
// /* width: 33.33333333333333%; */
// `;
// export const CommonDiv = styled.div`
//   width: 33.33333333333333%;
//   margin: 20px auto;
//   text-align: center;`;

// export const MainHeader = styled.h1`
//   font-size: 32px;
//   margin-bottom: 20px;
//   color: ${(props) => props.theme.fontColorPrimary};`

// export const CommonBorder = styled.div`
//   background: ${(props) => props.theme.commonBorder};
//   height: 3px;
//   width: 100px;
//   margin: 30px auto;`
