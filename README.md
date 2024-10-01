## Aplicação Angular v15 de Login

Desenvolvido aplicação de login baseado em token JWT integrado a API Spring Boot.

# Frontend

Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.11.
<br/>
- HTML 5
- CSS 3
- Angular 15
- Typescript
- Toastr

<br /> 

Projeto front-end baseado no link: https://www.figma.com/design/7T1wkErczpMOBeqtpVjMSb/Login-Page-Design?node-id=6-920&node-type=canvas

<br/>

Tela de Login:
![Screenshot](src/prints/sistema.JPG)

<br/>

# Back-end

APP Spring Boot gerenciando tokens JWT em memória
<br /><br />
Iniciando o back-end: <br/> 
Via terminal, navegar para pasta: _backend na raiz do projeto e executar o comando: java -jar auth-jwt-0.0.1-SNAPSHOT.jar <br/>
A API estará disponivel em: http://localhost:8080/auth/registrar  via método POST.
<br />
- Java 17
- Spring Boot
- Spring Data
- Spring Security
- Lombok
- JWT 
- h2 database

<br/>
JSON POST
{
    "nome": "user",
    "email": "user@email.com",
    "senha": "password"
}

<br/>

Aplicação JWT Spring:
![Screenshot](src/prints/jwt-spring.JPG)

# Ambiente de execução App Angular
- Node.js instalado
- Instalar Angular CLI
    npm i -g @angular/cli
- Editor básico de edições ex: VS Code
- No diretorio _backend executar o comando: java -jar auth-jwt-0.0.1-SNAPSHOT.jar via terminal
- No diretorio raiz do projeto angular, executar o comando: ng serve




