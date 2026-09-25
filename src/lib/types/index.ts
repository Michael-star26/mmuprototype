export interface Programme {
	id: string;
	slug: string;
	title: string;
	faculty: string;
	degree: string;
	duration: string;
	description: string;
	overview: string;
	requirements: string[];
	careerPaths: string[];
}

export interface EventItem {
	id: string;
	slug: string;
	title: string;
	date: string;
	time: string;
	location: string;
	category: string;
	description: string;
	content: string;
}

export interface NewsItem {
	id: string;
	slug: string;
	title: string;
	date: string;
	author: string;
	category: string;
	summary: string;
	content: string;
	image?: string;
}

export interface Leader {
	id: string;
	name: string;
	title: string;
	department: string;
	bio: string;
	image?: string;
}

export interface admin{
	name:string
}