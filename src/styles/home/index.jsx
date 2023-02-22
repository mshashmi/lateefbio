import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position:relative;
  width: 100%;
  overflow: hidden;
  padding-top: 24px;
`;
export const ProfileWrapper = styled.div`
  display: grid;
  position: relative;
  justify-content: center;
  justify-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;
`;
export const ImageWrapper = styled.div`
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const Name = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  color: #3b393d;
`;
export const Designation = styled.div`
  font-size: 16px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Location = styled.div`
  font-size: 16px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  > svg {
  fill: #de6551;
    height: 20px;
    width: 20px;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  > svg {
    fill: #de6551;
    height: 20px;
    width: 20px;
    cursor: pointer;
    :hover {
      fill: #000;
    }
  }
`;
export const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
`;
export const LinkTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 50px;
  left: 20px;
  z-index: 3;
  opacity: 0;
  color: #f0f0f0;
  transition: all 0.3s ease-in-out;
`;
export const LinkDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 25px;
  left: 20px;
  z-index: 3;
  opacity: 0;
  color: #f0f0f0;
  transition: all 0.3s ease-in-out;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 50px;
  @media screen and (max-width: 650px) {
    grid-template-columns: auto;
  }
`;
export const WorkLink = styled.div`
  height: 300px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 0px 24px 12px #f1f1f1;
  gap: 10px;
  transition: 1s all;
  opacity: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  .case_study_image{
  width: 100%;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  align-self: stretch;
  
  }

   :hover{
    ${OverlayContainer}{
      opacity: 1;
    }
    ${LinkTitle}{
      opacity: 1;
    }
    ${LinkDescription}{
      opacity: 1;
    }
    .case_study_image{
      transform: scale(1.2);
    }
  } 
  @media screen and (max-width: 750px) {
   height: 200px;
   .case_study_image{
    height: 100%;
    }
  }
`;


export const ResumeButton = styled.div`
  Position:absolute;
  right: 40px;
  top: 10px ;
  @media screen and (max-width: 750px) {
    right: 25px;

  }
  cursor: pointer;
  > button{
    float: right;
    background-color: #de6551;
    color: #fff;
    border: none;
    height: 56px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    cursor: inherit;
    transition:0.3s;
    :hover{
      opacity: 1;
      transform: scale(1.2);

    }
    img {
      width: 24px;
    }
  }
  .web_button {
    @media screen and (max-width: 750px) {
   display: none;
  }
  }
  .mobile_button{
    display: none;
    @media screen and (max-width: 750px) {
   display: block;
  }
  }
`;
export const FooterContainer = styled.div`
  padding: 30px;
  color: #3b393d;
  background: #efefef;
  padding: 30px;
  text-align: center;
  display: grid;
  gap: 20px;
  width: 100%;
`;
