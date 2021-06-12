import Document, { Html, Head, Main, NextScript} from 'next/document'; //quatro tags que precisamos, é o que tem na documentação do next


export default class MyDocument extends Document { //documentação do next pede dessa forma
  render() { // metodo render retorna o html que queremor retorner
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
          
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}