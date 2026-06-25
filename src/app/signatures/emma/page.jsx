export default function Emma() {
  return (
    <main className="subgrid signature">
      <section className="signature">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <html lang="en">
                <head>
                  <title>Emma Wismer email signature</title>
                </head>
                <body>
                  <table
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                    font-family: Helvetica Neue, system-ui, sans-serif;
                    font-size: 16px;
                    line-height: 1.08;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0em;
                  "
                  >
                    <tr>
                      <td>
                        <p style="font-size: 16px; margin: 0; padding-top: 16px; color: #000">
                          Emma Wismer
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style="
                          padding-bottom: 12px;
                          margin: 0;
                          font-size: 16px;
                          color: #000;
                        "
                        >
                        Founder & Principal
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="font-size: 16px; margin: 0; padding-bottom: 12px; color: #000; text-decoration: none !important;">
                          <a
                            href="tel:+15144029382"
                            style="
                            margin: 0;
                            font-size: 16px;
                            color: #000;
                          "
                          >
                          +1 514-402-9382
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="https://colophon.online">
                          <img
                            src="https://colophon.online/images/png/colophon_logotype.png"
                            alt="colophon logo"
                            style="width: 150px; height: auto; object-fit: contain;"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                </body>
              </html>
            `,
          }}
        />
      </section>
    </main>
  );
}
