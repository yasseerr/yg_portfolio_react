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

let certification = [
    {
        name: "Cloud Architecture with Google Cloud",
        image: "gcp.png",
        link: "oursera.org/account/accomplishments/professional-cert/EUYHVXQRUU5Q"
    },
    {
        name: "Architecting with Google Kubernetes Engine",
        image: "gke.png",
        link: "https://www.coursera.org/account/accomplishments/specialization/6UGXZFWU8V99"
    }
]

const education = [
    {
        name: "CS Degree (Master) in Computer Systems Engineering",
        image: "01-esi-sba-master.jpg",
        data: "2015-2020"
    }
]

const projects = {
    VisualBlueprint:{
        name: "Visual Blueprint",
        link: "https://github.com/yasseerr/Visual-Blueprint",
        folder: "VisualBlueprint",
        images: ["01_colored.png","02_handeling_threads.png","03_NodeSelection.png","04_cls_graph1.png","05_Branches Management.png"],
        videos: ["demo1.mp4","demo2.mp4"],
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
    },
    QoSOverSDN: {
        name: "QoS Over SDN",
        link: "https://github.com/yasseerr/QosOverSDN",
        folder: "QosOverSdn",
        images: ["01-AddingClasses.png","02-Classification.png","03-topology.png","05-service-provisioning.png"],
        videos: ["QosOverSdn-demo1.mp4"],
        description: (
            <div>
                A Multidisciplinary academic project for the goal of making the application of QoS polices to the network easier
                by studing Software Defined Network technologies.
                <ul>
                    <li>	Developed as part of team of 6 a software to automate the Quality of Service or QoS policies deployment over Software Defined Network using PyQt5 and QML.</li>
                    <li>	Linked Qt python Models to QML views using role names which allowed for performant code and easy to integrate UI.</li>
                    <li>	Developed Custom QML nodes when needed using scene graph.</li>
                    <li>	Rendered Jinja templates into commands from values stored in YAML files.</li>
                    <li>	Executed Ansible playbooks to automate the network infrastructure.</li>
                    <li>	Displayed the network topology and it links using Qt Graphics.</li>

                </ul>
            </div>
        )
    },
    AlteredDomination: {
        name: "Altered Domination",
        link: "https://github.com/yasseerr/AlteredDomination",
        folder: "AlteredDomination",
        images: ["01-load.png","02-beforeBattle.png","04-recruting.png","05-tutorial.png","06-multiplayer.png"],
        videos: ["03-game_.mp4"],
        description: (
            <div>
                A Personal Strategy game.
                <ul>
                    <li>More than 180 AI on the map with real GDP resources (2018)</li>
                    <li>A Chess like map (auto resize depending on the number of units present)</li>
                    <li>2 AI algorithms for managing Map resources and expansion and for playing Chess-like battles</li>
                    <li>Developed using C++ and Qt</li>
                    <li> Developed a localhost multiplayer</li>
                    <li> Created binary matchmaking server with TCP sockets (custom protocole)</li>
                </ul>
            </div>
        )
    },
    OpensimQt: {
        name: "OpensimQt",
        link: "https://github.com/VisSimKoblenz/opensimQt",
        folder: "OpensimQt",
        images: ["02-coordinates.png","03-inverse-kinematics.png","04-scale-model.png"],
        videos: ["01-demo.mp4"],
        description: (
            <div>
                Helped start the remake of the OpenSim Musculoskeletal UI from Java/Swing to C++/Qt-VTK
                <ul>
                    <li>Designed modern and responsive UIs for OpenSim Musculoskeletal simulation system using Qt Widgets and C++ instead of Java Swing interface.</li>
                    <li>Properly handled software build across Windows,Linux and Mac platforms using CMake.</li>
                    <li>Packaged the program resources to an installer binary using Qt Installer Framework.</li>
                    <li>Provided proper code documentation using Doxygen.</li>
                    <li>Written clean modular code while tracking it using Git source control system.</li>
                    <li>Worked responsively with team members to solve Issues on the Github project while managing commits on the repository.</li>
                    <li>Explored the vast OpenSim code base which is built on top of SimTK and going deep in both projects source code when lacking documentation in order to link it to the UI.</li>
                    <li>Integrated three 3D solutions inside the Qt software, tree.js using Qt Webview, OpenGL before going with the VTK solution using QVtkOpenGLNativeWidget.</li>
                    <li>Smoothly animated 3D objects and shapes using the Vtk pipeline with performant C++ code to visualize objects simulation and respond to OpenSim visualizer interface calls.</li>
                    <li>Enabled the addition of plugins to the software which provided extensibility to the software by following the approach for Qt Plugins.</li>
                </ul>
            </div>
        )
    },
    BybTelemetry: {
        name: "Byb Telemetry",
        link: "https://www.bybtelemetry.com",
        linkText: "Check Product",
        folder: "BybTelemetry",
        images: ["02-suspension.png","03-autotunning.png","04-leverage.png"],
        videos: ["01-demo1.mp4"],
        description: (
            <div>
                An application for a startup that display biking telemetry and comparaison between runs.
                <ul>
                    <li>Created custom QML Chart components other than the default one to support a 7000 entry/second data flow</li>
                    <li>Linked the data displayed with the GPS positioning </li>
                    <li>Helped perform fast computation on data using C++</li>
                    <li>Studied the available maps providers and their integration</li>
                </ul>
            </div>
        )
    },
    RoboComposer: {
        name: "RoboComposer",
        link: "https://robocomposer.com/build/apps/robocomposer/",
        linkText: "Test-Web-Version",
        folder: "RoboComposer",
        images: ["02-demo2.png","03-demo3.png"],
        videos: ["01-demo1.mp4"],
        description: (
            <div>
                A Software for forming composition requests and display the resulted sound from the backend.
                <ul>
                    <li>Layed the foundation for the software </li>
                    <li>Provided the same UX in desktop as in the React webapp (with blueprint.js) </li>
                    <li>Robost and secure connection to the backend</li>
                    <li>support for large screens with different DPI</li>
                </ul>
            </div>
        )

    },
    ygPortfolioReact: {
        name: "yg-portfolio-react",
        link: "https://github.com/yasseerr/yg_portfolio_react",
        folder: "yg-portfolio-react",
        images: [],
        videos: [],
        description: (
            <div>
                A Scalable portfolio from a single config file.
                <ul>
                    <li>State managed using redux</li>
                    <li>Can be custumized simply by changing one config file</li>
                    <li>THE CURRENT WEBSITE</li>
                </ul>
            </div>
        )
    },
    IotSecurityCamMotion: {
        name: "IoT-Security-Cam-motion",
        link: "https://github.com/yasseerr/IoT-Security-Cam-motion",
        folder: "IotSecurityCamMotion",
        images: ["01.png"],
        videos: [],
        description: (
            <div>
                A website that fetch newly taken images whenever a infra-red sensor detect movement.
                <ul>
                    <li>Host the django backend in a raspberry PI</li>
                    <li>Setup Ardiono Wemos to communicate with Arducam(SPI) and notify the server</li>
                    <li>Update the UI whenever an new image is present</li>
                </ul>
            </div>
        )
    } 
}

const skills = [
    {
        name: "Qt",
        level: 5,
        projects: [
            { name: "VisualBlueprint" },
            { name: "OpensimQt" },
            { name: "QoSOverSDN" },
            { name: "AlteredDomination" },
            { name: "BybTelemetry" },
            { name: "RoboComposer" }
        ]
    },
    {
        name: "C++",
        level: 5,
        projects: [
            { name: "VisualBlueprint" },
            { name: "OpensimQt" },
            { name: "Arduino" },
            { name: "AlteredDomination" },
            { name: "BybTelemetry" },
            { name: "RoboComposer" }
        ]
    },
    {
        name: "Python",
        level: 5,
        decription: "Use it for building ML models and backend services with knowledge of the asyncio,multithreading corotines...",
        projects: [
            { name: "QoSOverSDN" },
            { name: "VisualBlueprint"},
            { name: "IotSecurityCamMotion" }
        ]
    },
    {
        name: "Java",
        level: 4,
        description: "Developed small android apps in Android studio and linked databases to services using the springboot framework.",
        projects: [
            { name: "OpensimQt" },
        ]
    },
    {
        name: "Unity C#",
        description: "Developed games and assests for the unity store for both mobile(gesture based) and PC + Understanding of the DOTS approach",
        level: 4,
        projects: []
    },
    {
        name: "React",
        level: 4,
        description: "Knowledge of the state management using Redux and Providers and developed functions for fetching data from services asynchronously",
        projects: [
            { name: "RoboComposer" },
            { name: "ygPortfolioReact" }
        ]
    },
    {
        name: "UML",
        level: 4,
        description: "Designed projects from specification document to deployment using the UML diagrams and tools(Entreprize Architect-Visual Paradigm)",
        projects: [
            {name: "VisualBlueprint"},
            {name: "AlteredDomination"}
        ]
    },
    {
        name: "Docker-Kubernetes",
        description: "Shiped services to the cloud in docker containers configured using docker-compose or in a Kubernetes cluster",
        level: 4,
        projects: []
    },
    {
        name: "GCP",
        description: "Aquired a professional certificate for working with GCP services and GKE offered by Google throught Coursera",
        level: 4,
        projects: []
    },
    {
        name: "Django-Flask",
        description: "Built backend services using flask and django-rest along with templating and database connections",
        level: 3,
        projects: [
            { name: "IotSecurityCamMotion" }
        ]
    },
    {
        name: "TensorFlow",
        description: "Developed DCNN 1D-2D networks and a DCNN for protein secondery state predictions from amino-asid sequence + Knowledge of optimization algorithms and investgating graphs using the dashboard",
        level: 3,
        projects: []
    },
    {
        name: "Scrum-Jira",
        description: "Created stories and organized work from backlog into sprints and epics + task estimation",
        level: 3,
        projects: []
    },
    {
        name: "Flutter",
        level: 3,
        description: "Developed custumized widgets (with material design) + state management using providers-redux and updated about the new dart packages and widgets",
        projects: []
    },
    {
        name: "Vtk",
        level: 3,
        projects: [
            { name: "OpensimQt"}
        ]
    },
    {
        name: "Ilustrature-Photoshop",
        level: 3,
        description: "Designed Logos and Game material using vector operations in Illustrator and raster in Photoshop",
        projects: [
            { name: "AlteredDomination"},
            { name: "ygPortfolioReact"},
        ]
    },
    {
        name: "Blender",
        description: "Designeed ,textured and animated 3D models for personal games",
        level: 3,
        projects: []
    },
    {
        name: "QGis",
        description: "Performed operation on geographic data on the maps both raster-vector",
        level: 2,
        projects: []
    }
];

const planets = [
    {
        abriviation: "DP",
        description: "Understanding of the  22 design patterns"
    },
    {
        abriviation: "AG",
        description: "Experience working with Agile methods and tools"
    },
    {
        abriviation: "LR",
        description: "Quick learner, control new technolies when required"
    }
]

const Portfolio = {
    name: "Yasser",
    last_name: "Grimes",
    about_me: aboutme(),
    endorsement: endorssment,
    certification,
    projects,
    education,
    skills,
    planets
}

export default Portfolio;