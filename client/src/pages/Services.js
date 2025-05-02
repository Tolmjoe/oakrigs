import React from 'react';
import "../css/services.css";
import st1 from "../image/st1.jpg";
import st2 from "../image/st2.jpg";
import st3 from "../image/st3.jpg";
import sd1 from "../image/sd1.jpg";
import sd2 from "../image/sd2.jpg";
import sd3 from "../image/sd3.jpg";
import da1 from "../image/da1.jpg";
import da2 from "../image/da2.jpg";
import da3 from "../image/da3.jpg";
import pro1 from "../image/pro1.jpg";
import pro2 from "../image/pro2.jpg";
import pro3 from "../image/pro3.jpg";

const content = {
    training: {
        title: 'Software Training',
        description: 'Empower yourself and your team with expert-led courses and real-world tech skills.',
        features: [
            {
                title: 'Instructor-led courses',
                description: 'Get quality live sessions with' +
                    'our experts to learn about Software Tools, Networking Tools, Security Tools, and so much more.',
                image: st1,
            },
            {
                title: 'Hands-on experience',
                description: 'Practice with real tools and code in our guided labs.',
                image: st2,
            },
            {
                title: 'Certifications',
                description: 'We offer you certifications at a very cheap price' +
                    ' to validate your skills and stand out from the rest.',
                image: st3,
            },
        ],
    },
    projects: {
        title: 'Projects',
        description: 'Get all your projects done by hiring our team of professionals.',
        features: [
            {
                title: 'On-site and remote projects',
                description: 'We will offer the services of ' +
                    'our experts for your projects needs.',
                image: pro1,
            },
            {
                title: 'Team collaborations',
                description: 'Team collaboration has never been this easy. Our team is ' +
                    'confident in her wealth of experience and skills.',
                image: pro2,
            },
            {
                title: 'Projects consultations',
                description: 'We offer projects consultations for as cheap as a dollar',
                image: pro3,
            },
        ],
    },
    developmentSoft: {
        title: 'Software Development',
        description: 'Build scalable and lightweight software tailored to your personal or business needs.',
        features: [
            {
                title: 'Scalable Front-end applications',
                description: 'This course will take you from zero to industry-ready' +
                    'in all things Front-end - You will learn basic HTML/CSS, Tailwind CSS,' +
                    ' Javascript, React, and so much more.',
                image: sd1,
            },
            {
                title: 'Scalable Back-end applications',
                description: 'From Vanilla Javascript,Mongodb,PHP, to C++. You will learn everything you need' +
                    'to become a good backend developer',
                image: sd2,
            },
            {
                title: 'Full-stack applications',
                description: 'This course will teach you both the Front-end and Back-end ' +
                    'ends of making great and scalable applications',
                image: sd3,
            },
        ],
    },
    developmentMach: {
        title: 'Machine Learning',
        description: 'Discover the best comprehensive machine learning course syllabus from our team ' +
            'that will assist you in understanding the basic fundamentals of ' +
            'machine learning to advanced algorithms that will help in creating in AI models.',
        features: [
            {
                title: 'AI, ML, and Deep Learning',
                description: 'The use of Python and R in Artificial Learning,' +
                    'Machine Learning, Deep Learning, and the interconnection  between them.',
                image: sd1,
            },
            {
                title: 'Effective workflow',
                description: 'Our team instructs efficiently using algorithmic methodologies and ' +
                    'visual mnemonics.',
                image: sd2,
            },
            {
                title: 'Hand-on Projects',
                description: 'We will take you through many hands-on projects that will' +
                    'ease the understanding and application of taught concepts',
                image: sd3,
            },
        ],
    },
    analysis: {
        title: 'Data Analysis',
        description: 'Transform data into insights with programming languages (like Python and R) and' +
            'sleek dashboards.',
        features: [
            {
                title: 'Data visualization',
                description: 'This course will teach you how to visualize' +
                    ' complex data beautifully.',
                image: da1,
            },
            {
                title: 'Predictive modeling',
                description: 'Here, you will learn how to Use AI to predict ' +
                    'and/or forecast trends and behavior.',
                image: da2,
            },
            {
                title: 'Business intelligence',
                description: 'You will learn how to better and optimal decisions' +
                    ' with advanced analytical tools.',
                image: da3,
            },
        ],
    },
};

function ServicePage({ type, features, image = '' }) {
    const { title, description, features: defaultFeatures } = content[type] || {};
    const featureList = features || defaultFeatures;


    const scrollTo = (index) => {
        const elem = document.getElementById(`feature-${index}`);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!title) return <p>Invalid service type.</p>;

    return (
        <div className="service-page">
            <div className="service-back" style={{ backgroundImage: `url(${image})` }}>
                <h1 className="service-title">{title}</h1>
                <p className="service-description">{description}</p>
            </div>

            <div className="feature-nav">
                {featureList.map((_, index) => (
                    <button
                        key={index}
                        className="feature-nav-button"
                        onClick={() => scrollTo(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {featureList.map((feature, index) => (
                <div key={index} id={`feature-${index}`} className="feature-slide">
                    <h2 className="feature-title">{feature.title}</h2>
                    <img src={feature.image} alt={feature.title} className="feature-image" />
                    <p className="feature-description">{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ServicePage;
