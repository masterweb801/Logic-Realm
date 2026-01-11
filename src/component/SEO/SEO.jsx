import { Helmet } from "react-helmet-async"

const SEO = ({
    name = "",
    description = "Custom software development, modern web & mobile solution.",
    route = "",
    type = "website",
    image = "/seo/home_page.png"
}) => {
    const title = name && name !== "Logic Realm" ? `${name} | Logic Realm` : "Logic Realm";
    const url = `https://logicrealm.rf.gd${route}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {route && <link rel="canonical" href={url} />}

            <meta property='og:type' content={type} />
            {route && <meta property='og:url' content={url} />}
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property="og:image" content={image} />

            <meta name='twitter:card' content='summary_large_image' />
            {route && <meta name='twitter:url' content={url} />}
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}

export default SEO