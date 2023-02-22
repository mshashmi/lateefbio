import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CaseContainer,
  CardWrapper,
  Card,
  Content,
  TextWrapper,
  Title,
  Description,
  ContextWrapper,
  ContextTitle,
  ContextDescription,
  StoryText,
  IconWrapper,
  BackContainer,
  ContentWithImageWrapper,
  ContinuousImages,
  GoalSpan,
} from "../../styles/info";
import CaseStudyOne from "../../assets/images/casestudypickrr/BG_Image_Pickrr.png";
import Back from "../../assets/svg/BackIcon";
import bs from "../../assets/images/bs.png";
import bs1 from "../../assets/images/casestudypickrr/bs1.png";
import ns from "../../assets/images/casestudypickrr/ns.png";
import popups from "../../assets/images/casestudypickrr/popups.png";
import mtrd from "../../assets/images/casestudypickrr/mtrd.png";
import tw from "../../assets/images/casestudypickrr/tw.png";
import fdm from "../../assets/images/casestudypickrr/fdm.png";

import ColorPalette from "../../assets/images/casestudypickrr/ColorPalette.png";
import persona_one from "../../assets/images/casestudypickrr/persona_one.png";

const CaseInfoOne = () => {
  const navigate = useNavigate();

  return (
    <CaseContainer>
      <BackContainer
        onClick={() => {
          navigate("/");
          window.scroll(0, 0);
        }}
      >
        <IconWrapper>
          <Back />
        </IconWrapper>
      </BackContainer>
      <CardWrapper>
        <Card>
          <Content>
            <img src={CaseStudyOne} alt="Pickrr" className="case_study_image" />
          </Content>
        </Card>
      </CardWrapper>
      <TextWrapper>
        <Title>Case Study</Title>
        <Description>Pickrr dashboard</Description>
        <ContextWrapper>
          <ContextTitle>Context</ContextTitle>
          <ContextDescription>
            Pickrr provides services to thousands of sellers with N number of
            features throughout the dashboard. From shipping, tracking and
            packing products to counter the negative occurrences such as weight
            disputes, order returns and non deliverables. The seller uses Pickrr
            dashboard to ship his products and Pickrr uses various courier
            partners to make the shipment.
          </ContextDescription>
          <ContextTitle>Problem statement</ContextTitle>
          <StoryText>
            The customer receives all the updates of their orders by using
            tracking numbers provided by courier/Pickrr. The real time
            notifications for the customers was not possible. Pickrr dashboard
            had no feature to provide the realtime notifications to the seller’s
            customer which also had a cost associated with it.
          </StoryText>
          <ContextTitle>Solution</ContextTitle>
          <StoryText>
            Create a tool within the Pickrr dashboard that allows sellers to
            manage notifications and update the customers with the realtime
            status of the shipment. This would help the seller to keep the
            history of events at a single place and manage all the orders using
            the tool.
          </StoryText>
          <ContextTitle>User Persona</ContextTitle>
          <ContentWithImageWrapper>
            <StoryText>
              Pain Points :
              <ul>
                <li>
                  Keeping track of all the orders at a single place was not
                  possible.
                </li>
                <li>
                  Customers would keep calling/email for the order status, hence
                  increasing costs for the company
                </li>
                <li>
                  History of the events that would have been helpful in
                  'analysing the data' was not possible prior to this addition
                </li>
              </ul>
              <GoalSpan>
                Goals : Keep customers updated with realtime notifications.
              </GoalSpan>
            </StoryText>
            <img src={persona_one} alt="Pickrr" className="case_study_image" />
          </ContentWithImageWrapper>

          <ContextTitle>Behind the scenes</ContextTitle>
          <StoryText>
            We started to integrate the tool with the current dashboard. The
            necessary events and everything associated with the notifications
            module has to be in the proper hierarchy.
          </StoryText>
          <ContinuousImages>
            <img src={bs} alt="Pickrr" className="case_study_image" />
            <img src={bs1} alt="Pickrr" className="case_study_image" />
          </ContinuousImages>
          <ContextTitle>
            Design - Notification main screen drawer closed/open
          </ContextTitle>
          <img src={ns} alt="Pickrr" className="case_study_image" />
          <StoryText></StoryText>

          <ContextTitle>
            Design - template popup and history screen
          </ContextTitle>
          <img src={popups} alt="Pickrr" className="case_study_image" />
          <StoryText></StoryText>

          <ContextTitle>
            Mobile Version Tracking screen Re - design
          </ContextTitle>

          <ContentWithImageWrapper>
            <StoryText>
              UX Problem: The information that user needs to see is available on
              scroll while we search for a particular order. The search bar
              would remain on the top and take space which in turn makes user to
              scroll the page.
            </StoryText>
            <img src={mtrd} alt="Pickrr" className="case_study_image" />
          </ContentWithImageWrapper>

          <ContextTitle>Wireframes</ContextTitle>
          <img src={tw} alt="Pickrr" className="case_study_image" />
          <ContextTitle>Design</ContextTitle>

          <img src={fdm} alt="Pickrr" className="case_study_image" />

          <ContextTitle>Color Palette</ContextTitle>
          <img src={ColorPalette} alt="Pickrr" className="case_study_image" />
        </ContextWrapper>
      </TextWrapper>
    </CaseContainer>
  );
};

export default CaseInfoOne;
