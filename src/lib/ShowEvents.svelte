<script lang="ts">
	import type { ShowsData } from '$lib/types/shows';
	import showsData from '$lib/data/shows.json';

	const data = showsData as ShowsData;
</script>

<section class="section">
	<div class="container">
		<h2>Show Events</h2>
		<div class="auto-grid">
			{#each data.shows as { title, location, photo, link, excerpt, button }}
				<div class="card flow-bottom">
					<h3>{title}</h3>
					<a href={link}><img class="square" src={photo} alt={title} /> </a>
					<div class="excerpt">{excerpt}</div>
					<a class="button" href={link}>{button}</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	img {
		margin-bottom: 2rem;
	}
</style>

