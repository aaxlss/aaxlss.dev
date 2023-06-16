import { Component } from '@angular/core';
type Experience = {
  company: String;
  position: String;
  duration: String;
  description: String;
  tecnologies: String[];
  responsibilities: String[];
};
type School = {
  name: String;
  duration: String;
  degree: String;
};
type Certification = {
  name: String;
  issue: String;
  credentialId: String;
};
type Volunteer = {
  place: String;
  country: String;
  duration: String;
  description: String;
};
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  introduction: String;
  name: String;
  experiences: Experience[];
  softSkills: String[];
  technicalSkills: String[];
  languages: String[];
  education: School[];
  certifications: Certification[];
  volunteering: Volunteer[];
  constructor() {
    this.name = 'A. Axel Sanchez S.';
    this.introduction = `My passion is to develop applications for companies that need automated processes to save money and time. I enjoy working in a team with different people and cultures and exchanging knowledge. I thrive when I get a chance to help and motivate others. As a Team Lead, I enjoy training new hires and teaching them new skills that will help them advance personally and professionally.

    I am always striving to improve my skills and to learn new technologies. By starting my work experience in 2016 I was able to finally use the knowledge that I had gained in school, workshops and other courses.
    Furthermore, I was able to apply skills that I have required on my own, such as different programming languages, organizational and soft skills.`;
    this.experiences = [
      {
        company: 'BYNARIC',
        position: 'MOBILE TECH LEAD',
        duration: 'MAY 2021 - JULY 2022',
        description: `Bynaric is an Irish software development and consulting start-up that specializes in solutions for property services, housing associations and companies throughout Ireland and the United Kingdom.
        I have worked on the main project, developing a system which could help Housing Association companies to manage their properties and handle surveys. I started as a Java developer software using an open-source software and after 1 year of  working in the company I became a Mobile Tech Lead.
        In the team, we use SCRUM methodology with 2 weeks of spring time. There are different collaborating  teams like Backend, Frontend and Mobile sharing ideas or solving problems. I have been improving my skills in the following:`,
        tecnologies: [
          `Full Stack (back-end and front-end) `,
          `Developing and improving systems using:  Java, XML, JavaScript, CSS, HTML, Azure DevOps, React JS, and PHP.`,
          `Developing and improving mobile applications on Android and React Native platforms.`,
          `Using Git, GitHub and Azure as a software version controller.`,
          `Implementing CI/CD using Jenkins and Azure.`,
          `Unit testing using JUnit and PHPUnit.`,
          `I liaise with a variety of other departments within the project, including cross-location teams, on a daily basis, such as Quality Control and other developers, in order to streamline internal processes and maintain a consistently fast and accurate turnaround of incoming tasks`,
          `Training new hires and mentoring Senior and Junior developers`,
        ],
        responsibilities: [
          `Full Stack (back-end and front-end) `,
          `Developing and improving systems using:  Java, XML, JavaScript, CSS, HTML, Azure DevOps, React JS, and PHP.`,
          `Developing and improving mobile applications on Android and React Native platforms.`,
          `Using Git, GitHub and Azure as a software version controller.`,
          `Implementing CI/CD using Jenkins and Azure.`,
          `Unit testing using JUnit and PHPUnit.`,
          `I liaise with a variety of other departments within the project, including cross-location teams, on a daily basis, such as Quality Control and other developers, in order to streamline internal processes and maintain a consistently fast and accurate turnaround of incoming tasks`,
          `Training new hires and mentoring Senior and Junior developers`,
        ],
      },
      {
        company: 'BYNARIC',
        position: 'SOFTWARE DEVELOPER',
        duration: 'JANUARY 2020 - MAY 2021',
        description: `Bynaric is an Irish software development and consulting start-up that specializes in solutions for property services, housing associations and companies throughout Ireland and the United Kingdom.
        I have worked on the main project, developing a system which could help Housing Association companies to manage their properties and handle surveys. I started as a Java developer software using an open-source software and after 1 year of  working in the company I became a Mobile Tech Lead.
        In the team, we use SCRUM methodology with 2 weeks of spring time. There are different collaborating  teams like Backend, Frontend and Mobile sharing ideas or solving problems. I have been improving my skills in the following:`,
        tecnologies: [
          `Full Stack (back-end and front-end) `,
          `Developing and improving systems using:  Java, XML, JavaScript, CSS, HTML, Azure DevOps, React JS, and PHP.`,
          `Developing and improving mobile applications on Android and React Native platforms.`,
          `Using Git, GitHub and Azure as a software version controller.`,
          `Implementing CI/CD using Jenkins and Azure.`,
          `Unit testing using JUnit and PHPUnit.`,
          `I liaise with a variety of other departments within the project, including cross-location teams, on a daily basis, such as Quality Control and other developers, in order to streamline internal processes and maintain a consistently fast and accurate turnaround of incoming tasks`,
          `Training new hires and mentoring Senior and Junior developers`,
        ],
        responsibilities: [
          `Full Stack (back-end and front-end) `,
          `Developing and improving systems using:  Java, XML, JavaScript, CSS, HTML, Azure DevOps, React JS, and PHP.`,
          `Developing and improving mobile applications on Android and React Native platforms.`,
          `Using Git, GitHub and Azure as a software version controller.`,
          `Implementing CI/CD using Jenkins and Azure.`,
          `Unit testing using JUnit and PHPUnit.`,
          `I liaise with a variety of other departments within the project, including cross-location teams, on a daily basis, such as Quality Control and other developers, in order to streamline internal processes and maintain a consistently fast and accurate turnaround of incoming tasks`,
          `Training new hires and mentoring Senior and Junior developers`,
        ],
      },
      {
        company: 'AUGURIO CYBER THREAT INTELLIGENCE',
        position: 'Full Stack Developer',
        duration: ' SEPTEMBER 2017- February 2020',
        description: `Augurio Cyber Threat Intelligence is a platform that allows to develop a clear understanding of the current state of the organization in relation to cyber adversaries and their environment.
        During this time in the company, I learned some basic and interesting theories about cybersecurity. We were a small team of developers (3 in total) but we had to collaborate with other teams in relation to security engineering.
        The methodology we used was SCRUM with 2 weeks of spring time, and we used Trello that helped us to manage the control of the task of each member of our team of 10.`,
        tecnologies: [
          `In this company, I was working on the back-end and front-end side, getting data from databases using REST API. `,
          `I created functions and interfaces to pull information from the database, to store or modify the data from +database and present the information to customers. I was using Git/GitHub to control the versions in the code.`,
          `I was working on the main project that showed information about different subjects related to cybersecurity, also I was working on the web page of the company using WordPress and modifying some existing projects.`,
          `The program language I was using to develop in this company was Python, on the back-end side, and I was using the framework Flask. The IDE used was Pycharm from JetBrains IntelliJ IDEA.`,
          `For the  front-end side I was using HTML, CSS, Bootstrap, JavaScript and jQuery and implementing many different plugins to show information from the database.`,
          `For the database, I was using MySQL with workbench and MongoDB.`,
        ],
        responsibilities: [
          `In this company, I was working on the back-end and front-end side, getting data from databases using REST API. `,
          `I created functions and interfaces to pull information from the database, to store or modify the data from +database and present the information to customers. I was using Git/GitHub to control the versions in the code.`,
          `I was working on the main project that showed information about different subjects related to cybersecurity, also I was working on the web page of the company using WordPress and modifying some existing projects.`,
          `The program language I was using to develop in this company was Python, on the back-end side, and I was using the framework Flask. The IDE used was Pycharm from JetBrains IntelliJ IDEA.`,
          `For the  front-end side I was using HTML, CSS, Bootstrap, JavaScript and jQuery and implementing many different plugins to show information from the database.`,
          `For the database, I was using MySQL with workbench and MongoDB.`,
        ],
      },
      {
        company: 'SOLUCIONES TEA',
        position: 'JR. WEB DEVELOPER',
        duration: 'AUGUST 2016 – AUGUST 2017',
        description: `Soluciones TEA is a startup company that develops software for micro, small and medium-sized businesses. The type of customers that this company had been: construction companies, agriculture companies, hospitals, dentists, arcade fixer companies, restaurants and textile companies.`,
        tecnologies: [
          `In this company I used to code in back-end and front-end, also, I was planning new databases and modifying old databases. I used to work in a team of 4 people, planning the projects and applying a mix of different methodologies (waterfall and agile).`,
          `Most of the time I was working on the front-end side, creating all the interfaces for each project. Furthermore, I was working on the back-end side creating databases and developing functions or methods to get the information from databases and sending it to the front-end side. The model implemented in the company to develop projects was MVC.`,
          `The program language I was using to develop the projects was PHP, in the Back-end side, and the frameworks I was using for PHP were Laravel and Yii2. The IDE used was PhpStorm from JetBrains IntelliJ IDEA.`,
          `For the Front-end side I was using HTML, CSS, Bootstrap, JavaScript and jQuery`,
          `For databases, I was using MySQL with workbench.`,
          `For developing in Android, I was using Android Studio.`,
          `I was working on many different projects because the company develops web and mobile apps. Some of the projects I was working on, were:`,
          `Web app for control of projects for a building company: in this web app has`,
          `different sections like: control of stock, control of flow money, control of information about the projects, control of employees and which employees were working on each project. `,
          `Web app for a hospital: in this web app I developed many different sections for the control of patients, control of prescriptions for each patient, control of doctors working in the hospital and control of money flow. `,
          `Web app for stock control for a company in the agriculture role: I developed in this web app sections to have the control of stock, how many products have been sold, control of the money  flow and a section for creation of new barcodes for each product. `,
          `Web and mobile app for a company working with video game machines: I was developing the sections for these apps to have the control if the machines have been repaired, status of each reparation, and control of money flow. `,
          `Web blog for a textile company: In this web blog I developed sections where the company could show its products, offers, contact section, a blog section where the company posts some information about related subjects and more. `,
          `Web and mobile app for a food company: This system is similar to Uber eats, just eat, etc. In this system I was developing the sections where the company could register new restaurants and all their menus with prices, a section where new customers could register and control of the money flow.`,
        ],
        responsibilities: [
          `In this company I used to code in back-end and front-end, also, I was planning new databases and modifying old databases. I used to work in a team of 4 people, planning the projects and applying a mix of different methodologies (waterfall and agile).`,
          `Most of the time I was working on the front-end side, creating all the interfaces for each project. Furthermore, I was working on the back-end side creating databases and developing functions or methods to get the information from databases and sending it to the front-end side. The model implemented in the company to develop projects was MVC.`,
          `The program language I was using to develop the projects was PHP, in the Back-end side, and the frameworks I was using for PHP were Laravel and Yii2. The IDE used was PhpStorm from JetBrains IntelliJ IDEA.`,
          `For the Front-end side I was using HTML, CSS, Bootstrap, JavaScript and jQuery`,
          `For databases, I was using MySQL with workbench.`,
          `For developing in Android, I was using Android Studio.`,
          `I was working on many different projects because the company develops web and mobile apps. Some of the projects I was working on, were:`,
          `Web app for control of projects for a building company: in this web app has`,
          `different sections like: control of stock, control of flow money, control of information about the projects, control of employees and which employees were working on each project. `,
          `Web app for a hospital: in this web app I developed many different sections for the control of patients, control of prescriptions for each patient, control of doctors working in the hospital and control of money flow. `,
          `Web app for stock control for a company in the agriculture role: I developed in this web app sections to have the control of stock, how many products have been sold, control of the money  flow and a section for creation of new barcodes for each product. `,
          `Web and mobile app for a company working with video game machines: I was developing the sections for these apps to have the control if the machines have been repaired, status of each reparation, and control of money flow. `,
          `Web blog for a textile company: In this web blog I developed sections where the company could show its products, offers, contact section, a blog section where the company posts some information about related subjects and more. `,
          `Web and mobile app for a food company: This system is similar to Uber eats, just eat, etc. In this system I was developing the sections where the company could register new restaurants and all their menus with prices, a section where new customers could register and control of the money flow.`,
        ],
      },
    ];
    this.softSkills = [
      `Teamwork`,
      `Dependability`,
      `Conflict resolution`,
      `Adaptability`,
      `Flexibility`,
      `Problem-solving`,
      `Research`,
      `Work ethic`,
      `Integrity`,
      `Leadership`,
      `Effective communication skill`,
    ];
    this.technicalSkills = [
      `PHP: Laravel and Yii2`,
      `CSS and HTML`,
      `JavaScript: ECMAScript 6, React JS and React Native`,
      `Android: Java and Kotlin`,
      `Postman`,
      `Python: Django and Flask`,
      `Trello`,
      `Git, GitHub`,
      `CI/CD: Jenkins`,
      `Docker`,
      `REST API`,
      `Java: SpringBoot`,
      `Databases: MongoDB, PostgreSQL and MySQL`,
      `System Administration: Linux, Unix, Virtual Environments`,
      `Networking: Packet Tracer, TCP/IP Protocol, OSI Model, HTTP/HTTPS, IP Addressing, `,
    ];
    this.languages = [`Spanish (Native)`, `English (Fluent)`];
    this.education = [
      {
        name: `Instituto Tecnologico de Toluca`,
        duration: `August 2011 - July 2016`,
        degree: `Computer Systems Engineer`,
      },
      {
        name: `CECYTEM`,
        duration: `August 2008 - July 2011`,
        degree: 'Information Technology Technician',
      },
    ];
    this.certifications = [
      {
        name: 'Microsoft Azure Fundamentals',
        issue: 'October 2022',
        credentialId: 'nu4a-Dw8E',
      },
      {
        name: 'Scrum Master Professional Certificate - SMPC ',
        issue: 'May 2021',
        credentialId: 'CLRYDBVSSR-LLKTTHGL-XHTSTXSYMM',
      },
      {
        name: 'Scrum Foundation Professional Certificate',
        issue: 'May 2021',
        credentialId: '63227445',
      },
      {
        name: 'Android Certified Professional',
        issue: 'May 2016',
        credentialId: '1509146125235',
      },
    ];
    this.volunteering = [
      {
        place: `HOSTEL RIA TERRACE`,
        country: `Portugal`,
        duration: ` NOVEMBER 2019 – JANUARY 2020`,
        description: `During this volunteering, I was fixing some bugs on the hostel’s web page and adding new functionalities. Furthermore, I was helping to give advice on how to show information and new features on the site.
        The manager was so satisfied with my work that after I finished working on the hostel’s web page, he asked me to create the basic structure of another web page for a cleaning company.
        During this volunteering I was also working with WordPress and some plugins like HBook, Divi, PayPal, Stripe, etc.`,
      },
    ];
  }
}
