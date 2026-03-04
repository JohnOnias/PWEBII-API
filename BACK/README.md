# BACK (Servidor)

Instruções específicas para a parte de backend do projeto.

Pré-requisitos
- Node.js 18+ e npm

Instalação
```bash
cd BACK
npm install
```

Variáveis de ambiente
- Crie um arquivo `.env` na pasta `BACK/` com a chave da API usada pelo servidor:
  ```env
  CLASH_API_KEY=sua_chave_aqui
  ```

Execução
- A API principal é iniciada com:
  ```bash
  node server.js
  ```

Problema comum: "Cannot use import statement outside a module"
- Causa: o arquivo `server.js` usa sintaxe ES Modules (`import ...`). Existem duas soluções:
  1. Habilitar ES Modules no `BACK/package.json` adicionando:
     ```json
     {
       "type": "module"
     }
     ```
     (adicione junto às outras chaves existentes no `package.json`)
  2. Converter o código para CommonJS (substituir `import` por `require`, e `export` por `module.exports`).

Rota relevante
- `GET /cards` — busca cartas na API externa do Clash Royale (usa `CLASH_API_KEY`).

Notas
- Verifique se as dependências estão instaladas e se a variável de ambiente está correta antes de iniciar o servidor.
