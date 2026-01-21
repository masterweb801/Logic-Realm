import { Helmet } from 'react-helmet-async';

const SEO = ({
    name = "",
    oname = "",
    description = "Custom software development, modern web & mobile solution.",
    route = "",
    type = "website",
    image = "/seo/home_page.png",
    noindex = false,
}) => {
    const title = name ? name : "Logic Realm";
    const ogTitle = oname ? oname : title;
    const url = `https://logicrealm.rf.gd${route}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {!noindex && <link rel="canonical" href={url} />}

            <meta property='og:type' content={type} />
            {!noindex && <meta property='og:url' content={url} />}
            <meta property='og:title' content={ogTitle} />
            <meta property='og:description' content={description} />
            <meta property="og:image" content={image} />

            <meta name='twitter:card' content='summary_large_image' />
            {!noindex && <meta name='twitter:url' content={url} />}
            <meta name='twitter:title' content={ogTitle} />
            <meta name='twitter:description' content={description} />
            <meta name="twitter:image" content={image} />

            {noindex && <meta name="robots" content="noindex,nofollow" />}
        </Helmet>
    )
}

export default SEO