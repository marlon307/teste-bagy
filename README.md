[ ! ] Este é um projeto Next.js inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Você pode ver esse projeto em funcionamento de duas formas.

Através deste link [https://teste-bagy.vercel.app/](https://teste-bagy.vercel.app/) .

Ou caso você deseje rodar esse projeto em sua máquina local, execute as instruções a seguir.

<br>

Crie um arquivo <code>.env.development.local</code> na pasta raiz do projeto.
```bash
.env.development.local
```
Apos ter criado o arquivo, copie o texto baixo e cole no arquivo criado.
```bash
URL_API=http://localhost:3000/api/graphql
```

Instale as dependências do projeto.

```bash
npm install
# ou
yarn
```

Execute o servidor de desenvolvimento.

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Construção do projeto

Escolhi desenvolver esse projeto com o Next.Js por uma das vantagens em que eu poderia criar uma api com GraphQl junto ao meu front-end, dessa formar consegui deixa esse projeto hospedado na plataforma da [Vercel](https://vercel.com/).

O que foi mais desafiador na construção do projeto sem menor sombra de dúvida foi fazer o gráfico :cold_sweat:, 
desde a escolha da biblioteca e a estilização para deixar a aparência mais próximo que foi apresentado no figma.
