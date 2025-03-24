export type ShowType = 'dressage' | 'jumping' | 'eventing' | 'cross-country';
export type ShowStatus = 'upcoming' | 'past' | 'cancelled';

export interface Shows {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	date: string;
	instructor: string;
	type: ShowType;
	status: ShowStatus;
	image: string;
}

export interface SeoData {
	title: string;
	description: string;
	type: string;
	image: string;
}

export interface ShowsData {
	shows: Shows[];
	pageTitle: string;
	pageTagline: string;
	seo: SeoData;
}
