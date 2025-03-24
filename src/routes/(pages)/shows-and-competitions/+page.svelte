<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
</script>

<svelte:head>
	<title>Shows & Competitions | German Magic Farm</title>
	<meta
		name="description"
		content="Information about upcoming shows and competitions at German Magic Farm"
	/>
</svelte:head>

<Hero
	herotitle="Shows & Competitions"
	tagline="Find information about upcoming events, competition schedules, and how to participate in our shows."
	--bg-image="url('/pam-bauer-horseshow-kid.jpg')"
	--bg-opacity="0.6"
/>

<main class="container mx-auto px-4 py-10">
	<div class="prose max-w-none">
		<section class="">
			<h2 class="section-title">Our Philosophy</h2>
			<p class="text-lg">
				While winning is always exciting, our main focus is on enjoying the journey with their horse
				and continuing to improve their skills. We emphasize the horse and rider partnership as a
				whole.
			</p>
			<p class="py-10 text-lg italic  section-description">
				<span class="bold">Our motto:</span> "Smile and Enjoy the Ride!"
			</p>
		</section>

		<section class="show-feature pb-8">
			<h3 class="inset">Training at Shows Includes:</h3>
			<ul class="list-disc space-y-2 pl-6">
				<li>Warm-up sessions and in-class coaching as needed</li>
				<li>Course walks and test reading assistance</li>
				<li>One-on-one support from a trainer or staff member to address any challenges</li>
				<li>
					Post-ride discussion with a trainer to evaluate performance, identify areas for
					improvement, and set goals for future competitions
				</li>
			</ul>
		</section>

		<section class="show-feature fade rounded pb-8">
			<h3 class="inset">Training at Show Pricing:</h3>
			<ul class="list-disc space-y-2 pl-6">
				<li>$100 per day – for up to 2 horses</li>
				<li>$75 per day – for up to 4 horses</li>
				<li>$60 per day – for 5 or more horses</li>
				<li>$35 per class – Trainer fee per show horse (plus class entry fee)</li>
			</ul>
		</section>

		<section class="show-feature pb-8">
			<h3 class="inset">Hauling Services</h3>
			<p class="inset">
				Trailering to shows is available for all training horses, whether they are owned by German
				Magic Farm or by students.
			</p>
			<ul class="list-disc space-y-2 pl-6">
				<li>
					Minimum hook fee: $75 per trip to the venue (can be split if multiple horses share a
					trailer)
				</li>
				<li>Mileage fee: $3+ per mile (dependent on current fuel prices)</li>
			</ul>
		</section>

		<section class="show-feature fade rounded pb-8">
			<h3 class="inset">Upcoming Events</h3>
			<p class="inset">Check back soon for our upcoming show and competition schedule.</p>
		</section>

		<section class="show-feature pb-8">
			<h3 class="inset">How to Participate</h3>
			<p class="inset">
				Details about participation requirements and registration will be available soon.
			</p>
		</section>
	</div>

	<div class="center-w-grid static-logo py-10"><SmallLogoLayers /></div>
</main>

<style>
	.show-feature h3 {
		margin-top: 2rem;
		border-bottom: 1px solid #ddd;
		margin-bottom: 1rem;
	}
</style>
