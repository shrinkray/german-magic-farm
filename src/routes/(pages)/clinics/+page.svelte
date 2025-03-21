<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
	import clinicData from '$lib/data/clinics.json';
	import type { ClinicsData } from '$lib/types/clinics';

	const data = clinicData as ClinicsData;

	// Get the current date
	const currentDate = new Date();

	// Filter the clinics to get only upcoming events
	const upcomingClinics = data.clinics.filter(clinic => {
		const clinicDate = new Date(clinic.date);
		return clinicDate >= currentDate;
	});
</script>

<svelte:head>
	<meta property="og:image" content={data.seo.image} />
	<meta property="og:image:width" content="740" />
	<meta property="og:image:height" content="423" />
	<meta property="og:image:alt" content="Shows at German Magic Farm" />
</svelte:head>

<div class="hero-wrapper">
	<Hero
		herotitle={data.pageTitle}
		tagline={data.pageTagline}
		--bg-image="url('/clinic-collage.webp')"
		--bg-opacity="0.6"
	/>
</div>

<section class="section">
	<div class="container grid">
		<h2 class="section-title">What clinics are coming up?</h2>
		<p>
			German Magic Farm offers an inspiring place to learn, grow, and enjoy the experience of a clinic—taught by the best instructors you will find.
		</p>

		{#if upcomingClinics.length > 0}
			{#each upcomingClinics as clinic}
				<article class="show-card">
					<h3 class="show-title">{clinic.title}</h3>
					<p><strong>Date:</strong> {clinic.date}</p>
					<p>{clinic.description}</p>
				</article>
			{/each}
		{:else}
			<p>There are currently no upcoming clinics. Please contact us for information about future events.</p>
		{/if}
	</div>
</section>

<Seo
	title={data.seo.title}
	description={data.seo.description}
	type={data.seo.type}
	image={data.seo.image}
/>

<style>
	.hero-wrapper {
		width: 100%;
	}
	.section {
		padding: var(--size-fluid-4) 0;
		background-color: var(--surface-2);
	}
	.section-title {
		font-size: var(--font-size-fluid-3);
		text-align: center;
		margin-bottom: var(--size-fluid-4);
		color: var(--text-1);
	}
	.show-card {
		background: var(--surface-1);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		padding: var(--size-fluid-3);
		margin: var(--size-fluid-2);
	}
	.show-title {
		font-size: var(--font-size-fluid-2);
		color: var(--text-1);
		margin: 0;
	}
</style>
