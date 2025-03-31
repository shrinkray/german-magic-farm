// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare module 'nodemailer';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '$env/static/private' {
	export const SECRET_API_KEY: string;
	export const SECRET_API_USER: string;
	export const SECRET_API_HOST: string;
	export const SECRET_API_RECEIVER: string;
}
