import Head from 'next/head';

export const PageHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={"true"} />
      {/*eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
};
