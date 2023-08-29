<script>
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
</script>

<svelte:head
	><meta
		property="og:image"
		content="https://www.germanmagicfarm.com/pam-gallop-hill-cp.webp"
	/><meta property="og:image:width" content="740" /><meta
		property="og:image:height"
		content="423"
	/><meta property="og:image:alt" content="Pam Bauer riding in winter" /></svelte:head
>

<div class="spl-wrapper">
	<Hero
		herotitle="Clinics:  German Magic Farm"
		tagline="learn, practice & have fun at a clinic"
		--bg-image="url('/clinic-collage.webp')"
		--bg-opacity="0.6"
	/>
</div>

<section class="section">
	<div class="container flow">
		<h1>Clinics Offered at German Magic Farm</h1>

		<h2>Josef Maier Clinic September 2023</h2>
		<h3>Josef Maier will be teaching at German Magic Farm on September 9th and 10th</h3>
		<p>If you are interested in this clinic please inquire below.</p>

		<a href="./contact" class="button"> Interested?</a>
	</div>
</section>

<Seo
	title="Riding jumping, eventing, cross country, and dressage clinics in Dundee, Mi"
	description="Ride in a dressage or jumping clinic at German Magic Farm with professional riders and trainers from all over the world"
	type="WebPage"
	image="./pam-bauer-teaching.jpg"
/>

<style>
	.section {
		padding-block: var(--size-fluid-5);
	}

	.spl-wrapper {
		width: 100%;
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
