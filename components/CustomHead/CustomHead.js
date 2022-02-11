import Head from 'next/head'

const CustomHead = props => {
    
    return (
        <Head>
            <title>{props.title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&amp;display=swap" rel="stylesheet"/>
            <link rel="preload" href="../static/styles/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="../static/styles/font-awesome-4.7.0/fonts/fontawesome-webfont.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            
        </Head>
    )
}

export default CustomHead

