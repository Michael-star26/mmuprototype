// src/lib/data/programmes.ts

import type { Programme } from '$lib/types';

export const programmes: Programme[] = [
	{
		id: '1',
		slug: 'bsc-computer-science',
		title: 'BSc Computer Science',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Bachelor of Science',
		duration: '4 Years',
		description:
			'A comprehensive program covering software engineering, algorithms, artificial intelligence, and systems architecture.',
		overview:
			'The Bachelor of Science in Computer Science equips students with foundational and advanced programming skills, analytical thinking, and hands-on experience through project-based learning and industry internships.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'C+ in Mathematics and relevant science subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Software Engineer',
			'Data Scientist',
			'Systems Analyst',
			'Full-Stack Developer'
		]
	},

	{
		id: '2',
		slug: 'bba-business-administration',
		title: 'Bachelor of Business Administration',
		level: "Bachelor's Degree",
		faculty: 'School of Business',
		degree: 'Bachelor of Business Administration',
		duration: '4 Years',
		description:
			'Develop strategic leadership, management, marketing, and financial analysis skills for the modern business environment.',
		overview:
			'The Bachelor of Business Administration combines theoretical management principles with practical case studies, preparing students for leadership roles in organizations, enterprises, and entrepreneurial ventures.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Minimum subject requirements as specified by the university',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Business Consultant',
			'Financial Analyst',
			'Marketing Manager',
			'Operations Manager'
		]
	},

	{
		id: '3',
		slug: 'bsc-mechanical-engineering',
		title: 'BSc Mechanical Engineering',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Bachelor of Science',
		duration: '5 Years',
		description:
			'Study mechanics, thermodynamics, robotics, materials, and sustainable engineering design.',
		overview:
			'The Mechanical Engineering program combines rigorous theoretical coursework with laboratory work and engineering design projects, preparing graduates to develop machines, systems, and sustainable technologies.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in Mathematics, Physics, and other relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Mechanical Engineer',
			'Robotics Engineer',
			'Manufacturing Engineer',
			'Project Engineer'
		]
	},

	{
		id: '4',
		slug: 'ba-psychology',
		title: 'Bachelor of Arts in Psychology',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Humanities & Social Sciences',
		degree: 'Bachelor of Arts',
		duration: '4 Years',
		description:
			'Explore human behavior, cognitive development, research methods, and psychological theory.',
		overview:
			'The Psychology program provides students with a broad understanding of human behavior and mental processes through theoretical study, research, behavioral observation, and community-based learning.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Human Resource Specialist',
			'Counselling Professional',
			'Behavioral Researcher',
			'Community Development Officer'
		]
	},

	{
		id: '5',
		slug: 'bsc-data-science',
		title: 'BSc Data Science & Analytics',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Bachelor of Science',
		duration: '4 Years',
		description:
			'Combine statistics, programming, machine learning, and data visualization to support data-driven decision making.',
		overview:
			'This program develops practical skills in statistical analysis, programming, database technologies, machine learning, and data visualization for solving complex real-world problems.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in Mathematics and relevant science or technical subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Data Analyst',
			'Machine Learning Engineer',
			'Business Intelligence Developer',
			'Data Scientist'
		]
	},

	{
		id: '6',
		slug: 'ba-journalism-media-studies',
		title: 'BA in Journalism & Mass Communication',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Media & Communication',
		degree: 'Bachelor of Arts',
		duration: '4 Years',
		description:
			'Develop skills in journalism, broadcasting, digital media, multimedia storytelling, and public relations.',
		overview:
			'The program combines journalism theory with practical training in broadcast production, digital newsrooms, multimedia storytelling, media ethics, and strategic communication.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in English or other relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Broadcast Journalist',
			'Content Strategist',
			'Public Relations Specialist',
			'Digital Producer'
		]
	},

	{
		id: '7',
		slug: 'bsc-cybersecurity-forensics',
		title: 'BSc Cybersecurity & Digital Forensics',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Bachelor of Science',
		duration: '4 Years',
		description:
			'Study cybersecurity, network defense, cryptography, digital forensics, and information security.',
		overview:
			'The program develops practical and theoretical skills in vulnerability assessment, incident response, secure systems, digital evidence analysis, and cybersecurity governance.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in Mathematics and relevant science or technical subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Cybersecurity Analyst',
			'Penetration Tester',
			'Digital Forensics Investigator',
			'Security Engineer'
		]
	},

	{
		id: '8',
		slug: 'bachelor-of-architecture',
		title: 'Bachelor of Architectural Studies',
		level: "Bachelor's Degree",
		faculty: 'School of Architecture & Spatial Planning',
		degree: 'Bachelor of Architecture',
		duration: '5 Years',
		description:
			'Explore architectural design, spatial planning, sustainable development, and computer-aided design.',
		overview:
			'This studio-based program develops creative design thinking alongside technical knowledge in architectural representation, construction, spatial planning, and sustainable design.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in Mathematics, Physics, and other relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Architectural Designer',
			'Urban Planner',
			'Interior Designer',
			'Project Manager'
		]
	},

	{
		id: '9',
		slug: 'bsc-nursing',
		title: 'Bachelor of Science in Nursing',
		level: "Bachelor's Degree",
		faculty: 'Faculty of Health Sciences',
		degree: 'Bachelor of Science',
		duration: '4 Years',
		description:
			'Develop clinical expertise, patient care competencies, medical ethics, and evidence-based healthcare skills.',
		overview:
			'The program combines theoretical medical education with supervised clinical experience, preparing students for professional nursing practice and further specialization.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Required grades in Biology, Chemistry, and other relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Registered Nurse',
			'Clinical Nurse',
			'Healthcare Administrator',
			'Public Health Educator'
		]
	},

	{
		id: '10',
		slug: 'bfin-financial-engineering',
		title: 'Bachelor of Financial Engineering',
		level: "Bachelor's Degree",
		faculty: 'School of Business',
		degree: 'Bachelor of Science',
		duration: '4 Years',
		description:
			'Integrate financial theory, mathematical modeling, quantitative analysis, and risk management.',
		overview:
			'A quantitative program combining finance, mathematics, statistics, and computing to develop skills for financial modeling, risk analysis, investment analysis, and financial technology.',
		requirements: [
			'KCSE mean grade of C+ or equivalent',
			'Strong performance in Mathematics and relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Quantitative Analyst',
			'Risk Analyst',
			'Financial Analyst',
			'Investment Analyst'
		]
	},
    {
		id: '11',
		slug: 'diploma-information-technology',
		title: 'Diploma in Information Technology',
		level: 'Diploma',
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Diploma',
		duration: '2 Years',
		description:
			'Build practical skills in software development, networking, databases, and information systems.',
		overview:
			'This diploma provides practical training in computing fundamentals, programming, database management, networking, and information systems, preparing students for entry-level roles in the technology sector.',
		requirements: [
			'KCSE mean grade of C- or equivalent',
			'Required grade in Mathematics or a relevant technical subject',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'IT Support Technician',
			'Junior Web Developer',
			'Network Support Technician',
			'Database Assistant'
		]
	},

	{
		id: '12',
		slug: 'diploma-business-management',
		title: 'Diploma in Business Management',
		level: 'Diploma',
		faculty: 'School of Business',
		degree: 'Diploma',
		duration: '2 Years',
		description:
			'Develop practical knowledge in business administration, accounting, marketing, and entrepreneurship.',
		overview:
			'The program equips students with practical business skills covering management, accounting, marketing, entrepreneurship, and organizational operations.',
		requirements: [
			'KCSE mean grade of C- or equivalent',
			'Required grades in relevant subjects',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Administrative Assistant',
			'Business Development Assistant',
			'Sales Executive',
			'Entrepreneur'
		]
	},

	{
		id: '13',
		slug: 'certificate-computer-applications',
		title: 'Certificate in Computer Applications',
		level: 'Certificate',
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Certificate',
		duration: '1 Year',
		description:
			'Develop foundational digital literacy, office productivity, and basic computer skills.',
		overview:
			'This entry-level certificate introduces students to computer applications, digital communication, office productivity tools, and essential information technology concepts.',
		requirements: [
			'KCSE mean grade of D+ or equivalent',
			'Basic computer literacy'
		],
		careerPaths: [
			'Computer Applications Assistant',
			'Office Assistant',
			'Data Entry Clerk',
			'ICT Support Assistant'
		]
	},

	{
		id: '14',
		slug: 'pgd-information-technology',
		title: 'Postgraduate Diploma in Information Technology',
		level: 'Postgraduate Diploma',
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Postgraduate Diploma',
		duration: '1 Year',
		description:
			'Advanced professional training in information systems, software development, databases, and IT management.',
		overview:
			'Designed for graduates seeking to strengthen their technical and professional computing skills, this program covers modern information systems, software development, databases, and technology management.',
		requirements: [
			'A recognized Bachelor’s degree',
			'A degree in a relevant discipline may be required',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'IT Consultant',
			'Systems Analyst',
			'Software Developer',
			'IT Project Coordinator'
		]
	},

	{
		id: '15',
		slug: 'msc-data-science',
		title: 'MSc Data Science',
		level: "Master's Degree",
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Master of Science',
		duration: '2 Years',
		description:
			'Advanced study in statistical computing, machine learning, data engineering, and applied analytics.',
		overview:
			'The MSc Data Science program develops advanced capabilities in statistical modeling, machine learning, data engineering, visualization, and research-driven data analysis.',
		requirements: [
			'A relevant Bachelor’s degree from a recognized institution',
			'Demonstrated background in mathematics, statistics, computing, or a related field',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Data Scientist',
			'Machine Learning Engineer',
			'Data Engineer',
			'Research Scientist'
		]
	},

	{
		id: '16',
		slug: 'mba-business-administration',
		title: 'Master of Business Administration',
		level: "Master's Degree",
		faculty: 'School of Business',
		degree: 'Master of Business Administration',
		duration: '2 Years',
		description:
			'Develop advanced leadership, strategy, finance, marketing, and organizational management capabilities.',
		overview:
			'The MBA provides advanced business education through strategic management, financial analysis, marketing, organizational leadership, and applied business research.',
		requirements: [
			'A recognized Bachelor’s degree',
			'Relevant professional or academic background',
			'Other university admission requirements may apply'
		],
		careerPaths: [
			'Business Manager',
			'Management Consultant',
			'Strategy Manager',
			'Entrepreneur'
		]
	},

	{
		id: '17',
		slug: 'phd-computer-science',
		title: 'PhD in Computer Science',
		level: 'Doctoral (PhD)',
		faculty: 'Faculty of Engineering & Computing',
		degree: 'Doctor of Philosophy',
		duration: '3 Years',
		description:
			'Conduct original research in advanced computing, artificial intelligence, software systems, and emerging technologies.',
		overview:
			'The PhD in Computer Science is a research-intensive program focused on producing original contributions to computing through independent research, scholarly publication, and advanced investigation.',
		requirements: [
			'A relevant Master’s degree from a recognized institution',
			'Approved research proposal',
			'Academic references and other university requirements'
		],
		careerPaths: [
			'University Lecturer',
			'Research Scientist',
			'Principal Software Engineer',
			'Technology Researcher'
		]
	},

	{
		id: '18',
		slug: 'phd-business-management',
		title: 'PhD in Business Management',
		level: 'Doctoral (PhD)',
		faculty: 'School of Business',
		degree: 'Doctor of Philosophy',
		duration: '3 Years',
		description:
			'Advanced research into business strategy, organizational behavior, finance, entrepreneurship, and management.',
		overview:
			'This research-focused doctoral program enables scholars to investigate complex business and management problems and contribute original knowledge to the field.',
		requirements: [
			'A relevant Master’s degree from a recognized institution',
			'Approved research proposal',
			'Academic references and interview'
		],
		careerPaths: [
			'University Lecturer',
			'Business Researcher',
			'Management Consultant',
			'Policy Researcher'
		]
	},
	{
        id: '19',
        slug: 'bsc-actuarial-science',
        title: 'BSc Actuarial Science',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Apply mathematical, statistical, and financial models to assess risk in insurance, finance, and other industries.',
        overview:
            'The Bachelor of Science in Actuarial Science provides rigorous training in probability, statistics, financial mathematics, and economic theory, preparing students for professional actuarial examinations and risk management careers.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Actuarial Analyst',
            'Risk Manager',
            'Insurance Underwriter',
            'Pension Consultant'
        ]
    },
    {
        id: '20',
        slug: 'bsc-mathematics-computer-science',
        title: 'BSc Mathematics & Computer Science',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Combine advanced mathematical modeling with core computer science and software development.',
        overview:
            'This interdisciplinary program bridges theoretical mathematics and practical computing, enabling students to solve complex computational and algorithmic problems.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and relevant science subjects',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Software Developer',
            'Algorithmic Trader',
            'Mathematical Modeler',
            'Data Analyst'
        ]
    },
    {
        id: '21',
        slug: 'bsc-statistics',
        title: 'BSc Statistics',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Master data collection, probability theory, statistical inference, and predictive modeling.',
        overview:
            'Students learn how to design surveys, analyze complex datasets, and apply statistical software packages to inform decision-making in research, government, and corporate sectors.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Statistician',
            'Data Analyst',
            'Biostatistician',
            'Survey Researcher'
        ]
    },
    {
        id: '22',
        slug: 'bcom-accounting',
        title: 'Bachelor of Commerce (Accounting Option)',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Commerce',
        duration: '4 Years',
        description:
            'Develop professional expertise in financial accounting, auditing, taxation, and corporate governance.',
        overview:
            'The accounting concentration provides thorough preparation for professional accounting certifications such as CPA and ACCA alongside core business management principles.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Certified Public Accountant',
            'Auditor',
            'Financial Controller',
            'Tax Consultant'
        ]
    },
    {
        id: '23',
        slug: 'bcom-finance',
        title: 'Bachelor of Commerce (Finance Option)',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Commerce',
        duration: '4 Years',
        description:
            'Study corporate finance, investment analysis, portfolio management, and financial markets.',
        overview:
            'This program focuses on capital budgeting, financial decision-making, securities analysis, and treasury management in national and global financial systems.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Financial Analyst',
            'Investment Banker',
            'Portfolio Manager',
            'Corporate Treasurer'
        ]
    },
    {
        id: '24',
        slug: 'bcom-marketing',
        title: 'Bachelor of Commerce (Marketing Option)',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Commerce',
        duration: '4 Years',
        description:
            'Explore consumer behavior, brand management, digital marketing, and strategic market research.',
        overview:
            'Students learn how to identify target markets, develop compelling marketing campaigns, manage brands, and execute digital and traditional marketing strategies.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Marketing Manager',
            'Brand Strategist',
            'Digital Marketing Specialist',
            'Market Research Analyst'
        ]
    },
    {
        id: '25',
        slug: 'bcom-hrm',
        title: 'Bachelor of Commerce (Human Resource Management)',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Commerce',
        duration: '4 Years',
        description:
            'Learn talent acquisition, employee relations, organizational development, and compensation management.',
        overview:
            'This concentration focuses on maximizing workforce productivity and aligning human capital strategies with organizational goals.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Human Resource Manager',
            'Talent Acquisition Specialist',
            'Training and Development Officer',
            'HR Consultant'
        ]
    },
    {
        id: '26',
        slug: 'bsc-telecommunication-engineering',
        title: 'BSc Telecommunication Engineering',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '5 Years',
        description:
            'Design and maintain wireless networks, optical communication systems, and telecommunications infrastructure.',
        overview:
            'Combines electrical engineering principles with advanced telecommunications networking, signal processing, and mobile communications technologies.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'B in Mathematics, Physics, and Chemistry',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Telecommunications Engineer',
            'Network Planning Engineer',
            'RF Engineer',
            'Systems Integrator'
        ]
    },
    {
        id: '27',
        slug: 'bsc-electrical-electronic-engineering',
        title: 'BSc Electrical & Electronic Engineering',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '5 Years',
        description:
            'Study power generation, electrical circuits, control systems, and electronic device design.',
        overview:
            'Provides comprehensive technical education in electrical power systems, electronics, microprocessors, and automated control systems.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'B in Mathematics, Physics, and Chemistry',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Electrical Engineer',
            'Control Systems Engineer',
            'Power Systems Engineer',
            'Electronics Design Engineer'
        ]
    },
    {
        id: '28',
        slug: 'bsc-civil-engineering',
        title: 'BSc Civil Engineering',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '5 Years',
        description:
            'Design, build, and maintain infrastructure including roads, bridges, water supply networks, and structures.',
        overview:
            'Covers structural engineering, geotechnical analysis, transportation systems, environmental engineering, and construction management.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'B in Mathematics, Physics, and Chemistry',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Civil Engineer',
            'Structural Engineer',
            'Construction Project Manager',
            'Geotechnical Engineer'
        ]
    },
    {
        id: '29',
        slug: 'bsc-software-engineering',
        title: 'BSc Software Engineering',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Learn principled software design, architecture, DevOps, testing, and large-scale application development.',
        overview:
            'Focuses on the engineering principles behind building reliable, maintainable, and secure software systems for diverse enterprise platforms.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and relevant science subjects',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Software Architect',
            'DevOps Engineer',
            'Full-Stack Developer',
            'Quality Assurance Engineer'
        ]
    },
    {
        id: '30',
        slug: 'bsc-information-technology',
        title: 'BSc Information Technology',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Focus on network administration, enterprise systems integration, web technologies, and IT infrastructure.',
        overview:
            'Prepares students to manage and deploy robust technological solutions within organizations, emphasizing networks, databases, and administrative systems.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'IT Administrator',
            'Network Administrator',
            'Systems Analyst',
            'IT Support Manager'
        ]
    },
    {
        id: '31',
        slug: 'ba-communication-media-studies',
        title: 'BA Communication & Media Studies',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Media & Communication',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Examine media theory, mass communication, strategic corporate communication, and digital media trends.',
        overview:
            'Explores the role of media in society, audience analysis, media law, ethics, and modern communication strategies across various channels.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Communication Officer',
            'Media Researcher',
            'Corporate Communications Director',
            'Public Relations Officer'
        ]
    },
    {
        id: '32',
        slug: 'ba-public-relations-advertising',
        title: 'BA Public Relations & Advertising',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Media & Communication',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Master brand communication, copywriting, campaign creation, crisis communication, and media relations.',
        overview:
            'Equips students with creative and strategic skills to build public trust, manage corporate reputations, and design impactful advertising campaigns.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Public Relations Specialist',
            'Advertising Copywriter',
            'Account Executive',
            'Media Relations Manager'
        ]
    },
    {
        id: '33',
        slug: 'ba-animation-motion-graphics',
        title: 'BA Animation & Motion Graphics',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Media & Communication',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Develop skills in 2D and 3D modeling, character animation, visual effects, and motion design.',
        overview:
            'A hands-on creative program teaching digital sculpting, rigging, animation principles, rendering, and post-production workflows for film and games.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'Portfolio submission or relevant aptitude',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            '3D Animator',
            'Motion Graphics Designer',
            'Visual Effects Artist',
            'Character Rigger'
        ]
    },
    {
        id: '34',
        slug: 'ba-film-television-production',
        title: 'BA Film & Television Production',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Media & Communication',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Learn screenwriting, cinematography, video editing, sound design, and broadcast directing.',
        overview:
            'Provides comprehensive practical training in cinematic storytelling, camera operation, lighting techniques, and post-production editing suites.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Film Director',
            'Cinematographer',
            'Video Editor',
            'Broadcast Producer'
        ]
    },
    {
        id: '35',
        slug: 'bsc-economics-finance',
        title: 'Bachelor of Economics & Finance',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Study microeconomic and macroeconomic theory, financial markets, econometrics, and monetary policy.',
        overview:
            'Combines rigorous economic theory with financial analysis tools to evaluate market trends, public policy, and corporate finance strategies.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Economist',
            'Financial Consultant',
            'Policy Analyst',
            'Banking Executive'
        ]
    },
    {
        id: '36',
        slug: 'bachelor-procurement-logistics',
        title: 'Bachelor of Procurement & Logistics Management',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Business Management',
        duration: '4 Years',
        description:
            'Manage supply chains, global sourcing, inventory control, warehousing, and logistics operations.',
        overview:
            'Focuses on optimizing supply chain networks, procurement regulations, supplier negotiations, and international freight management.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics or English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Supply Chain Manager',
            'Procurement Officer',
            'Logistics Coordinator',
            'Inventory Controller'
        ]
    },
    {
        id: '37',
        slug: 'bachelor-project-management',
        title: 'Bachelor of Project Management',
        level: "Bachelor's Degree",
        faculty: 'School of Business',
        degree: 'Bachelor of Business Management',
        duration: '4 Years',
        description:
            'Learn project planning, risk assessment, budgeting, agile methodologies, and resource allocation.',
        overview:
            'Prepares students to lead complex projects across industries by mastering project lifecycles, stakeholder management, and quality control.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics or English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Project Manager',
            'Operations Coordinator',
            'Program Analyst',
            'Scrum Master'
        ]
    },
    {
        id: '38',
        slug: 'bachelor-hospitality-management',
        title: 'Bachelor of Hospitality Management',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Study hotel operations, food and beverage management, event planning, and guest service excellence.',
        overview:
            'Combines business management fundamentals with specialized training in hotel administration, tourism services, and culinary operations.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Hotel Manager',
            'Food and Beverage Director',
            'Event Planner',
            'Resort Manager'
        ]
    },
    {
        id: '39',
        slug: 'bachelor-travel-tourism',
        title: 'Bachelor of Travel & Tourism Management',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Explore destination marketing, ecotourism, travel agency operations, and heritage management.',
        overview:
            'Equips learners with operational and strategic management skills for the global tourism and travel industry, emphasizing sustainable practices.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Tourism Officer',
            'Tour Operator',
            'Destination Marketer',
            'Travel Consultant'
        ]
    },
    {
        id: '40',
        slug: 'ba-criminology-security-studies',
        title: 'BA Criminology & Security Studies',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Analyze criminal behavior, forensic psychology, crime prevention strategies, and security management.',
        overview:
            'Examines the causes of crime, criminal justice systems, private security operations, and modern investigative procedures.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Security Consultant',
            'Criminologist',
            'Law Enforcement Officer',
            'Fraud Investigator'
        ]
    },
    {
        id: '41',
        slug: 'ba-sociology',
        title: 'BA Sociology',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Study social structures, human interactions, community development, and social research methods.',
        overview:
            'Explores social institutions, cultural dynamics, social inequality, and community mobilization strategies for social change.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Community Development Officer',
            'Social Researcher',
            'NGO Programme Coordinator',
            'Social Worker'
        ]
    },
    {
        id: '42',
        slug: 'ba-political-science-public-admin',
        title: 'BA Political Science & Public Administration',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Examine political systems, public policy formulation, governance, and public administration.',
        overview:
            'Focuses on government structures, policy analysis, political theory, public sector management, and international relations.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Public Administrator',
            'Policy Analyst',
            'Political Consultant',
            'Diplomatic Service Officer'
        ]
    },
    {
        id: '43',
        slug: 'ba-international-relations',
        title: 'BA International Relations & Diplomacy',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Bachelor of Arts',
        duration: '4 Years',
        description:
            'Study global politics, international law, foreign policy, diplomacy, and conflict resolution.',
        overview:
            'Prepares students for careers in international organizations, diplomacy, global NGOs, and cross-border trade negotiations.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in English',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Diplomat',
            'International Relations Specialist',
            'Foreign Policy Analyst',
            'NGO Program Manager'
        ]
    },
    {
        id: '44',
        slug: 'bsc-environmental-science',
        title: 'BSc Environmental Science',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Investigate ecosystem dynamics, climate change, conservation, and environmental impact assessment.',
        overview:
            'Combines biological, chemical, and earth sciences to address ecological challenges, pollution control, and sustainable resource management.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Biology, Chemistry, and Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Environmental Officer',
            'Conservation Scientist',
            'Sustainability Consultant',
            'Environmental Impact Assessor'
        ]
    },
    {
        id: '45',
        slug: 'bsc-renewable-energy',
        title: 'BSc Renewable Energy Technology',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Study solar, wind, geothermal, and biomass energy systems alongside energy efficiency and storage.',
        overview:
            'Focuses on engineering clean energy technologies, power grid integration, and sustainable energy management for modern industries.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Mathematics and Physics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Renewable Energy Engineer',
            'Solar Systems Designer',
            'Energy Auditor',
            'Sustainability Manager'
        ]
    },
    {
        id: '46',
        slug: 'bsc-industrial-chemistry',
        title: 'BSc Industrial Chemistry',
        level: "Bachelor's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Bachelor of Science',
        duration: '4 Years',
        description:
            'Explore chemical manufacturing processes, quality control, analytical chemistry, and materials science.',
        overview:
            'Prepares students for industrial chemical synthesis, safety protocols, laboratory testing, and production plant management.',
        requirements: [
            'KCSE mean grade of C+ or equivalent',
            'C+ in Chemistry and Mathematics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Industrial Chemist',
            'Quality Control Analyst',
            'Production Chemist',
            'Chemical Laboratory Supervisor'
        ]
    },
    {
        id: '47',
        slug: 'diploma-procurement-logistics',
        title: 'Diploma in Procurement & Logistics Management',
        level: 'Diploma',
        faculty: 'School of Business',
        degree: 'Diploma',
        duration: '2 Years',
        description:
            'Gain practical skills in purchasing, inventory control, shipping, and supply chain coordination.',
        overview:
            'Provides foundational operational training in purchasing procedures, storekeeping, shipping documentation, and supply chain logistics.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'Required grades in relevant subjects',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Procurement Assistant',
            'Stores Controller',
            'Logistics Clerk',
            'Purchasing Officer'
        ]
    },
    {
        id: '48',
        slug: 'diploma-hrm',
        title: 'Diploma in Human Resource Management',
        level: 'Diploma',
        faculty: 'School of Business',
        degree: 'Diploma',
        duration: '2 Years',
        description:
            'Learn personnel administration, payroll management, recruitment, and employee relations.',
        overview:
            'Equips students with hands-on skills in managing employee records, assisting in recruitment processes, and supporting staff welfare programs.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'Required grades in relevant subjects',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'HR Assistant',
            'Personnel Officer',
            'Payroll Administrator',
            'Training Assistant'
        ]
    },
    {
        id: '49',
        slug: 'diploma-public-relations',
        title: 'Diploma in Public Relations',
        level: 'Diploma',
        faculty: 'Faculty of Media & Communication',
        degree: 'Diploma',
        duration: '2 Years',
        description:
            'Develop practical competencies in corporate communication, event coordination, and media relations.',
        overview:
            'Covers foundational public relations writing, client communication, promotional event planning, and media liaison tasks.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'Required grades in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'PR Assistant',
            'Customer Relations Officer',
            'Events Coordinator',
            'Communications Assistant'
        ]
    },
    {
        id: '50',
        slug: 'diploma-journalism-media',
        title: 'Diploma in Journalism & Mass Communication',
        level: 'Diploma',
        faculty: 'Faculty of Media & Communication',
        degree: 'Diploma',
        duration: '2 Years',
        description:
            'Learn broadcast reporting, news writing, digital editing, and studio production.',
        overview:
            'Provides practical journalism training covering news gathering, audio-visual editing, field reporting, and digital storytelling.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'Required grades in English or Kiswahili',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Reporter',
            'News Anchor',
            'Digital Content Creator',
            'Camera Operator'
        ]
    },
    {
        id: '51',
        slug: 'diploma-electrical-engineering',
        title: 'Diploma in Electrical & Electronic Engineering',
        level: 'Diploma',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Diploma',
        duration: '3 Years',
        description:
            'Practical training in electrical installation, circuit maintenance, power systems, and machine repairs.',
        overview:
            'Equips students with hands-on workshop skills and technical knowledge required for electrical installations and industrial equipment maintenance.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'C- in Mathematics and Physics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Electrical Technician',
            'Maintenance Electrician',
            'Control Panel Builder',
            'Technical Support Specialist'
        ]
    },
    {
        id: '52',
        slug: 'diploma-mechanical-engineering',
        title: 'Diploma in Mechanical Engineering',
        level: 'Diploma',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Diploma',
        duration: '3 Years',
        description:
            'Gain workshop practice in machine tooling, thermodynamics, automotive systems, and mechanical maintenance.',
        overview:
            'Focuses on practical mechanical maintenance, machining operations, plant servicing, and mechanical design drafting.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'C- in Mathematics and Physics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Mechanical Technician',
            'Plant Maintenance Supervisor',
            'Workshop Supervisor',
            'Machine Operator'
        ]
    },
    {
        id: '53',
        slug: 'diploma-civil-engineering',
        title: 'Diploma in Civil Engineering',
        level: 'Diploma',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Diploma',
        duration: '3 Years',
        description:
            'Study construction technology, surveying, structural detailing, and site supervision.',
        overview:
            'Prepares technicians for building construction sites, road works, material testing laboratories, and surveying tasks.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'C- in Mathematics and Physics',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Civil Engineering Technician',
            'Site Supervisor',
            'Clerk of Works',
            'Drafting Technician'
        ]
    },
    {
        id: '54',
        slug: 'diploma-hospitality-management',
        title: 'Diploma in Hospitality Management',
        level: 'Diploma',
        faculty: 'Faculty of Humanities & Social Sciences',
        degree: 'Diploma',
        duration: '2 Years',
        description:
            'Develop hands-on skills in food production, housekeeping, front office operations, and catering.',
        overview:
            'Offers intensive practical training in hotel housekeeping, culinary arts, restaurant service, and front-office administration.',
        requirements: [
            'KCSE mean grade of C- or equivalent',
            'Required grades in relevant subjects',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Front Office Supervisor',
            'Catering Supervisor',
            'Housekeeping Manager',
            'Restaurant Supervisor'
        ]
    },
    {
        id: '55',
        slug: 'certificate-information-technology',
        title: 'Certificate in Information Technology',
        level: 'Certificate',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Certificate',
        duration: '1 Year',
        description:
            'Foundational training in hardware maintenance, networking basics, operating systems, and web tools.',
        overview:
            'Introduces learners to computer troubleshooting, basic networking, software installation, and essential productivity tools.',
        requirements: [
            'KCSE mean grade of D+ or equivalent',
            'Basic computer proficiency'
        ],
        careerPaths: [
            'IT Support Assistant',
            'Computer Technician',
            'Helpdesk Operator',
            'Data Entry Assistant'
        ]
    },
    {
        id: '56',
        slug: 'certificate-business-management',
        title: 'Certificate in Business Management',
        level: 'Certificate',
        faculty: 'School of Business',
        degree: 'Certificate',
        duration: '1 Year',
        description:
            'Learn introductory accounting, business communication, marketing basics, and entrepreneurship.',
        overview:
            'Designed for entry-level learners seeking essential business skills for small business operations and administrative support roles.',
        requirements: [
            'KCSE mean grade of D+ or equivalent'
        ],
        careerPaths: [
            'Administrative Assistant',
            'Sales Assistant',
            'Store Assistant',
            'Junior Clerk'
        ]
    },
    {
        id: '57',
        slug: 'certificate-public-relations',
        title: 'Certificate in Public Relations & Customer Care',
        level: 'Certificate',
        faculty: 'Faculty of Media & Communication',
        degree: 'Certificate',
        duration: '1 Year',
        description:
            'Master customer service excellence, professional communication, and basic public relations tools.',
        overview:
            'Focuses on front-office communication, client relationship management, and public relations support tasks.',
        requirements: [
            'KCSE mean grade of D+ or equivalent'
        ],
        careerPaths: [
            'Customer Care Representative',
            'Receptionist',
            'Front Desk Executive',
            'PR Assistant'
        ]
    },
    {
        id: '58',
        slug: 'pgd-project-management',
        title: 'Postgraduate Diploma in Project Management',
        level: 'Postgraduate Diploma',
        faculty: 'School of Business',
        degree: 'Postgraduate Diploma',
        duration: '1 Year',
        description:
            'Advanced professional training in project planning, monitoring, evaluation, and risk management.',
        overview:
            'Tailored for graduates and professionals looking to enhance their project leadership credentials and management methodologies.',
        requirements: [
            'A recognized Bachelor’s degree',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Project Coordinator',
            'M&E Officer',
            'Project Planner',
            'Operations Manager'
        ]
    },
    {
        id: '59',
        slug: 'pgd-hrm',
        title: 'Postgraduate Diploma in Human Resource Management',
        level: 'Postgraduate Diploma',
        faculty: 'School of Business',
        degree: 'Postgraduate Diploma',
        duration: '1 Year',
        description:
            'Advanced studies in strategic human resource management, labor law, and organizational development.',
        overview:
            'Designed for degree holders seeking professional qualification and career advancement in human resource leadership.',
        requirements: [
            'A recognized Bachelor’s degree',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'HR Manager',
            'Employee Relations Specialist',
            'Talent Development Manager',
            'HR Business Partner'
        ]
    },
    {
        id: '60',
        slug: 'msc-information-technology',
        title: 'MSc Information Technology',
        level: "Master's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Master of Science',
        duration: '2 Years',
        description:
            'Advanced research and coursework in cloud computing, cybersecurity, enterprise architecture, and IT governance.',
        overview:
            'Prepares IT professionals for senior technical and strategic leadership roles through advanced systems study and applied research.',
        requirements: [
            'A relevant Bachelor’s degree in IT or Computing',
            'Minimum Second Class Honours (Upper Division) or equivalent',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'IT Director',
            'Solutions Architect',
            'Chief Information Security Officer',
            'Senior IT Consultant'
        ]
    },
    {
        id: '61',
        slug: 'msc-applied-statistics',
        title: 'MSc Applied Statistics',
        level: "Master's Degree",
        faculty: 'Faculty of Science & Technology',
        degree: 'Master of Science',
        duration: '2 Years',
        description:
            'Advanced statistical modeling, stochastic processes, multivariate analysis, and research methodologies.',
        overview:
            'Equips graduates with advanced statistical tools for complex data analysis, biostatistics, actuarial forecasting, and academic research.',
        requirements: [
            'A relevant Bachelor’s degree with strong quantitative background',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Senior Statistician',
            'Senior Data Analyst',
            'Biostatistician',
            'Research Scientist'
        ]
    },
    {
        id: '62',
        slug: 'msc-electrical-engineering',
        title: 'MSc Electrical Engineering',
        level: "Master's Degree",
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Master of Science',
        duration: '2 Years',
        description:
            'Specialized study in advanced power systems, renewable energy integration, signal processing, and control engineering.',
        overview:
            'Focuses on advanced engineering research, power systems optimization, smart grids, and complex electronic design.',
        requirements: [
            'A Bachelor’s degree in Electrical Engineering or related field',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Principal Electrical Engineer',
            'Power Systems Consultant',
            'Smart Grid Specialist',
            'Lead Design Engineer'
        ]
    },
    {
        id: '63',
        slug: 'msc-project-management',
        title: 'MSc Project Management',
        level: "Master's Degree",
        faculty: 'School of Business',
        degree: 'Master of Science',
        duration: '2 Years',
        description:
            'Advanced strategic project leadership, portfolio management, international project finance, and risk evaluation.',
        overview:
            'Provides rigorous academic and practical frameworks for managing large-scale enterprise programmes and complex global initiatives.',
        requirements: [
            'A recognized Bachelor’s degree',
            'Professional experience is an added advantage',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Program Director',
            'Senior Project Manager',
            'Portfolio Manager',
            'Project Management Consultant'
        ]
    },
    {
        id: '64',
        slug: 'ma-communication-media-studies',
        title: 'MA Communication & Media Studies',
        level: "Master's Degree",
        faculty: 'Faculty of Media & Communication',
        degree: 'Master of Arts',
        duration: '2 Years',
        description:
            'Advanced media theory, digital communication strategies, media policy, and academic research.',
        overview:
            'Designed for media practitioners and scholars to explore the evolution of global media, digital convergence, and communication ethics.',
        requirements: [
            'A relevant Bachelor’s degree from a recognized institution',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Director of Communications',
            'Media Consultant',
            'Senior Media Researcher',
            'University Lecturer'
        ]
    },
    {
        id: '65',
        slug: 'phd-information-technology',
        title: 'PhD in Information Technology',
        level: 'Doctoral (PhD)',
        faculty: 'Faculty of Engineering & Computing',
        degree: 'Doctor of Philosophy',
        duration: '3 Years',
        description:
            'Conduct cutting-edge research in information security, distributed systems, networks, or data systems.',
        overview:
            'A premier doctoral research program empowering candidates to make original contributions to information technology and computing science.',
        requirements: [
            'A relevant Master’s degree in IT or Computing',
            'Approved research proposal and academic references',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Professor of IT',
            'Principal Research Scientist',
            'Director of Technology R&D',
            'Technology Innovator'
        ]
    },
    {
        id: '66',
        slug: 'phd-business-administration',
        title: 'PhD in Business Administration',
        level: 'Doctoral (PhD)',
        faculty: 'School of Business',
        degree: 'Doctor of Philosophy',
        duration: '3 Years',
        description:
            'Original doctoral research in strategic management, finance, marketing, or supply chain management.',
        overview:
            'Prepares scholars and business leaders for advanced academic careers and high-level corporate strategy roles through rigorous empirical research.',
        requirements: [
            'A relevant Master’s degree in Business or Management',
            'Approved research proposal and interview',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'University Professor',
            'Corporate Strategist',
            'Management Consultant',
            'Business Researcher'
        ]
    },
    {
        id: '67',
        slug: 'phd-applied-statistics',
        title: 'PhD in Applied Statistics',
        level: 'Doctoral (PhD)',
        faculty: 'Faculty of Science & Technology',
        degree: 'Doctor of Philosophy',
        duration: '3 Years',
        description:
            'Advanced independent research in statistical theory, probabilistic modeling, and data analytics applications.',
        overview:
            'Focuses on developing novel statistical techniques and mathematical models to solve complex empirical problems across scientific domains.',
        requirements: [
            'A Master’s degree in Statistics, Mathematics, or related field',
            'Approved research proposal',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Professor of Statistics',
            'Principal Data Scientist',
            'Chief Statistician',
            'Lead Research Modeler'
        ]
    },
    {
        id: '68',
        slug: 'phd-media-communication',
        title: 'PhD in Media & Communication Studies',
        level: 'Doctoral (PhD)',
        faculty: 'Faculty of Media & Communication',
        degree: 'Doctor of Philosophy',
        duration: '3 Years',
        description:
            'Advanced scholarly research into journalism ethics, media sociology, digital cultures, and communication policy.',
        overview:
            'Enables doctoral researchers to produce pioneering contributions to media theory, digital journalism, and global communication studies.',
        requirements: [
            'A relevant Master’s degree in Media, Communication, or Humanities',
            'Approved research proposal',
            'Other university admission requirements may apply'
        ],
        careerPaths: [
            'Professor of Media Studies',
            'Media Policy Advisor',
            'Principal Communications Researcher',
            'Think Tank Director'
        ]
    }
];