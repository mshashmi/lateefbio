import React from "react";
import {
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
  CaseContainer,
  BackContainer,
  ContentWithImageWrapper,
  StoryTitle,
  ContinuousImages,
  GoalSpan,
} from "../../styles/info";
import CaseStudyTwo from "../../assets/images/BG_Image_Affinidi.png";
import Back from "../../assets/svg/BackIcon";
import { useNavigate } from "react-router-dom";
import persona_image from "../../assets/images/persona_two 1.png";
import wf1 from "../../assets/images/wf1.png";
import wf2 from "../../assets/images/wf2.png";
import wf3 from "../../assets/images/wf3.png";
import wf4 from "../../assets/images/wf4.png";
import wf5 from "../../assets/images/wf5.png";
import d1 from "../../assets/images/d1.png";
import d2 from "../../assets/images/d2.png";
import d3 from "../../assets/images/d3.png";
import d4 from "../../assets/images/d4.png";
import Cpalette from "../../assets/images/Cpalette.png";
import bts from "../../assets/images/bts.png";
import nih from "../../assets/images/nih.png";
import ps3 from "../../assets/images/ps3.png";
import ps4 from "../../assets/images/ps4.png";
import cs from "../../assets/images/cs.png";
import cs1 from "../../assets/images/cs1.png";
const CaseInfoTwo = () => {
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
            <img
              src={CaseStudyTwo}
              alt="Real Wallet Affinidi"
              className="case_study_image"
            />
          </Content>
        </Card>
      </CardWrapper>

      <TextWrapper>
        <Title>Case Study</Title>
        <Description>Real Wallet Affinidi</Description>
        <ContextWrapper>
          <ContextTitle>Context</ContextTitle>
          <ContextDescription>
            Creating a digital wallet for documen and hassle free verification
            across country along with other in app features such as getting a
            loan etc.
          </ContextDescription>
          <ContextTitle>Problem</ContextTitle>
          <StoryText>
            While researching to build a new product for a selected audience
            (Blue Collar Workers), following are the problems being faced by the
            audience currently: Working with various employers with an income
            which is not being recorded digitally, means now way to prove
            Income. No credit score - even earning a steady income, I don't get
            loans from the banks. No Proper documentation of
            payslips,certifications and other national id’s. Paper work with no
            gaurentee for papers to long last. No access to easy verifications.
          </StoryText>
          <ContextTitle>Solution</ContextTitle>
          <StoryText>
            A digital Wallet that lets you store all your digital documents such
            as educational, professional and National ID in secure and private
            way. Provide a seamless way to use them across various services.
            Onboard various credit providers and help people to avail the
            benefits hassle free.
          </StoryText>
          <ContextTitle>User persona</ContextTitle>
          <ContentWithImageWrapper>
            <StoryText>
              Pain Points :
              <ul>
                <li>Difficult to get a loan as there is no proper pay-slip.</li>
                <li> Verification of documents takes time</li>
                <li>
                  Documents will lose/difficult to find because there is no
                  habit of keeping all important documents in one place.
                </li>
              </ul>
              <GoalSpan>
                Goals : Proper Documentation and get a credit from the bank
              </GoalSpan>
            </StoryText>
            <img src={persona_image} alt="ProfileImage" />
          </ContentWithImageWrapper>
          <ContextTitle>Behind the scenes</ContextTitle>

          <StoryText>
            {" "}
            To start with, we needed to collect information from workers
            (Milestone 1) and manually get the info in a spreadsheet.
            Understanding the problem in person with a sample amount of people
            and over calls. Get to know what smartphone applications mean to
            them and how much trust they have on this front. The overall usage
            of smartphone and how do they interact with the applications they
            are using currently.
          </StoryText>
          <ContextTitle>User research showed</ContextTitle>
          <StoryText>
            More than 80% of the audience is using a smartphone. Low quality
            smart phones with low pixel density. They are mostly interacting
            using social apps (WhatsApp). Online forms and writing information
            manually is not encouraged. They usually do not fiddle with settings
            of any application they use. They prefer calls over text/chat/email.
            Icons are something they could relate to and remember them for their
            usage. Interested in trying new applications for their ease of life.
          </StoryText>
          <ContextTitle>Competitive analysis</ContextTitle>
          <ContentWithImageWrapper>
            {" "}
            <StoryText>
              As usual, every project I work on starts with a bit of competitive
              analysis. I started by looking at similar products released by
              other companies. The idea was to get a few ideas on the design
              direction.
            </StoryText>
            <img src={bts} alt="ProfileImage" />
          </ContentWithImageWrapper>

          <ContextTitle>Sign up use cases first time user flow</ContextTitle>
          <img src={wf1} alt="ProfileImage" />
          <ContextTitle> Sign up through various modes</ContextTitle>
          <img src={wf2} alt="ProfileImage" />
          <ContextTitle>User journey</ContextTitle>
          <img src={wf3} alt="ProfileImage" />
          <ContextTitle>App data categorization</ContextTitle>
          <img src={wf4} alt="ProfileImage" />
          <ContextTitle>Few finalised wireframes</ContextTitle>
          <img src={wf5} alt="ProfileImage" />
          <ContextTitle>Color palette</ContextTitle>
          <img src={Cpalette} alt="ProfileImage" />
          <ContextTitle>Law abiding design</ContextTitle>

          <ContentWithImageWrapper>
            <img src={ps4} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>Background and Foreground</StoryTitle>
              <StoryText>Satisfying law of common region</StoryText>
              Elements tend to be perceived into groups if they are sharing an
              area with a clearly defined boundary.Common region can be created
              by background.
            </StoryText>
          </ContentWithImageWrapper>
          <ContentWithImageWrapper>
            <img src={ps3} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>Personal Credentials</StoryTitle>
              <StoryText>Satisfying Law of proximity</StoryText>
              Objects that are near, or proximate to each other, tend to be
              grouped together.
            </StoryText>
          </ContentWithImageWrapper>
          <ContentWithImageWrapper>
            <img src={ps3} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>Personal Credentials</StoryTitle>
              <StoryText>Satisfying parkinson’s law</StoryText>When user scans
              from top to bottom, they can easily see the view all buttton
              (placed bottom of last credential).
            </StoryText>
          </ContentWithImageWrapper>
          <ContentWithImageWrapper>
            <img src={ps3} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>View All Button</StoryTitle>
              <StoryText>Satisfying Fitts’s law</StoryText>Limit the time it
              takes to complete a task to what users expect it’ll
              take.Frequently used credentials will come first.
            </StoryText>
          </ContentWithImageWrapper>
          <ContentWithImageWrapper>
            <img src={cs} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>Color selection for credentials</StoryTitle>Color is
              derived from Aadhar card (white, green and orange). Also Aadhar
              card itself is a gradient of orange, white and green.
            </StoryText>
          </ContentWithImageWrapper>
          <ContentWithImageWrapper>
            <img src={cs1} alt="ProfileImage" />

            <StoryText>
              <StoryTitle>How this helps users?</StoryTitle>Users can easily
              recognize or remember credentials with color by the usage of the
              color combination of physical card. (respecting the usability).
            </StoryText>
          </ContentWithImageWrapper>

          <ContextTitle>Navigation elements hierarchy </ContextTitle>
          <ContentWithImageWrapper>
            <StoryText>
              This image defines the use of navigation bar and almost all the
              navigation throughout the app and primary actions, CTA’s are
              located within the easy reach area. Secondary actions are mostly
              placed in Ok and Hard areas based on the priority.
            </StoryText>
            <img src={nih} alt="ProfileImage" height="300" />
          </ContentWithImageWrapper>
          <ContextTitle>Final designs</ContextTitle>
          <ContinuousImages>
            <img src={d1} alt="ProfileImage" />
            <img src={d2} alt="ProfileImage" />
            <img src={d3} alt="ProfileImage" />
            <img src={d4} alt="ProfileImage" />
          </ContinuousImages>
          <ContextTitle>How did the product perform?</ContextTitle>
          <StoryText>
            Our data showed that around 85% of our targeted audience have
            already downloaded the application and updated their documents.The
            app has more than 5K downloads with 4.3 star rating on the Google
            Play Store prior to its marketing phase.The next step would be pan
            India marketing and integration with top credit providers.
          </StoryText>

          <ContextTitle>Role and team</ContextTitle>
          <StoryText>
            As a designer working on this project, I was responsible for
            Research, Competitive Analysis & UI/UX Design. However, I worked
            very closely with a team throughout the project. I worked along with
            Product Manager, Product Associates and Engineering Team
          </StoryText>
        </ContextWrapper>
      </TextWrapper>
    </CaseContainer>
  );
};

export default CaseInfoTwo;
