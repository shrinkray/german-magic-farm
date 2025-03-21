<script lang="ts">
  import type { PageData } from './$types';
  import Hero from '$lib/Hero.svelte';
  import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
  export let data: PageData;
</script>

<svelte:head>
  <title>Shows & Competitions | German Magic Farm</title>
  <meta name="description" content="Information about upcoming shows and competitions at German Magic Farm" />
</svelte:head>


	<Hero
		herotitle="Shows & Competitions"
		tagline="Find information about upcoming events, competition schedules, and how to participate in our shows."
		--bg-image="url('/pam-bauer-horseshow-kid.jpg')"
		--bg-opacity="0.6"
	/>


<main class="container px-4 py-8 mx-auto">
  
  
  <div class="prose max-w-none">
    <p class="mb-6 text-lg">
      Welcome to our Shows & Competitions page. Here you'll find information about upcoming events, 
      competition schedules, and how to participate in our shows.
    </p>

    <section class="mb-8">
      <h2 class="mb-4 font-semibold">Our Philosophy</h2>
      <p class="mb-4 text-lg">
        While winning is always exciting, our main focus is on enjoying the journey with their horse and continuing to improve their skills. We emphasize the horse and rider partnership as a whole.
      </p>
      <p class="mb-6 text-lg italic">Our motto: "Smile and Enjoy the Ride!"</p>
    </section>

    <section class="mb-8">
      <h3 class="mb-4 font-semibold">Training at Shows Includes:</h3>
      <ul class="pl-6 mb-6 space-y-2 list-disc">
        <li>Warm-up sessions and in-class coaching as needed</li>
        <li>Course walks and test reading assistance</li>
        <li>One-on-one support from a trainer or staff member to address any challenges</li>
        <li>Post-ride discussion with a trainer to evaluate performance, identify areas for improvement, and set goals for future competitions</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="mb-4 font-semibold">Training at Show Pricing:</h3>
      <ul class="pl-6 mb-6 space-y-2 list-disc">
        <li>$100 per day – for up to 2 horses</li>
        <li>$75 per day – for up to 4 horses</li>
        <li>$60 per day – for 5 or more horses</li>
        <li>$35 per class – Trainer fee per show horse (plus class entry fee)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="mb-4 font-semibold">Hauling Services</h3>
      <p class="mb-4">
        Trailering to shows is available for all training horses, whether they are owned by German Magic Farm or by students.
      </p>
      <ul class="pl-6 space-y-2 list-disc">
        <li>Minimum hook fee: $75 per trip to the venue (can be split if multiple horses share a trailer)</li>
        <li>Mileage fee: $3+ per mile (dependent on current fuel prices)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="mb-4 font-semibold">Upcoming Events</h3>
      <p>Check back soon for our upcoming show and competition schedule.</p>
    </section>

    <section class="mb-8">
      <h3 class="mb-4 font-semibold">How to Participate</h3>
      <p>Details about participation requirements and registration will be available soon.</p>
    </section>
  </div>

  <div class="py-10 center-w-grid static-logo"><SmallLogoLayers /></div> 

</main> 

<style>
	.hero-wrapper {
		width: 100%;
	}
	
	.hero {
		background-image: var(--bg-image);
		background-position: center top; /* Aligns the image to the top */
		background-repeat: no-repeat;
		background-size: cover; /* Ensures the image covers the entire area */
	}
</style>
