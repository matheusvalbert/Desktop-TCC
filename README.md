# Desktop TCC

Front-end desktop do projeto de TCC (Sistema de controle de acesso para condomínios).

O projeto é um protótipo de um sistema de controle de acesso para condomínios, no qual se utiliza técnicas de inteligência artificial para detectar e reconhecer faces e placas de moradores e visitantes.

O sistema possibilita que o próprio morador realize o seu cadastro e de seus visitantes.

# Funcionalidades Porteiro/Administrador

- Adicionar um novo usuário: utilizado pelo administrador para cadastrar um novo morador, possibilitando que tenha acesso ao aplicativo a partir de um login e uma senha;
- Alterar dados do usuário: utilizado pelo administrador para alterar a senha ou excluir um morador do sistema;
- Gerenciar ambientes: nesta área o administrador pode adicionar ou remover um ambiente de uso comum do condomínio;
- Histórico de entradas do usuário cadastrado: permite que o administrador visualize quem entrou no condomínio, mostrando seu nome, número da casa e data;
- Histórico de entradas do usuário não cadastrado: permite que a portaria ou o administrador visualize quem entrou no condomínio;
- Nova notificação: possibilita que a portaria envie uma notificação para uma determinada casa do condomínio;
- Chegada visitante não cadastrado: possibilita que o porteiro envie uma notificação para os moradores de uma casa dizendo que a visita chegou, informando seu nome e a possibilidade de aceitar ou recusar a visita.

# Como utilizar
```
yarn install
yarn electron:dev
```
# Principal tela do sistema

<p align="center">
  <img src="https://github.com/matheusvalbert/Desktop-TCC/blob/master/tela.png" />
</p>

# Outros repositórios do projeto

- Servidor: https://github.com/matheusvalbert/Server-TCC
- Mobile: https://github.com/matheusvalbert/Mobile-TCC
- Placas: https://github.com/matheusvalbert/Placas-TCC
