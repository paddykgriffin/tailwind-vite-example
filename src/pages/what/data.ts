interface WhatWeDo {
    title: string;
    content: string[];
    image: string;
    alignment: boolean,
    slug: string;
}



export const WhatWeDoData: WhatWeDo[] = [
    {
        title: "Web Design & Development",
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.'
        ],
        image: "img_design_development.jpg",
        alignment: true,
        slug: "web-design"
    },
    {
        title: "eCommerce Platforms",
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.'
        ],
        image: "img_ecommerce.jpg",
        alignment: false,
        slug: 'ecommerce'
    },
    {
        title: "Content Mangement Systems",
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.'
        ],
        image: "img_content_management_systems.jpg",
        alignment: true,
        slug: 'cms'
    },
    {
        title: "Search Engine Optimization",
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere finibus nulla eget lacinia. Nam pulvinar eu massa nec dignissim. Aenean neque odio, lobortis ac cursus non, sollicitudin eget sem. In eu lacinia lorem. Interdum.'
        ],
        image: "img_marketing.jpg",
        alignment: false,
        slug: 'seo'
    }
];