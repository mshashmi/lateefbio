import React from "react";
import {
  Container,
  ProfileWrapper,
  ImageWrapper,
  Name,
  Designation,
  Location,
  SocialLinks,
  ResumeButton,
} from "../../styles/home";
import ProfileImage from "../../assets/images/lateef.jpeg";
import LocationIcon from "../../assets/svg/Location";
import Dribble from "../../assets/svg/DribbleIcon";
import Linkedin from "../../assets/svg/Linkedin";
import DownloadIcon from "../../assets/svg/download.svg";
import LinkWrapper from "../../views/Home/LinkWrapper";
import FooterWrapper from "../../views/Home/Footer";
import PDF from "../../assets/resume.pdf";

const Home = () => {
  const DownloadFile = () => {
    // using Java Script method to get PDF file
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Lateef-Mushtaq-resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Container>
      <ProfileWrapper>
        <ResumeButton>
          <button onClick={() => DownloadFile()} className="web_button">
            <img src={DownloadIcon} alt="ProfileImage" />  Resume
          </button>

          <button onClick={() => DownloadFile()} className="mobile_button">
            <img src={DownloadIcon} alt="ProfileImage" />
          </button>
        </ResumeButton>
        <ImageWrapper>
          <img src={ProfileImage} alt="ProfileImage" />
        </ImageWrapper>
        <Name>Lateef Mushtaq</Name>
        <Designation>
          User Experience Designer |
          <Location>
            <LocationIcon />
            Berlin
          </Location>
        </Designation>

        <SocialLinks>
          <Dribble
            onClick={() => window.open("https://dribbble.com/lateefmushtaq")}
          />
          <Linkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/lateefmushtaq/")
            }
          />
        </SocialLinks>
      </ProfileWrapper>
      <LinkWrapper />
      <FooterWrapper />
    </Container>
  );
};

export default Home;
