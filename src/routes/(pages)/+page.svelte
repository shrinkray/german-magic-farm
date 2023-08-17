<script>
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	import HomePgPic from '$lib/HomePgPic.svelte';
	export let data;

	const { posts } = data;
</script>

<Hero --bg-size="95%" />
<!-- svelte-ignore a11y-img-redundant-alt -->
<img src="./german-magic-bg.webp" alt="Large Logo Image" />

<HomePgPic size="small" />

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
