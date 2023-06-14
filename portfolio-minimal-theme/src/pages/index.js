import React from "react";
import resume from "../../static/resume.pdf";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Rozerin Akkus Portfolio"/>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Me"/>
        <InterestsSection sectionId="interests" heading="My Interests" />
        <ProjectsSection sectionId="projects" heading="My Projects" />
        <ContactSection sectionId="contact" heading="Are you talking to me?" />
      </Page>
    </>
  );
}
