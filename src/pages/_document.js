import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                    key="robots"
                />

                <meta name="application-name" content="Defensa Madridista" />

                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Defensa Madridista" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />

                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-tap-highlight" content="no" />

                <meta name="theme-color" content="#000000" />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=24&height=24"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=48&height=48"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=144&height=144"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=288&height=288"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=768&height=768"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="any"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=250&height=250"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=228&height=228"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=270&height=270"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=250&height=250"
                />

                <link
                    rel="mask-icon"
                    href="https://assets.defensamadridista.com/defensa-madridista/favicon.png?width=250&height=250"
                    color="#5bbad5"
                />

                <link rel="manifest" href="/manifest.json" />

                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
