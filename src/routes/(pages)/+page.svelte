<script>
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	export let data;

	const { posts } = data;
</script>

<Hero --bg-size="95%" />

<article class="">
	<div class="fade"><What /></div>
</article>
<PhotoCard />
<div class="fade"><CheckItOut /></div>

<Seo
	title="Dressage Jumping Cross Country Riding Lessons Dundee Michigan | German Magic Farm"
	description="Horseback riding lessons in Dundee Mi.  German Dressage and jumping training from traier Pam Bauer located in Dundee, Mi"
	type="WebPage"
	image="./german-magic-bg.jpg"
/>

<style>
</style>
