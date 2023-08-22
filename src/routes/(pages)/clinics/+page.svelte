<script>
	import Hero from '$lib/Hero.svelte';
	import Seo from '$lib/Seo.svelte';
</script>

<div class="spl-wrapper">
	<Hero
		herotitle="Clinics:  German Magic Farm"
		tagline="learn, practice & have fun at a clinic"
		--bg-image="url('./clinic-collage.webp')"
		--bg-opacity="0.5"
	/>
</div>

<section class="section">
	<div class="container">
		<h1>Clinics Offered at German Magic Farm</h1>

		<p>Stay tuned for our next clinic!</p>
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
</style>
