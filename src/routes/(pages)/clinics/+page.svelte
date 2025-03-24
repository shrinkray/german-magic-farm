<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
	import clinicData from '$lib/data/clinics.json';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
	import type { ClinicsData } from '$lib/types/clinics';

	const data = clinicData as ClinicsData;

	// Get the current date
	const currentDate = new Date();

	// Filter the clinics to get upcoming and past events
	const upcomingClinics = data.clinics.filter((clinic) => {
		const clinicDate = new Date(clinic.date);
		return clinicDate >= currentDate;
	});

	const pastClinics = data.clinics.filter((clinic) => {
		const clinicDate = new Date(clinic.date);
		return clinicDate < currentDate;
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

<div class="container px-4 py-8">
	<section class="section">
		<h2 class="section-title">What clinics are coming up?</h2>
		<p class="pull-quote">
			German Magic Farm offers an inspiring place to learn, grow, and enjoy the experience of a
			clinic—taught by the best instructors you will find. If you are interested in our offering a
			clinic, please <a href="/contact">contact us</a>.
		</p>
		<div class="grid">
			{#if upcomingClinics.length > 0}
				{#each upcomingClinics as clinic}
					<article class="show-card">
						<h3 class="show-title">{clinic.title}</h3>
						<p><strong>Date:</strong> {clinic.date}</p>
						<p>{clinic.description}</p>
					</article>
				{/each}
			{:else}
				<p class="py-20">
					We are sorry, there are currently no clinics to show. Please let us know what types of
					training you need.
				</p>
			{/if}
		</div>
	</section>

	<section class="section past-clinics rounded">
		<div class="container grid">
			<h2 class="section-title">Past Clinics</h2>
			<p>Take a look at the types of clinics we have hosted in the past.</p>
			<div class="space-y-20"></div>

			{#if pastClinics.length > 0}
				{#each pastClinics as clinic}
					<article class="show-card past-clinic prose">
						<h3 class="show-title">{clinic.title}</h3>
						<p><strong>Date:</strong> {clinic.date}</p>
						<p>{clinic.description}</p>
					</article>
				{/each}
			{:else}
				<p class="py-20">No past clinics found.</p>
			{/if}
		</div>
		<div class="container">
			<!-- Check out my list on Chat GPT -->
		</div>
	</section>
</div>
<div class="center-w-grid static-logo py-10"><SmallLogoLayers /></div>

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
	.show-card {
		background: var(--surface-1);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
		padding: var(--size-fluid-3);
		margin: var(--size-fluid-2);
	}
	.show-title {
		font-size: var(--font-size-fluid-2);
		padding-top: 0;
		color: var(--text-1);
		margin: 0;
	}
	.past-clinics,
	.past-clinic {
		background-color: var(--accent-fade);
	}
</style>
