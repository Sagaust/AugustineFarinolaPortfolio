// const blogsContent = [  

//   { 
//      "id": 1,    "image": "https://example.com/images/blog1.jpg",    "date": "2022-05-01",    "title": "Introduction to React.js",    "abstract": "A brief overview of React.js and its main features.",    "publisher": "John Doe",    "content": "In this blog post, we'll explore the basics of React.js...",    "links": [      {        "title": "Read more",        "url": "https://example.com/blog/introduction-to-react-js"      }    ]
//   },
//   {
//     "id": 2,
//     "image": "https://example.com/images/blog2.jpg",
//     "date": "2022-05-15",
//     "title": "Building a React.js app from scratch",
//     "abstract": "Step-by-step guide to building a React.js app.",
//     "publisher": "Jane Smith",
//     "content": "In this blog post, we'll walk through the process of building...",
//     "links": [
//       {
//         "title": "Read more",
//         "url": "https://example.com/blog/building-a-react-js-app"
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "image": "https://example.com/images/blog3.jpg",
//     "date": "2022-06-01",
//     "title": "Advanced React.js concepts",
//     "abstract": "In-depth coverage of advanced React.js topics.",
//     "publisher": "Bob Johnson",
//     "content": "In this blog post, we'll dive deeper into advanced concepts like...",
//     "links": [
//       {
//         "title": "Read more",
//         "url": "https://example.com/blog/advanced-react-js-concepts"
//       }
//     ]
//   }
// ]

// export default blogsContent;

const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },     {
        name: 'mongodb',
        title: 'Learn MongoDB',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },  
];

export default articles;