# Laudo Hospitalar - Versão Mobile

Projeto Expo/React Native criado a partir da versão Web `Laudo-Hospitalar-WEB`.

## Escopo mantido

- Telas gerais: Início, Sobre, Funcionalidades e Contato.
- Login e recuperação de senha.
- Área do Médico: Laudos, Notificações, Menu do Paciente, Preencher Laudos, Buscar CID, Buscar Procedimentos, Laudos Favoritos e Configurações.
- Configurações do Médico: Perfil, Segurança e Acesso, Suporte, Termos, Alterar E-mail, Alterar Senha, Fale Conosco, Horários e Adicionar Favoritos.

## Removido/ignorado

- Todas as telas e rotas de Administrador.
- Todas as telas e rotas de Faturista.
- Dashboard.

## Como executar

```bash
npm install
npx expo start
```

Depois, abra no Expo Go ou no emulador Android.


## Organização atualizada

- `App.js`: mantém apenas a inicialização, navegação simples e o mapa de telas.
- `src/telas/<Tela>/index.js`: cada tela fica isolada em sua própria pasta.
- `src/components/index.js`: componentes reutilizáveis, como Header, Botão, Card, Input e Layout Médico.
- `src/styles/index.js`: CSS/estilos centralizados separados do App.
- `src/routes.js`: nomes das rotas e títulos das telas.
