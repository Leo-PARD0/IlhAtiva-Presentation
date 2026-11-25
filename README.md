# IlhAtiva — apresentação local

Aplicação de apresentação interativa feita com React, Vite e TanStack Router. Não usa backend, conta, autenticação ou serviços remotos em tempo de execução.

## Executar

Instale as dependências uma vez e inicie o servidor local:

```bash
npm install
npm run dev
```

O Vite informa o endereço local no terminal. Depois de instaladas as dependências, a aplicação pode ser executada sem conexão com a internet.

## Rotas

- `/` — página inicial
- `/stage` — telão
- `/controller` — controle da apresentação
- `/prototipo/$tela` — protótipos (`tela-1`, `tela-2` ou `tela-3`)

O controle e o telão sincronizam o estado no próprio navegador usando `BroadcastChannel`, com persistência e fallback via `localStorage`. Abra as duas rotas no mesmo navegador e origem.

## Build local

```bash
npm run lint
npm run build
npm run preview
```

O build gera os arquivos estáticos em `dist/`; `npm run preview` os serve localmente para conferir o resultado.
