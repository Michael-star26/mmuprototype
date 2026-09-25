// src/lib/data/news.ts
import type { NewsItem } from '$lib/types';

export const news: NewsItem[] = [
	{
		id: '1',
		slug: 'university-ranked-top-10-research',
		title: 'University Ranked in Top 10 for Global Research Impact',
		date: 'September 20, 2026',
		author: 'Communications Office',
		category: 'Academics',
		summary: 'Our institution has climbed to the top 10 globally for sustainable energy and computing research output.',
		content: 'Thanks to groundbreaking grants and tireless faculty-student collaborations, our research labs have published record-setting papers this year. This recognition reflects our commitment to solving real-world challenges.'
	},
	{
		id: '2',
		slug: 'new-state-of-the-art-stem-complex-opens',
		title: 'New State-of-the-Art STEM Complex Opens This Fall',
		date: 'September 05, 2026',
		author: 'Campus Development Team',
		category: 'Campus Life',
		summary: 'The newly constructed 150,000-square-foot facility features advanced robotics labs, collaborative workspaces, and zero-carbon architecture.',
		content: 'Students and faculty in engineering and computing are stepping into a brand new era of learning. The STEM Complex includes specialized maker spaces, high-performance computing clusters, and flexible seminar rooms designed to foster cross-disciplinary innovation.'
	},
	{
		id: '3',
		slug: 'computer-science-students-win-global-hackathon',
		title: 'Computer Science Students Win First Place at Global AI Hackathon',
		date: 'August 28, 2026',
		author: 'Faculty of Engineering & Computing',
		category: 'Students',
		summary: 'A team of four undergraduates triumphed over 200 international university teams with an AI-driven healthcare diagnostic tool.',
		content: 'Competing against top global institutions, our student team developed "MedAssist," an open-source tool that helps clinicians quickly triage patient symptoms using lightweight machine learning models. The team was awarded a $50,000 grant to further develop their prototype.'
	},
	{
		id: '4',
		slug: 'partnership-announced-with-global-tech-leaders',
		title: 'Strategic Partnership Announced with Global Tech Leaders',
		date: 'August 14, 2026',
		author: 'Office of the President',
		category: 'Partnerships',
		summary: 'A multi-year agreement will bring exclusive internship pathways, cloud credits, and joint curriculum development to our students.',
		content: 'In an effort to bridge higher education and industry demands, the university has forged a major partnership with leading global technology firms. Students will gain direct access to professional certification programs, mentorship networks, and priority internship placement.'
	}
];