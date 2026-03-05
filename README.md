
 # PWEBII-API

 Projeto de exemplo desenvolvido para a disciplina Programação Web II (IFCE Campus Cedro).

 Equipe: John E. Onias e Eric Reullyson

 Tecnologias principais
 - Backend: Node.js, Express, Axios, dotenv, CORS
 - Frontend: React (Vite), axios

 Estrutura do repositório
 - `BACK/` : código do servidor (Express)
 - `FRONT/`: aplicativo React com Vite

 Requisitos
 - Node.js 18+ (o projeto foi testado com Node 24)
 - npm

 Instalação (visão geral)
 1. Clone o repositório:
     ```bash
     git clone <repo-url>
     cd PWEBII-API
     ```
 2. Backend:
     ```bash
     cd BACK
     npm install
     ```
 3. Frontend:
     ```bash
     cd ../FRONT
     npm install
     ```

 Configurar variáveis de ambiente (backend)
 - Crie um arquivo `.env` dentro de `BACK/` com a sua chave da API do Clash Royale (ou outras variáveis necessárias):
     ```env
     CLASH_API_KEY=sua_chave_aqui
     ```

 Executando localmente
 - Rodar o backend (pasta `BACK`):
     ```bash
     node server.js
     ```
    Observação: se receber erro como "Cannot use import statement outside a module", veja `BACK/README.md` para soluções (ex.: configurar `type: "module"` em `package.json` ou usar sintaxe CommonJS).

 - Rodar o frontend (pasta `FRONT`):
     ```bash
     cd FRONT
     npm run dev
     ```

 API exposta (exemplo)
 - `GET /cards` (no servidor Express em `BACK/server.js`): retorna dados de cartas da API do Clash Royale (é preciso a variável `CLASH_API_KEY`).

 Observações de desenvolvimento
 - O backend usa sintaxe ES Modules (`import ... from ...`). Para executar diretamente com `node` é necessário que o `package.json` do `BACK` contenha `"type": "module"` ou que os arquivos usem sintaxe CommonJS (`require`).
 - Se preferir manter CommonJS, substitua os `import` por `const express = require('express')`, etc.

 Contribuição
 - Abra uma issue para discutir mudanças ou envie um pull request com descrições claras.

 Licença
 - Consulte os autores do projeto para decidir a licença apropriada.

 Arquivos adicionais com instruções específicas foram adicionados em `BACK/README.md` e `FRONT/README.md`.