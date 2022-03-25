import styled from "styled-components";

export const Contact1 = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 15px;
  background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
  background: -o-linear-gradient(left, #0072ff, #00c6ff);
  background: -moz-linear-gradient(left, #0072ff, #00c6ff);
  background: linear-gradient(left, #0072ff, #00c6ff);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const ContactContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  margin: 0 auto;

  display: flex;
  /* width: 100%; */
  flex-wrap: wrap;
  align-items: center;
`;

export const ContContact1 = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 90px 130px 88px 148px;
`;

export const Contact1Pic = styled.div`
  width: 296px;
`;

export const Contact1Img = styled.img`
  max-width: 100%;
`;

export const ContactForm = styled.form`
  width: 100%;
  @media (max-width: 795px) {
    /* width: 100%;
    text-align: center; */
    /* margin-bottom: 50px; */
    margin: auto;
  }
`;

export const ContactFormTitle = styled.span`
  display: block;
  font-size: 24px;
  color: ${(props) => props.theme.fontColorSecondary};
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
`;

export const InputInput1 = styled.input`
  display: block;
  width: 100%;
  /* background: ${(props) => props.theme.fontColorSecondary}; */
  font-size: 15px;
  line-height: 1.5;
  /* color: #00aaf2; */
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  border: 2px solid ${(props) => props.theme.fontColorHeader};
  height: 50px;
  border-radius: 5px;
  padding: 0 30px;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    /* margin-left: 0; */
    /* width: 90%; */
  }
  @media (max-width: 430px) {
    /* margin-left: -35px; */
    /* width: 80%; */

    /* padding : 0px; */
  }
`;

export const InputInput2 = styled.textarea`
  display: block;
  width: 100%;
  /* background: ${(props) => props.theme.cardColor}; */
  font-size: 15px;
  line-height: 1.5;
  /* color: #00aaf2; */
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  border: 2px solid ${(props) => props.theme.fontColorHeader};
  min-height: 150px;
  border-radius: 5px;
  padding: 12px 30px;

  @media (max-width: 500px) {
    /* margin-left: 0; */
    /* width: 90%; */
  }
  @media (max-width: 430px) {
    /* margin-left: -35px; */
    /* width: 80%; */

    /* padding : 0px; */
  }
`;

export const WrapInput = styled.div`
  /* position: relative; */
  width: 100%;
  z-index: 1;
`;

export const ContContFormBtn = styled.div`
  justify-content: center;
`;

export const A = styled.button`
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgb(211, 220, 230);
  background-color: ${(props) => props.theme.fontColorPrimary};
  color: ${(props) => props.theme.cardColor};
  border-radius: 5px 5px 5px 5px;
  padding: 13px 40px;
  width: 100%;
  margin-top: 10px;
  &:hover {
    color: #fff;
    background-color: #0556f3;
    border: 1px solid rgb(211, 220, 230);
  }

  @media (max-width: 500px) {
    /* margin-left: -35px; */
    /* width: 90%; */

    /* padding : 0px; */
  }
  @media (max-width: 430px) {
    /* margin-left: -75px; */
    /* width: 80%; */

    /* padding : 0px; */
  }
`;

export const Column = styled.div`
  width: 50%;

  /* @media (max-width: 795px) {
    /* margin-left: 200px; */
  /* width: 100%; */
  /* text-align: center; */
  /* } */
  @media (max-width: 795px) {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const P = styled.p`
  font-size: 20px;
  /* font-weight: bold; */
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.fontColorSecondary};
  &:hover {
    color: ${(props) => props.theme.socialIconColor};
  }
`;

export const LinksCont = styled.div`
  /* border: 1px solid black; */
  margin-left: 100px;
  /* width: 100%; */
  @media (max-width: 795px) {
    /* width: 100%;
    text-align: center; */
    /* margin-bottom: 50px; */
    /* margin: auto; */
    /* margin-left: 0; */
    /* width: 50%; */
    justify-content: center;
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
