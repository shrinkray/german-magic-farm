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

<!-- <img src="german-magic-bg.jpg" alt="" /> -->
<!-- <div class="container">
	<div class="grid">
		{#each posts as { id, title, image, body }}
			<div>
				<h2>{title.substring(0, 20)}</h2>
				<img class="square" src={image} alt={title} />
				<p>{body.substring(0, 80)}</p>
			</div>
		{/each}
	</div>
</div> -->

<PhotoCard />

<CheckItOut />

<Seo title="German Magic Farm" description="This is homepage" type="WebSite" />

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	.square {
		aspect-ratio: var(--ratio-square);
	}
</style>
