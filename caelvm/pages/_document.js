import Document, { Html, Head, Main, NextScript } from 'next/document'

const CustomDocument = props => {


    return (
        <Html>
        <Head>
            {/* inserir as  fontes aqui */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}

export default CustomDocument