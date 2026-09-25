// src/routes/academics/programmes/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import { programmes } from '$lib/data/programmes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const programme = programmes.find((p) => p.slug === params.slug);

	if (!programme) {
		throw error(404, {
			message: 'Programme not found'
		});
	}

	return {
		programme
	};
};