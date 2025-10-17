## 🚀 Teddy Open Finance Frontend Challenges

Este projeto foi desenvolvido como parte de um desafio de frontend, utilizando tecnologias modernas para criar uma aplicação responsiva e eficiente:

- **Vite**: Ferramenta de build rápida e moderna.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de CSS utilitário para criação de layouts responsivos.
- **React Query**: Gerenciamento de estado assíncrono e cache de dados.
- **Lucide React**: Ícones modernos e personalizáveis para React.
- **React Router v7**: Gerenciamento de rotas e navegação entre páginas.
- **i18next + react-i18next**: Internacionalização (i18n) e detecção automática de idioma do navegador.
- **Axios**: Cliente HTTP para consumo de APIs REST.
- **Biome**: Ferramenta rápida de linting e formatação de código.
- **Plop.js**: Gerador de código automatizado para componentes, páginas e hooks.

## Como Executar o Projeto

### Configure as Variáveis de Ambiente

Para melhor experiência no VSCode, instale a extensão oficial Biome.
Assim, o código será formatado automaticamente ao salvar e seguirá os mesmos padrões usados pelos comandos lint e format.

Para consumir a API, você precisará de uma chave de acesso.

Acesse a [documentação Swagger ](https://boasorte.teddybackoffice.com.br/docs#/) para entender como funciona a API.

Crie um arquivo .env na raiz do projeto com a seguinte variável:

`VITE_API_BASE_URL=https://seu-endereco-da-api.com`

| Comando          | Ação                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | Instala as dependências                                         |
| `pnpm run dev`       | Inicia o servidor de desenvolvimento local|
| `pnpm run generate`       | Para gerar automaticamente componentes com templates pré-definidos|
| `pnpm run format`       | Formata todo o código do projeto conforme as regras definidas no Biome e no .editorconfig|
| `pnpm run lint`       | Analisa o código em busca de erros e boas práticas utilizando o Biome|
| `pnpm run build`       | Compila o código TypeScript e gera a build de produção otimizada do projeto|

## Visualizar o Projeto

Você pode visualizar o projeto em produção no seguinte link:

[Visualizar Projeto](https://teddy-open-finance-frontend-challen.vercel.app/)