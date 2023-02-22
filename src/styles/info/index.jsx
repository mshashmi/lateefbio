import styled, { keyframes } from "styled-components";

export const CaseContainer = styled.div`
   position: relative;
`;

export const CircleAnimation = keyframes`
    0%{clip-path: circle(75%);}
    50%{clip-path: circle(10%);}
    100%{clip-path: circle(75%);}
`;
export const Card = styled.div`
  display: grid;
  animation-name: ${CircleAnimation};
  animation-iteration-count: 1;
  animation-duration: 1.3s;
`;
export const CardWrapper = styled.div`
  display: grid;
  min-height: 30vh;
  background-color: #fafafa;

  @media screen and (max-width: 1050px) {
  min-height: 30vh;
    
  }
  
`;
export const Content = styled.div`
position: relative;
  transition: clip-path 1s;
  display: grid;
  align-items: center;
  overflow: hidden;
  justify-items: center;
  svg {
    max-width: 100px;
    max-height: 100px;
  }
  .case_study_image{
  position:absolute;
  height: 100%;
  width: 100%;
    object-fit: cover;
  
  }
  
`;

export const TextAnimation = keyframes`
    0%{opacity:0}
    100%{opacity:1}
`;
export const TextWrapper = styled.div`
  padding: 50px 250px;
  animation-name: ${TextAnimation};
  animation-duration: 6s;
  animation-iteration-count: 1;
  @media screen and (max-width: 1050px) {
    padding: 50px 30px;
  }
  @media screen and (max-width: 1450px) {
    padding: 50px 150px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;
export const Description = styled.div`
  font-size: 20px;
  opacity: 0.7;
`;
export const ContextWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
  gap: 25px;
  margin-top: 25px;
    img{
      @media screen and (max-width: 1050px) {
max-width: 700px;
    } 
      @media screen and (max-width: 750px) {
max-width: 310px;
    } 
     }
`;
export const ContextTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  padding-left: 20px;
  border-left: 4px solid red;
  margin-top: 25px;

  + img{
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 750px) {
    font-size:25px;
    } 
`;
export const ContextDescription = styled.div`
  font-size: 20px;
  opacity: 0.6;
  letter-spacing: 1px;
  line-height: 200%;
  @media screen and (max-width: 750px) {
    font-size:16px;
    } 
  
`;
export const StoryTitle = styled.div`
  font-size: 30px;
  opacity: 0.8;
`;
export const StoryText = styled.div`
  font-size: 20px;
  opacity: 0.6;
  letter-spacing: 1px;
  line-height: 200%;
  @media screen and (max-width: 750px) {
    font-size:16px;
    } 
    + img{
    text-align: center;
    margin: 0 auto;
  }
  
`;
export const GoalSpan = styled.div`
  margin-top: 40px;
`;
export const Problem = styled.div`
  font-size: 20px;
  opacity: 0.6;
  letter-spacing: 1px;
`;
export const BackContainer = styled.div`
display: flex;
align-items: center;
gap: 3px;
position: absolute;
top: 20px;
left: 30px;
z-index: 2;
border-radius: 50%;
font-size: 20px;
cursor: pointer;
`;
export const IconWrapper = styled.div`
  svg{
    cursor: pointer;
  }
`;
export const ContinuousImages = styled.div`
  display: grid;
 justify-content: center;
 align-items: center;
 gap: 30px;
`;

export const ContentWithImageWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
    } 
    >img{
      align-self:stretch;
    }
  `;
