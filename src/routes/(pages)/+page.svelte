<script>
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
	import { fade } from 'svelte/transition';
	export let data;

	const { posts } = data;
</script>

<svelte:head
	><meta property="og:image" content="https://www.germanmagicfarm.com/german-magic-bg.jpg" /><meta
		property="og:image:width"
		content="1200"
	/><meta property="og:image:height" content="480" /><meta
		property="og:image:alt"
		content="German Magic Farm"
	/></svelte:head
>

<!-- hero component like I orig had below commented out 4 experiment 
<Hero --bg-size="95%" />
<!-- svelte-ignore a11y-img-redundant-alt -->
<!-- <img src="./german-magic-bg.webp" alt="Large Logo Image" /> -->

<div class="lg-home-image static-logo | section"><SmallLogoLayers width="300" height="300" /></div>
<!-- begin experiment -->

<!-- end experiment -->

<!-- <HomePgPic size="small" /> -->

<article>
	<What />
</article>
<PhotoCard />

<div class="center-w-grid static-logo"><SmallLogoLayers /></div>

<CheckItOut />

<Seo
	title="Dressage Jumping Cross Country Riding Lessons Dundee Michigan | German Magic Farm"
	description="Horseback riding lessons in Dundee Mi.  German Dressage and jumping training from trainer Pam Bauer located in Dundee, Mi"
	type="WebPage"
	image="https://www.germanmagicfarm.com/german-magic-bg.jpg"
/>

<style>
	.lg-home-image {
		display: flex;

		justify-content: center;
	}
</style>
