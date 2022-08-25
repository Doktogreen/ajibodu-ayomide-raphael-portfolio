import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import stackup from "../../Assets/Projects/stackup.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h4 className="project-sub-heading">
          Full-time <strong className="purple">Works </strong>
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1633722485/simplefi_zpxhrr.png"}
              isBlog={false}
              title="Simple Finance, Nigeria"
              description="Simple Finance or SimpleFi limited is one of the most important, and credible Institutions and financial services providers in Nigeria. I was privileged to build several features within a multi-tenant application. Note: Github code remain confidential"
              ghLink="https://github.com/Doktogreen"
              demoLink="https://simplefinance.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434112/IMG_20220825_134537_379_bn4yru.jpg"}
              isBlog={false}
              title="386Konsult, Nigeria"
              description="is one of the most credible multi-national IT services, and consultation providers with headquater in Nigeria. I was privileged to build several features within the company's first version client-side, admin, and users applications. Note: Github code remain confidential."
              ghLink="https://github.com/Doktogreen"
              demoLink="https://www.386konsult.com/"
            />
          </Col>

        </Row>

        <h4 className="project-sub-heading">
          Freelance/ Contract <strong className="purple">Works </strong>
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661435176/IMG_20220825_143353_826_ecjfxm.jpg"}
              isBlog={false}
              title="Wired Assurance, Canada"
              description="Wired assurance is one of the most credible startup organizations and IT services providers in Toronto, Canada. I am currently privileged to build several features within the company's first version client-side, admin, and users applications. To test, login with username: sylvia3, password: mindyoubiz"
              ghLink="https://github.com/Wired-Assurance/admin-dashboard"
              demoLink="http://wiredassuranceprivate.surge.sh/login/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434092/IMG_20220825_135026_15_izjskq.jpg"}
              isBlog={false}
              title="IBCSCORP, USA"
              description="IBCSCORP is one of the most credible multi-national Software as a Service (SaaS) and IT services providers with headquater in USA. I was privileged to build several features within the company's first version client-side, admin, and users applications."
              ghLink="https://github.com/ibcscorp/primeagile-admin-client"
              demoLink="https://ibcscorp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434089/IMG_20220825_134716_386_lsc2yp.jpg"}
              isBlog={false}
              title="Karginal Travels, Nigeria"
              description="Kardinal is among the great business travel providers in Africa. I was privileged to build several features within the company's first version client-side, admin, and users applications."
              ghLink="https://github.com/Doktogreen/Kardinal-app"
              demoLink="https://gokardinal.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434093/IMG_20220825_135139_525_g9iiti.jpg"}
              isBlog={false}
              title="Corebyesq, Nigeria"
              description="Corebyesq is among the great business EduTech platform in Nigeria. I was privileged to build several features within the company's first version wordpress based client-side website. Note: This is a wordpress based work, it has no github repository."
              ghLink="https://github.com/Doktogreen"
              demoLink="https://corebyesq.com/"              
            />
          </Col>
        </Row>

        <h4 className="project-sub-heading">
          Personal/ Open source <strong className="purple">Works </strong>
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackup}
              isBlog={false}
              title="Stackup"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Doktogreen/stackup"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Daily Tech"
              description="My personal blog page or dailytech is build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Doktogreen/dailytech"
              demoLink="https://dailytech.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434102/IMG_20220825_140519_108_e6lgea.jpg"}
              isBlog={false}
              title="Flipkart"
              description="NFT Based e-commerce store Flipkart build with react.js, solidity, nodejs/ express. which supports html, css, and js code with instant view of website. You can buy items, place order, do at least sorts of e-commerce website actions, and then pay using any form of crypto currencies"
              ghLink="https://github.com/Doktogreen/nft-e-commerce"
              demoLink="https://flipkart-grid-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coditor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Doktogreen/coditor.io"
              demoLink="https://coditor.surge.sh/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1661434097/oreoswap_xxzoue.jpg"}
              isBlog={false}
              title="OreoSwap"
              description="As a contributor, I was privileged to work on Oreoswap which is a A fully decentralized exchange platform on Binance Smart Chain, also community DeFi project by Binance African Developers"
              ghLink="https://github.com/oreoswap"
              demoLink="https://oreoswap.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/skiltime/image/upload/v1633724309/portfo_qqlmqi.png"}
              isBlog={false}
              title="Personal Portfolio"
              description="This is my current portfolio website, the one in which you are currently in."
              ghLink="https://github.com/Doktogreen/ajibodu-ayomide-raphael-portfolio"
              demoLink="https://ajibodu-ayomide.surge.sh/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
