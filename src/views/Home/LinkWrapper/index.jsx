import React, { useState } from "react";
import { Image } from "antd";
import {
  GridWrapper,
  WorkLink,
  LinkTitle,
  LinkDescription, OverlayContainer
} from "../../../styles/home";
import { useNavigate } from "react-router-dom";
import CaseStudyOne from "../../../assets/images/case_study_1.png";
import CaseStudyTwo from "../../../assets/images/case_study_2.png";
import data from "./data";

const LinkWrapper = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(data);

  return (
    <GridWrapper>
      <WorkLink
        onClick={() => {
          navigate("/pickrr-case-study");
          window.scroll(0, 0);
        }}
      >
        <OverlayContainer />
        <img src={CaseStudyOne} alt="Pickrr" className="case_study_image" />
        <LinkTitle>Pickrr</LinkTitle>
        <LinkDescription>Case Study</LinkDescription>
      </WorkLink>
      <WorkLink
        onClick={() => {
          navigate("/wallet-case-study");
          window.scroll(0, 0);
        }}
      >
        <OverlayContainer />
        <img src={CaseStudyTwo} alt="Wallet" className="case_study_image" />
        <LinkTitle>Affinidi Real Wallet</LinkTitle>
        <LinkDescription>Case Study</LinkDescription>
      </WorkLink>

      {visible.map((image, index) => {
        return (
          <WorkLink
            onClick={() => {
              setVisible(
                visible.map((tag, ind) =>
                  ind === index ? { ...tag, show: true } : tag
                )
              );
            }}
            key={image.id}
          >
            <OverlayContainer></OverlayContainer>
            <img src={image.image} alt="Real Wallet Affinidi" className="case_study_image" />
            <Image
              width={200}
              style={{ display: "none" }}
              src={image.img_src}
              preview={{
                visible: image?.show,
                src: image.img_src,
                onVisibleChange: (value) => {
                  setVisible(
                    visible.map((tag, ind) =>
                      ind === index ? { ...tag, show: value } : tag
                    )
                  );
                },
              }}
            />
            <LinkTitle>{image?.title}</LinkTitle>
            <LinkDescription>{image?.description}</LinkDescription>
          </WorkLink>
        );
      })}
    </GridWrapper>
  );
};

export default LinkWrapper;
