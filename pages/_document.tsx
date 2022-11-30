import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="og:url" content="https://digifizzy.xyz/" />
          <meta name="og:title" content="DIGIFIZZY" />
          <meta name="og:description" content="Web3 Metaverse Zine" />
          <meta name="og:image" content="https://digifizzy.xyz/card.png/" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:url" content="https://digifizzy.xyz/" />
          <meta name="og:image" content="https://digifizzy.xyz/card.png/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@igitalax_" />
          <meta name="twitter:creator" content="@digitalax_" />
          <meta
            name="twitter:image"
            content="https://digifizzy.xyz/card.png/"
          />
          <meta name="twitter:url" content="https://digifizzy.xyz/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://digifizzy.xyz/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Letter Magic";
                    font-weight: 400;
                    src: url("./fonts/Letter Magic.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Bold.ttf");
                }

                @font-face {
                  font-family: "Futurist";
                  font-weight: 400;
                  src: url("./fonts/Futurist Fixed-width Regular.ttf");
                }

                @font-face {
                  font-family: "Internal Rainbows";
                  font-weight: 400;
                  src: url("./fonts/Internal Rainbows.otf");
                }

                @font-face {
                  font-family: "Fira Regular";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Regular.ttf");
                }

                @font-face {
                  font-family: "America Mono Medium";
                  font-weight: 400;
                  src: url("./fonts/GT-America-Mono-Medium-Trial.otf");
                }
                
                @font-face {
                  font-family: "America Mono Regular";
                  font-weight: 400;
                  src: url("./fonts/GT-America-Mono-Regular-Trial.otf");
                }
                
                @font-face {
                  font-family: "America Mono Extended";
                  font-weight: 400;
                  src: url("./fonts/GT-America-Extended-Thin-Trial.otf");
                }

                @font-face {
                  font-family: "Atmosphere";
                  font-weight: 400;
                  src: url("./fonts/Atmosphere-Regular.ttf");
                }

                @font-face {
                  font-family: "Dosis Regular";
                  font-weight: 400;
                  src: url("/fonts/Dosis Regular.ttf");
                }
            `,
            }}
          ></style>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
