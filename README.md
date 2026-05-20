# Laudo Hospitalar - Versao Mobile

Projeto Expo/React Native criado a partir da versao Web `Laudo-Hospitalar-WEB`.

## Escopo mantido

- Login e recuperacao de senha.
- Area do Medico: Laudos, Notificacoes, Menu do Paciente, Preencher Laudos, Laudos Favoritos e Configuracoes.
- Configuracoes do Medico: Perfil, Seguranca e Acesso, Suporte, Termos, Alterar E-mail, Alterar Senha, Fale Conosco, Horarios e Adicionar Favoritos.

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

## Organizacao atualizada

- `App.js`: mantem apenas a inicializacao, navegacao simples e o mapa de telas.
- `src/telas/<Tela>/index.js`: cada tela fica isolada em sua propria pasta.
- `src/components/index.js`: componentes reutilizaveis em uso, como logos, headers e navegacao inferior.
- `src/styles/index.js`: estilos globais usados pelo app.
- `src/routes.js`: nomes das rotas ativas.
