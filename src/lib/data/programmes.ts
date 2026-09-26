// src/lib/data/programmes.ts
import type { Programme } from '$lib/types';

export const programmes: Programme[] = [
    {
        id: '1',
        slug: 'bsc-computer-science',
        title: 'BSc Computer Science',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'A comprehensive program covering software engineering, algorithms, artificial intelligence, and systems architecture.',
        overview: 'Our Bachelor of Science in Computer Science equips students with foundational and advanced programming skills, analytical thinking, and hands-on experience through project-based learning and industry internships.',
        requirements: [
            'High School Diploma with strong grades in Mathematics and Physics',
            'Minimum GPA of 3.0 or equivalent',
            'English language proficiency'
        ],
        careerPaths: ['Software Engineer', 'Data Scientist', 'Systems Analyst', 'Full-Stack Developer']
    },
    {
        id: '2',
        slug: 'bba-business-administration',
        title: 'Bachelor of Business Administration',
        faculty: 'School of Business',
        degree: 'Bachelor of Business Administration',
        duration: '3 Years',
        description: 'Develop strategic leadership, global management, marketing, and financial analytical skills for the modern corporate world.',
        overview: 'The BBA program blends theoretical management principles with practical case studies, preparing students for dynamic leadership roles in global enterprises and entrepreneurial ventures.',
        requirements: [
            'High School Diploma with a background in Mathematics or Economics',
            'Minimum GPA of 2.8 or equivalent',
            'Personal statement and interview'
        ],
        careerPaths: ['Business Consultant', 'Financial Analyst', 'Marketing Manager', 'Operations Director']
    },
    {
        id: '3',
        slug: 'bsc-mechanical-engineering',
        title: 'BSc Mechanical Engineering',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'Master the principles of mechanics, thermodynamics, robotics, and sustainable manufacturing design.',
        overview: 'The Mechanical Engineering program combines rigorous theoretical coursework with hands-on laboratory testing and design challenges, preparing graduates to build the infrastructure and smart devices of tomorrow.',
        requirements: [
            'High School Diploma with advanced Mathematics and Physics',
            'Minimum GPA of 3.2 or equivalent',
            'Portfolio or engineering project statement'
        ],
        careerPaths: ['Mechanical Engineer', 'Robotics Specialist', 'Aerospace Designer', 'Project Engineer']
    },
    {
        id: '4',
        slug: 'ba-psychology',
        title: 'Bachelor of Arts in Psychology',
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Arts',
        duration: '3 Years',
        description: 'Explore cognitive development, behavioral science, research methodologies, and clinical psychology foundations.',
        overview: 'Our Psychology curriculum offers deep insights into human behavior and mental processes. Students participate in experimental design, behavioral observation, and community-based mental health initiatives.',
        requirements: [
            'High School Diploma with strong written and verbal communication skills',
            'Minimum GPA of 2.7 or equivalent',
            'Two letters of recommendation'
        ],
        careerPaths: ['Counselor', 'HR Specialist', 'Behavioral Analyst', 'Research Assistant']
    },
    {
        id: '5',
        slug: 'bsc-data-science',
        title: 'BSc Data Science & Analytics',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'Combine statistical modeling, machine learning, and big data visualization to drive data-backed decision making.',
        overview: 'Designed for the data-driven era, this program teaches students how to extract actionable intelligence from massive datasets using Python, R, SQL, and advanced cloud computing infrastructure.',
        requirements: [
            'High School Diploma with high proficiency in Mathematics',
            'Minimum GPA of 3.0 or equivalent',
            'Basic coding background preferred'
        ],
        careerPaths: ['Data Analyst', 'Machine Learning Engineer', 'Business Intelligence Developer', 'Statistician']
    },
    {
        id: '6',
        slug: 'ba-journalism-media-studies',
        title: 'BA in Journalism & Mass Communication',
        faculty: 'Faculty of Media & Communication',
        degree: 'Bachelor of Arts',
        duration: '3 Years',
        description: 'Master broadcast production, digital journalism, multimedia storytelling, and public relations strategies.',
        overview: 'Aligned with Multimedia University’s core strengths, this program trains students in state-of-the-art TV/radio studios and digital newsrooms, building mastery in modern media ethics and content creation.',
        requirements: [
            'High School Diploma with strong English language scores',
            'Minimum GPA of 2.7 or equivalent',
            'Portfolio of creative or journalistic work'
        ],
        careerPaths: ['Broadcast Journalist', 'Content Strategist', 'Public Relations Specialist', 'Digital Producer']
    },
    {
        id: '7',
        slug: 'bsc-cybersecurity-forensics',
        title: 'BSc Cybersecurity & Digital Forensics',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'Learn ethical hacking, network defense, cryptography, and digital evidence recovery to secure enterprise infrastructure.',
        overview: 'With cyber threats on the rise, this curriculum dives deep into vulnerability assessment, incident response, and legal frameworks for digital evidence investigation in high-tech labs.',
        requirements: [
            'High School Diploma with strong analytical and computing foundations',
            'Minimum GPA of 3.0 or equivalent',
            'Background check compliance for security clearance labs'
        ],
        careerPaths: ['Cybersecurity Analyst', 'Penetration Tester', 'Digital Forensics Investigator', 'Security Architect']
    },
    {
        id: '8',
        slug: 'bachelor-of-architecture',
        title: 'Bachelor of Architectural Studies',
        faculty: 'School of Architecture & Spatial Planning',
        degree: 'Bachelor of Architecture',
        duration: '5 Years',
        description: 'Explore spatial design, sustainable urban planning, structural mechanics, and computer-aided architectural rendering.',
        overview: 'This intensive studio-based program fosters creative design thinking and technical mastery, preparing students to conceptualize and construct eco-friendly, modern urban environments.',
        requirements: [
            'High School Diploma with passing grades in Physics and Art/Mathematics',
            'Minimum GPA of 3.1 or equivalent',
            'Freehand drawing or design portfolio review'
        ],
        careerPaths: ['Architectural Designer', 'Urban Planner', 'Interior Architect', 'Project Manager']
    },
    {
        id: '9',
        slug: 'bsc-nursing',
        title: 'Bachelor of Science in Nursing',
        faculty: 'Faculty of Health Sciences',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'Gain clinical expertise, patient care competencies, medical ethics, and evidence-based healthcare practices.',
        overview: 'Combining rigorous medical theory with extensive supervised clinical rotations in partner hospitals, our nursing program prepares compassionate healthcare professionals ready for global clinical practice.',
        requirements: [
            'High School Diploma with high marks in Biology and Chemistry',
            'Minimum GPA of 3.2 or equivalent',
            'Medical fitness certificate and immunization clearance'
        ],
        careerPaths: ['Registered Nurse', 'Clinical Nurse Specialist', 'Healthcare Administrator', 'Public Health Educator']
    },
    {
        id: '10',
        slug: 'bfin-financial-engineering',
        title: 'Bachelor of Financial Engineering',
        faculty: 'School of Business',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description: 'Integrate financial theory, mathematical modeling, algorithmic trading, and risk management analytics.',
        overview: 'A quantitative bridge between finance and computer science, teaching students how to price derivatives, build automated trading algorithms, and manage institutional financial risk.',
        requirements: [
            'High School Diploma with advanced Mathematics coursework',
            'Minimum GPA of 3.2 or equivalent',
            'Strong aptitude for quantitative problem solving'
        ],
        careerPaths: ['Quantitative Analyst', 'Risk Manager', 'Financial Trader', 'Investment Portfolio Manager']
    }
];