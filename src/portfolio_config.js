import React from 'react';

let aboutme = () => { return(
    <div>
    <p> Hello there ! </p> <p>Thanks for visiting</p>
    <p> I'm Yasser Grimes a Computer Science Engineer (MSc), most specifically Computer Systems Engineering, 
    with experience developing fast and rebust applications -fullstack-
    for both academical , freelancing and personal projects. The technology stack depends on the targeted performance and 
    platform but if you're looking for someone to help you finish one the following task , feel free to contact me using the links in the left half-cercle menu </p>
    <ul>
        <li> Create fast Multi-platform applications (C++/Qt) </li>
        <li> Setup an architecture for your services in the cloud(GCP/AWS), on-premises or hybrid</li>
        <li> Automate your network and migrate-to/create-software-for an SDN(Software Definedd Network) or IBN (Intent-based Network)</li>
        <li> Fullstack web development with React FE, and Django/Flask/Express.js BE</li>
        <li> Design DeepLearning/ML models and implement it using TensorFlow/Keras/Skitlearn</li>
        <li> Develop mobile apps using Qt/React-native or Flutter</li>
        <li> Design and develop Games, 2D using Unity/Felgo and 3D using UE4</li>
    </ul>
    </div>)
};


let endorssment = [
    {
        name: "Upwork",
        image: "01.png",
        link: "https://www.upwork.com/freelancers/~01932ce8601f9efcf0"
    },
    {
        name: "Upwork",
        image: "02.png",
        link: "https://www.upwork.com/freelancers/~01932ce8601f9efcf0"
    },
    {
        name: "Upwork",
        image: "03.png",
        link: "https://www.upwork.com/freelancers/~01932ce8601f9efcf0"
    }
]

const projects = {
    VisualBlueprint:{
        name: "VisulaBlueprint",
        link: "https://github.com/yasseerr/Visual-Blueprint",
        images: ["VisualBlueprint/01_colored.png","VisualBlueprint/02_handeling_threads.png","VisualBlueprint/03_NodeSelection.png","VisualBlueprint/04_cls_graph1.png","VisualBlueprint/05_Branches Management.png"],
        description: (
            <div>
                Came up as an idea for the graduation project. It handles Asynchronous, Multithread, Multiprocess and Remote tasks using a visual-programming interface implemented using Qt Graphics.
                <ul>
                    <li>Build a solution that automatically detect and protect shared resources using Mutex and Semaphores.</li>
                    <li>Provided a robust design for the software starting from specifications using UML 2 diagrams throughout the VisualParadigm tool. It facilitated development, enabled the splitting of the project into tasks, provided a good reference and prevented the project from shifting from it goal.</li>
                    <li>Isolated the project logic from specific programming language using Qt Variant which made the solution compilable to any language by implementing an interface and generating plugin libraries.</li>
                    <li>Developed a communication between the software in C++ and the targeted language using an unbuffered standard input-output/error interface using QProcess.</li>
                    <li>Explored and handled various multithreading solutions like OpenMP library in C.</li>
                    <li>Explored and Integrated remote solution like gRCP, Qt Remote Objects depending on the targeted language.</li>
                    <li>Explored and Integrated asynchronous solutions like Promises in JavaScript, Coroutines / asyncio in python.</li>
                    <li>Rendered Django-like templates in Qt to targeted-languages code using the Grantlee engine and QVariant.</li>
                </ul>
            </div>
        )
    }//,
    // {
    //     name: "OpenSimQt",
    //     link: "https://github.com/VisSimKoblenz/opensimQt",
    //     images: [
    //         {
    //             src: "OpenSimQt/01.png",
    //             description: "Another Image"
    //         }
    //     ]
    // }
}

const Portfolio = {
    name: "Yasser",
    last_name: "Grimes",
    about_me: aboutme(),
    endorsement: endorssment,
    projects
}

export default Portfolio;