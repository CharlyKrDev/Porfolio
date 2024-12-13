import i18n  from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng:'en',
    resources: {
      es: {
        translation: {
          navBar: {
            home: "Inicio",
            projects: "Proyectos",
            certification: "Certificados",
            aboutme: "Sobre mi",
            contact: "Contacto",
            language:'Idioma',
            english:'Ingles',
            spanish:'Español',
            italian:'Italiano',
          },
          layout: {
            projects: "Proyectos",
            certification: "Certificados",
            aboutme: "Sobre mi",
            contact: "Contacto",
          },
          home: {
            h1: "¡Hola! Soy",
            pStrong: "Un apasionado por el desarrollado de aplicaciones web.",
            p: "Mi enfoque principal es el",
            p2: "aunque también estoy profundizando mis conocimientos en el ",
            pStrong2:
              " Siempre en busca de nuevos desafíos y oportunidades para seguir innovando.",
          },
          aboutme: {
            cupmH2: "Conóceme un poco mas",
            cupmP1: "Nací en Argentina.",
            cupmP2: "Actualmente estoy viviendo en Piacenza, Italia.",
            cupmP3: "Soy Técnico orientado en telecomunicaciones.",
            cupmP4: "Me gusta la pizza y pasar tiempo con mi familia.",
          },
          hobbies: {
            hobP1:
              "Me encanta cocinar, asi que estudie gastronomía como pasatiempo.",
            hobP2:
              "Disfruto del aire libre, y me gusta realizar trekking y ciclismo.",
            hobP3: "También me gusta leer y ver series.",
            hobP4: "",
          },

          skills: {
            skillsH2: "Habilidades",
            skillsP2:
              "Hablo español de forma nativa, ingles nivel B2 y estoy aprendiendo italiano A1-A2.",
            skillsP3:
              "Estoy familiarizado con la metodología LEAN, y me estoy certificado en SCRUM y AGILE.",
            skillsP4:
              "Me gusta, y estoy acostumbrado a trabajar en equipo. Soy proactivo.Y gracias a mi experiencia previa he desarrollado escucha activa, gestión de clientes y resolución de problemas.",
          },
          objetives: {
            objH2: "Objetivos",
            objP1:
              "Seguir desarrollándome como programador web FullStack, por tal motivo, actualmente estoy estudiando back-end no relacional.",
            objP2:
              "Ser parte de un equipo de trabajo para y desarrollar proyectos de calidad que resuelvan una o varias necesidades.",
            objP3: "Seguir desarrollando mis ideas, y hacer posible las tuya.",
            objP4: "Disfrutar de las posibilidades.",
          },
          form: {
            formH3:
              "Gracias por tomarte el tiempo de ver mi porfolio, ahora te invito a que trabajemos juntos!!",
            formBtn1: "Contácteme por e-mail",
            formH2: "Mis redes sociales:",
            formName: "Nombre",
            formMessage: "Mensaje",
            formMessagePlaceholder: "Contame tu idea",
            formAlert:
              "Mensaje enviado de forma correcta. En breve me pondré en contacto! Gracias.",
            formBtn2: "Enviar",
          },
          footer: {
            footerH2: "Sitio web desarrollado con ReactJS por CharlyKrDev 2024",
          },
          certification: {
            0: {
              title: "BackEnd",
              desc: "Un curso de backEnd no relacional con proyecto de e-commerce que abarca Node.js, MongoDB y Express incluye la creación de una API RESTful con operaciones CRUD, autenticación de usuarios, validación de datos, seguridad, pruebas, despliegue en producción y optimización de rendimiento.",
            },
            1: {
              title: "Desarrollador Front-end React",
              desc: "En el transcurso de la carrera he adquirido conocimientos fundamentales sobre React, incluyendo: componentes, estado y props, ciclo de vida de los componentes, manejo de eventos, enrutamiento con React Router, gestión del estado global con Context API, y la creación de aplicaciones de una sola página (SPA). Además, he explorado prácticas avanzadas como el uso de Hooks, la integración de APIs externas, la optimización del rendimiento y el despliegue de aplicaciones React en entornos de producción. El proyecto final del curso consistió en desarrollar el front-end de un e-commerce basado en React con la implementación de funcionalidades CRUD (Create, Read, Update, Delete) mediante Firebase, demostrando la implementación de los conceptos aprendidos en un contexto práctico.",
            },
            2: {
              title: "JavaScript",
              desc: "Durante el curso he aprendido: Los Fundamentos de JavaScript, DOM Manipulation, Event Handling, AJAX y Fetch API, ECMAScript 6 (ES6), Bibliotecas Front-end, Gestión de aplicaciones, Rutas y navegación. El Proyecto final ha sido el front-end de un e-commerce.",
            },
            3: {
              title: "WordPress",
              desc: "WordPress es un sistema de gestión de contenidos (CMS) de código abierto que permite crear y gestionar sitios web de manera intuitiva y flexible. Con el que he creado un e-commerce usando los plugins mas populares como: WOOeCommerce, Elementor, Gutenberg, Divi Builder, All-in-One WP Migration, MercadoLibre para WooCommerce, PayPal para WooCommerce, WPForms, Contact Form 7 entre otros.",
            },
            4: {
              title: "Desarrollo Web",
              desc: "En el curso de Desarrollo Web he tenido la oportunidad de adentrarme al fascinante mundo del desarrollando web aprendiendo HTML 5, CSS 3, Bootstrap, Sass y los principios SEO.",
            },
            5: {
              title: "Data Analytic",
              desc: "Gracias a mi anterior empleador tuve la oportunidad de capacitarme en el nivel Started de Data analytic, donde aprendí los principios de SQL, Excel, Power BI, y donde pude trabajar con la base de datos de Teradata, también aprendí la importancia de la información para la toma de decisiones.",
            },
            6: {
              title: "Git | GitHub",
              desc: '"GitHub Universe 2023 Cloud Skills Challenge" propuesto por Microsoft junto con GitHub, donde aprendí a trabajar con uno de los sistemas de control de versiones distribuidos (DVCS) más importantes en el mundo del desarrollo de software.',
            },
            7: {
              title: "Desarrollador Web",
              desc: "Este curso due brindado por una de las facultades mas prestigiosas de Argentina, donde tuve la dicha de poder adentrarme al mundo del desarrollo web, desde entonces he estado aprendido cada dia mas, para poder seguir creciendo en ese fascinante mundo.",
            },
            8: {
              comple23: "2023 - Completado",
              act: "2024 - En curso",
              comple24: "2024 - Completado",
              comple18: "2018 - Completado",
            },
            9: {
              title: "FullStack - MERN",
              desc: "He finalizado con éxito la carrera de Full Stack, adquiriendo habilidades en el desarrollo de aplicaciones web con tecnologías como React, Node.js, Express, MongoDB y Firebase. Además, tengo experiencia en el uso de Git y GitHub para la colaboración en equipo y la gestión eficiente de proyectos.",
            },
          },
        },
      },

      en: {
        translation: {
          navBar: {
            home: "Home",
            projects: "Projects",
            certification: "Certifications",
            aboutme: "About me",
            contact: "Contact",
            language:'Language',
            english:'English',
            spanish:'Spanish',
            italian:'Italian',
          },
          layout: {
            projects: "Projects",
            certification: "Certifications",
            aboutme: "About me",
            contact: "Contact",
          },

          home: {
            h1: "Hello! I am",
            pStrong: "Passionate about web application development.",
            p: "My main focus is on",
            p2: "although I am also delving into ",
            pStrong2:
              " Always seeking new challenges and opportunities to continue innovating.",
          },
          aboutme: {
            cupmH2: "Get to know me a little more",
            cupmP1: "I was born in Argentina.",
            cupmP2: "Currently, I am living in Piacenza, Italy.",
            cupmP3: "I am a Telecommunications Technician.",
            cupmP4: "I enjoy pizza and spending time with my family.",
          },
          hobbies: {
            hobP1: "I love cooking, so I studied gastronomy as a hobby.",
            hobP2: "I enjoy the outdoors and like hiking and cycling.",
            hobP3: "I also like reading and watching series.",
            hobP4: "",
          },

          skills: {
            skillsH2: "Skills",
            skillsP2:
              "I am a native Spanish speaker, have a B2 level of English, and I am learning Italian at an A1-A2 level.",
            skillsP3:
              "I am familiar with LEAN methodology and am certified in SCRUM and AGILE.",
            skillsP4:
              "I enjoy and am accustomed to working in teams. I am proactive. Thanks to my previous experience, I have developed active listening, customer management, and problem-solving skills.",
          },

          objectives: {
            objH2: "Objectives",
            objP1:
              "Continue developing as a FullStack web developer. Currently, I am studying non-relational backend.",
            objP2:
              "Be part of a team to develop high-quality projects that solve one or more needs.",
            objP3: "Continue developing my ideas and making yours possible.",
            objP4: "Enjoy the possibilities.",
          },

          form: {
            formH3:
              "Thank you for taking the time to view my portfolio. Now, I invite you to work together!",
            formBtn1: "Contact me via email",
            formH2: "My social media:",
            formName: "Name",
            formMessage: "Message",
            formMessagePlaceholder: "Tell me your idea",
            formAlert:
              "Message sent successfully. I will get in touch with you shortly! Thank you.",
            formBtn2: "Send",
          },
          footer: {
            footerH2: "Website developed with ReactJS by CharlyKrDev 2024",
          },

          certification: {
            0: {
              title: "BackEnd",
              desc: "I have successfully completed a non-relational backend course with an e-commerce project that covers Node.js, MongoDB, and Express, including the creation of a RESTful API with CRUD operations, user authentication, data validation, security, testing, deployment to production, and performance optimization.",
            },
            1: {
              title: "Front-end React Developer",
              desc: "During the course, I have acquired fundamental knowledge about React, including: components, state and props, component lifecycle, event handling, routing with React Router, global state management with Context API, and the creation of single-page applications (SPAs). I have also explored advanced practices such as the use of Hooks, integration of external APIs, performance optimization, and deployment of React applications in production environments. The final project of the course consisted of developing the front-end of an e-commerce based on React with the implementation of CRUD (Create, Read, Update, Delete) functionalities using Firebase, demonstrating the implementation of the learned concepts in a practical context.",
            },
            2: {
              title: "JavaScript",
              desc: "During the course, I have learned: The Fundamentals of JavaScript, DOM Manipulation, Event Handling, AJAX and Fetch API, ECMAScript 6 (ES6), Front-end Libraries, Application Management, Routes and navigation. The final project was the front-end of an e-commerce.",
            },
            3: {
              title: "WordPress",
              desc: "WordPress is an open-source content management system (CMS) that allows creating and managing websites intuitively and flexibly. With it, I have created an e-commerce using the most popular plugins such as: WooCommerce, Elementor, Gutenberg, Divi Builder, All-in-One WP Migration, MercadoLibre for WooCommerce, PayPal for WooCommerce, WPForms, Contact Form 7, among others.",
            },
            4: {
              title: "Web Development",
              desc: "In the Web Development course, I had the opportunity to delve into the fascinating world of web development, learning HTML 5, CSS 3, Bootstrap, Sass, and SEO principles.",
            },
            5: {
              title: "Data Analytics",
              desc: "Thanks to my previous employer, I had the opportunity to train at the Data Analytics Starter level, where I learned the principles of SQL, Excel, Power BI, and where I was able to work with the Teradata database. I also learned the importance of information for decision-making.",
            },
            6: {
              title: "Git | GitHub",
              desc: '"GitHub Universe 2023 Cloud Skills Challenge" proposed by Microsoft along with GitHub, where I learned to work with one of the most important distributed version control systems (DVCS) in the world of software development.',
            },
            7: {
              title: "Web Developer",
              desc: "This course was offered by one of the most prestigious faculties in Argentina, where I had the pleasure of delving into the world of web development. Since then, I have been learning every day to continue growing in this fascinating world.",
            },
            8: {
              comple23: "2023 - Completed",
              act: "2024 - In progress",
              comple24: "2024 - Completed",
              comple18: "2018 - Completed",
            },
            9: {
              title: "FullStack - MERN",
              desc: "I have successfully completed the Full Stack program, gaining skills in developing web applications using technologies such as React, Node.js, Express, MongoDB, and Firebase. Additionally, I have experience using Git and GitHub for team collaboration and efficient project management.",
            },
          },
        },
      },
      it: {
        translation: {
          navBar: {
            home: "Home",
            projects: "Progetti",
            certification: "Certificazioni",
            aboutme: "Su di me",
            contact: "Contatto",
            language:'Lingua',
            english:'Inglese',
            spanish:'Spagnolo',
            italian:'Italiano',
          },
          layout: {
            projects: "Progetti",
            certification: "Certificazioni",
            aboutme: "Su di me",
            contact: "Contatto",
          },
          home: {
            h1: "Ciao! Sono",
            pStrong: "Appassionato dello sviluppo di applicazioni web.",
            p: "Il mio principale focus è sul",
            p2: "anche se sto approfondendo le mie conoscenze nel ",
            pStrong2:
              " Sempre alla ricerca di nuove sfide e opportunità per continuare a innovare.",
          },
          aboutme: {
            cupmH2: "Conoscimi un po' di più",
            cupmP1: "Sono nato in Argentina.",
            cupmP2: "Attualmente vivo a Piacenza, Italia.",
            cupmP3: "Sono un Tecnico Orientato alle Telecomunicazioni.",
            cupmP4:
              "Mi piace la pizza e trascorrere del tempo con la mia famiglia.",
          },
          hobbies: {
            hobP1: "Amo cucinare, quindi ho studiato gastronomia come hobby.",
            hobP2: `Mi piace stare all' aria aperta e fare escursioni e ciclismo.`,
            hobP3: "Mi piace anche leggere e guardare serie.",
            hobP4: "",
          },

          skills: {
            skillsH2: "Competenze",
            skillsP2:
              "Parlo spagnolo come lingua madre, ho un livello B2 di inglese e sto imparando l' italiano a un livello A1-A2.",
            skillsP3:
              " Sono familiare con la metodologia LEAN e sono certificato in SCRUM e AGILE.",
            skillsP4:
              "Mi piace e sono abituato a lavorare in team. Sono proattivo. Grazie alla mia precedente esperienza, ho sviluppato capacità di ascolto attivo, gestione dei clienti e risoluzione dei problemi.",
          },

          objectives: {
            objH2: "Obiettivi",
            objP1:
              "Continuare a svilupparsi come sviluppatore web FullStack. Attualmente sto studiando backend non relazionale.",
            objP2:
              "Far parte di un team per sviluppare progetti di alta qualità che risolvano uno o più bisogni.",
            objP3:
              "Continuare a sviluppare le mie idee e rendere possibili le tue.",
            objP4: "Godersi le possibilità.",
          },
          form: {
            formH3:
              "Grazie per aver dedicato del tempo a vedere il mio portfolio. Ora ti invito a lavorare insieme!",
            formBtn1: "Contattami via email",
            formH2: "I miei social media:",
            formName: "Nome",
            formMessage: "Messaggio",
            formMessagePlaceholder: "Raccontami la tua idea",
            formAlert:
              "Messaggio inviato correttamente. Mi metterò in contatto con te a breve! Grazie.",
            formBtn2: "Inviare",
          },
          footer: {
            footerH2: "Sito web sviluppato con ReactJS da CharlyKrDev 2024",
          },
          certification: {
            0: {
              title: "BackEnd",
              desc: "Ho completato con successo un corso di backend non relazionale con un progetto di e-commerce che include Node.js, MongoDB e Express, e che prevede la creazione di un'API RESTful con operazioni CRUD, autenticazione degli utenti, convalida dei dati, sicurezza, testing, distribuzione in produzione e ottimizzazione delle prestazioni.",
            },
            1: {
              title: "Sviluppatore Front-end React",
              desc: "Durante il corso, ho acquisito conoscenze fondamentali su React, tra cui: componenti, stato e props, ciclo di vita dei componenti, gestione degli eventi, routing con React Router, gestione dello stato globale con Context API e creazione di applicazioni a pagina singola (SPA). Ho esplorato anche pratiche avanzate come l'uso di Hooks, integrazione di API esterne, ottimizzazione delle prestazioni e distribuzione di applicazioni React in ambienti di produzione. Il progetto finale del corso consisteva nello sviluppo del front-end di un e-commerce basato su React con l'implementazione di funzionalità CRUD (Create, Read, Update, Delete) utilizzando Firebase, dimostrando l'implementazione dei concetti appresi in un contesto pratico.",
            },
            2: {
              title: "JavaScript",
              desc: "Durante il corso ho imparato: I fondamentali di JavaScript, Manipolazione del DOM, Gestione degli eventi, AJAX e Fetch API, ECMAScript 6 (ES6), Librerie front-end, Gestione delle applicazioni, Percorsi e navigazione. Il progetto finale era il front-end di un e-commerce.",
            },
            3: {
              title: "WordPress",
              desc: "WordPress è un sistema di gestione dei contenuti (CMS) open-source che consente di creare e gestire siti web in modo intuitivo e flessibile. Con esso, ho creato un e-commerce utilizzando i plugin più popolari come: WooCommerce, Elementor, Gutenberg, Divi Builder, All-in-One WP Migration, MercadoLibre per WooCommerce, PayPal per WooCommerce, WPForms, Contact Form 7, tra gli altri.",
            },
            4: {
              title: "Sviluppo Web",
              desc: "Nel corso di Sviluppo Web ho avuto l'opportunità di immergermi nel mondo affascinante dello sviluppo web, imparando HTML 5, CSS 3, Bootstrap, Sass e principi di SEO.",
            },
            5: {
              title: "Analisi dei Dati",
              desc: "Grazie al mio precedente datore di lavoro, ho avuto l'opportunità di formarmi al livello Data Analytics Starter, dove ho imparato i principi di SQL, Excel, Power BI e dove ho potuto lavorare con il database Teradata. Ho anche appreso l'importanza delle informazioni per la presa di decisioni.",
            },
            6: {
              title: "Git | GitHub",
              desc: '"GitHub Universe 2023 Cloud Skills Challenge" proposto da Microsoft insieme a GitHub, dove ho imparato a lavorare con uno dei più importanti sistemi di controllo versione distribuiti (DVCS) nel mondo dello sviluppo software.',
            },
            7: {
              title: "Sviluppatore Web",
              desc: "Questo corso è stato offerto da una delle facoltà più prestigiose dell'Argentina, dove ho avuto il piacere di immergermi nel mondo dello sviluppo web. Da allora, sto imparando ogni giorno per continuare a crescere in questo affascinante mondo.",
            },
            8: {
              comple23: "2023 - Completato",
              act: "2024 - In corso di svolgimento",
              comple24: "2024 - Completato",
              comple18: "2018 - Completato",
            },
            9: {
              title: "FullStack - MERN",
              desc: "Ho completato con successo il corso Full Stack, acquisendo competenze nello sviluppo di applicazioni web con tecnologie come React, Node.js, Express, MongoDB e Firebase. Inoltre, ho esperienza nell'uso di Git e GitHub per la collaborazione in team e la gestione efficiente dei progetti.",
            },
          },
        },
      },
    },
  });
