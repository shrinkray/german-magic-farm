<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
	import clinicsData from '$lib/data/clinics.json';
	import type { ClinicsData } from '$lib/types/clinics';

	const data = clinicsData as ClinicsData;
</script>

<svelte:head>
	<meta property="og:image" content={data.seo.image} />
	<meta property="og:image:width" content="740" />
	<meta property="og:image:height" content="423" />
	<meta property="og:image:alt" content="Pam Bauer riding in winter" />
</svelte:head>

<div class="spl-wrapper">
	<Hero
		herotitle={data.pageTitle}
		tagline={data.pageTagline}
		--bg-image="url('/clinic-collage.webp')"
		--bg-opacity="0.6"
	/>
</div>

<section class="section">
	<div class="container flow">
		<h1>Clinics Offered at German Magic Farm</h1>

		{#each data.clinics as clinic}
			<article class="clinic-card">
				<h2>{clinic.title}</h2>
				<h3>{clinic.subtitle}</h3>
				<div class="clinic-details">
					<p><strong>Date:</strong> {clinic.date}</p>
					<p><strong>Instructor:</strong> {clinic.instructor}</p>
					<p><strong>Type:</strong> {clinic.type}</p>
				</div>
				<p>{clinic.description}</p>

				{#if clinic.status === 'upcoming'}
					<a href="./contact" class="button">Interested?</a>
				{/if}
			</article>
		{/each}
	</div>
</section>

<Seo
	title={data.seo.title}
	description={data.seo.description}
	type={data.seo.type}
	image={data.seo.image}
/>

<style>
	.section {
		padding-block: var(--size-fluid-5);
	}

	.spl-wrapper {
		width: 100%;
	}

	.clinic-card {
		padding: var(--size-fluid-3);
		border: 1px solid var(--primary-color);
		border-radius: var(--radius-2);
		margin-block: var(--size-fluid-3);
	}

	.clinic-details {
		display: grid;
		gap: var(--size-2);
		margin-block: var(--size-2);
	}

	.button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		text-decoration: none;
		color: white;
		font-size: 1em;
		cursor: pointer;
		padding: 0.5em 1em;
	}

	.button:hover {
		text-decoration: underline;
		transform: scale(0.2);
	}
</style>
