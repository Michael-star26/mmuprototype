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
	}
];