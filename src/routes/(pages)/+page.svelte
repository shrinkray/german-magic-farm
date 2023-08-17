<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	import HomePgPic from '$lib/HomePgPic.svelte';
	export let data;

	const { posts } = data;

	let currentTheme = '';

	onMount(() => {
		// currentTheme = document.documentElement.dataset.theme;
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';

		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light');
		}
	});

	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};

	$: url = $page.url.href;
	$: routeId = $page.url.pathname;
</script>

<!-- hero component like I orig had below commented out 4 experiment 
<Hero --bg-size="95%" />
<!-- svelte-ignore a11y-img-redundant-alt -->
<img src="./german-magic-bg.webp" alt="Large Logo Image" />

<!-- begin experiment -->

{#if currentTheme == 'light'}
	<!-- do something -->
	<HomePgPic size="small" />
{:else}
	<!-- do something -->
	<img src="./pam-bauer-oxer.webp" alt="test" />
{/if}

<!-- end experiment -->

<!-- <HomePgPic size="small" /> -->

<article>
	<What />
</article>
<PhotoCard />
<CheckItOut />

<Seo
	title="Dressage Jumping Cross Country Riding Lessons Dundee Michigan | German Magic Farm"
	description="Horseback riding lessons in Dundee Mi.  German Dressage and jumping training from traier Pam Bauer located in Dundee, Mi"
	type="WebPage"
	image="./german-magic-bg.jpg"
/>

<style>
	img {
		margin-inline: auto;
	}
</style>
