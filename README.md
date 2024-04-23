
### Porfolio
## de Carlos Alberto Kaar
=======
![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/bdbeeaa0-beb1-459a-9092-360cf3df1ab4)

## El porfolio ha sido desarrollado con la libreria React JS junto con VITE y para estilizar el framework TailwindCss

![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/dd8df0b9-be59-4234-a9b9-df2a62114b6c)

## Como empaquetador utilice pnpm

![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/3923b500-256d-44f9-b732-efd351ad5f71)

## El desarrollo del porfolio también cuenta con el uso de i18next

![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/ca5542ad-8e38-445a-8208-9ceabad17983)
![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/df061f45-6e5d-46de-9414-b5e615f0ec92)

## i18next es un popular marco de internacionalización (i18n) para aplicaciones JavaScript. El nombre "i18next" proviene de "i18n", donde "i" representa "internacionalización" y hay 18 letras entre "i" y "n" en la palabra. i18next simplifica el proceso de incorporar soporte multilingüe en aplicaciones web, móviles y de escritorio al proporcionar características para manejar traducciones, formato y otros aspectos de la internacionalización. Permite a los desarrolladores gestionar y cargar traducciones de forma dinámica, facilitando la creación de aplicaciones adaptables para diferentes idiomas y regiones.

 ```javascript
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
  ```

![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/a91c76d4-af24-4d38-985f-5e3a08ac2b94)

también se utilizó react icons

![image](https://github.com/CharlyKrDev/Porfolio/assets/123911937/39447d50-5104-4dfa-8321-94b5ea4b11b4)


