<script>
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';

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

<div class="lg-home-image | section"><SmallLogoLayers width="300" /></div>
<!-- begin experiment -->

<!-- end experiment -->

<!-- <HomePgPic size="small" /> -->

<article>
	<What />
</article>
<PhotoCard />
<CheckItOut />

<Seo
	title="Dressage Jumping Cross Country Riding Lessons Dundee Michigan | German Magic Farm"
	description="Horseback riding lessons in Dundee Mi.  German Dressage and jumping training from trainer Pam Bauer located in Dundee, Mi"
	type="WebPage"
	image="https://imaginative-fox-7b8539.netlify.app/german-magic-bg.jpg"
/>

<style>
	img {
		margin-inline: auto;
	}

	.section {
		padding-block: var(--size-fluid-5);
	}

	.lg-home-image {
		display: flex;

		justify-content: center;
	}
</style>
