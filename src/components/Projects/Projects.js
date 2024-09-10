import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import social from "../../Assets/Projects/social-web.jpg";

import singleShop from "../../Assets/Projects/single-shop.jpg";
import mobileSocial from "../../Assets/Projects/mobile-social.jpg";
import budgetManager from "../../Assets/Projects/budget-manager.png";
import multishop from "../../Assets/Projects/multi-shop.jpg";
import comission from "../../Assets/Projects/comission-app.jpg";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social-Web v1"
              description="The social web app, built with Vue.js on the frontend and NestJS on the backend, integrates seamlessly with the eCommerce platform. Users can engage in typical social activities like posting, liking, sharing, and commenting while also purchasing packages that unlock privileges and rewards. The app leverages the Vue.js framework for dynamic, real-time interactions and smooth UI updates.

With its NestJS backend, the app provides robust, scalable APIs to handle social interactions, package purchases, and user data management. The integration with the eCommerce system allows users to share and discuss products, earn rewards from engagement, and access exclusive shop discounts based on their membership level (Basic, Premium, Elite)."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://app.tomiru.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multishop}
              isBlog={false}
              title="Multishop Ecommerce App"
              description="This eCommerce app features a multishop system where users can explore and purchase products from various vendors, each with their own storefront. Sellers can manage their shops, list products, and track sales through a dedicated dashboard. Buyers can browse multiple shops, review products, and make purchases using in-app currency or real money.

The app integrates with the social platform, enabling users to share products, earn rewards, and access special deals based on their membership level (Basic, Premium, Elite). The admin dashboard, built with Next.js for the frontend and PHP Laravel for the backend, provides centralized control over user management, shops, transactions, and product listings. It allows administrators to manage shops, approve new vendors, track overall platform sales, and monitor user activities.

This combination of multishop eCommerce and social interaction creates a dynamic platform for both sellers and buyers, with seamless management through the admin dashboard."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://shop.tomiru.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={singleShop}
              isBlog={false}
              title="Single Shope Ecommerce App"
              description="This eCommerce app is a single shop platform built with PHP Laravel, offering fully functional shopping features. Users can browse products, add items to their cart, make purchases, and track orders. The shop supports various payment methods and provides users with a smooth checkout process.

The app includes a comprehensive admin dashboard that allows store administrators to manage product listings, orders, inventory, and user accounts. Admins can also view detailed sales reports, track customer activity, and manage promotions or discounts. The platform ensures a seamless shopping experience with robust backend functionality through Laravel, providing store management and analytics for administrators."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isVertical={true}
              imgPath={budgetManager}
              isBlog={false}
              title="Budget Tracker"
              description="The mobile app budget tracker, built with React Native for the frontend and Node.js for the backend, helps users manage their finances on the go. Users can track income, expenses, and set budgets for different categories. The app provides real-time updates and visual insights into spending patterns, helping users stay on top of their financial goals.

The Node.js backend manages data securely, syncing across devices and providing smooth interactions. Users can set up notifications for when they exceed budget limits and generate detailed reports of their financial activity. The app offers a user-friendly interface with customizable features to suit individual financial tracking needs."
              ghLink="https://github.com/khanhln1995/budget-manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isVertical={true}
              imgPath={mobileSocial}
              isBlog={false}
              title="Mobile App social"
              description="The social mobile app, built with Flutter for the frontend and Java for the backend, mirrors the functionality of the social web app, offering features like posting, liking, sharing, commenting, and package-based privileges. In addition to the core social features, the mobile app includes livestreaming and real-time calling, allowing users to broadcast live content and connect with others through video or voice calls.

The app provides a seamless, interactive experience on mobile devices, with intuitive navigation and real-time notifications. Livestreams and calls are fully integrated, enabling users to engage in richer social interactions, while maintaining all the rewards and package-based perks available in the web version."
              ghLink="https://github.com/khanhln1995/flutter_tomiru_social"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comission}
              isBlog={false}
              title="Sale Commission"
              description="This collaborator web app, built with Vue.js on the frontend and NestJS on the backend, is designed for an abroad company to help salespeople promote student profiles and earn commissions based on their role.

Key features include:

Profile Submission: Sales representatives can submit and track student profiles, which are reviewed by the company for potential opportunities.
Role-Based Commission: Commissions are calculated based on the sales rep's role, with different roles offering varying levels of rewards and bonuses.
Dashboard: A personalized dashboard allows salespeople to manage student profiles, monitor their progress, and track commission earnings.
Performance Analytics: Sales reps can view detailed reports on their performance, including the number of successful profiles pushed, commissions earned, and role-based performance metrics.
Admin Control: The company’s admin team can oversee all collaborator activities, assign roles, approve profiles, and set commission rates.
This app streamlines the process of connecting students with opportunities abroad while rewarding salespeople based on their contributions."
              demoLink="https://nic-fe.vietnamskilled.com/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
