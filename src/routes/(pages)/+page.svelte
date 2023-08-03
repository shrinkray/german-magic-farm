<script>
	import Seo from '$lib/Seo.svelte';
	import What from '$lib/What.svelte';
	import Hero from '$lib/Hero.svelte';
	import PhotoCard from '$lib/PhotoCard.svelte';
	import CheckItOut from '$lib/CheckItOut.svelte';
	export let data;

	const { posts } = data;
</script>

<Hero />
<div class="fade"><What /></div>

<PhotoCard />

<CheckItOut />

<Seo title="German Magic Farm" description="This is homepage" type="WebSite" />

<style>
</style>
