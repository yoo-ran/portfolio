import { Helmet } from 'react-helmet-async';

  function SEO({title, description, name, type, url, keywords}) {
    return (
      <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content={name}/>
        <meta name='description' content={description} />
        <meta name="keywords" content={keywords}/>
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        { /* End Facebook tags */ }
        { /* Twitter tags */ }
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        { /* End Twitter tags */ }
      </Helmet>
    )
}

export default SEO;
