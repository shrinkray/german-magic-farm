<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>Shows & Competitions | German Magic Farm</title>
  <meta name="description" content="Information about upcoming shows and competitions at German Magic Farm" />
</svelte:head>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">Shows & Competitions</h1>
  
  <div class="prose max-w-none">
    <p class="text-lg mb-6">
      Welcome to our Shows & Competitions page. Here you'll find information about upcoming events, 
      competition schedules, and how to participate in our shows.
    </p>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Our Philosophy</h2>
      <p class="text-lg mb-4">
        While winning is always exciting, our main focus is on enjoying the journey with their horse and continuing to improve their skills. We emphasize the horse and rider partnership as a whole.
      </p>
      <p class="text-lg italic mb-6">Our motto: "Smile and Enjoy the Ride!"</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Training at Shows Includes:</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Warm-up sessions and in-class coaching as needed</li>
        <li>Course walks and test reading assistance</li>
        <li>One-on-one support from a trainer or staff member to address any challenges</li>
        <li>Post-ride discussion with a trainer to evaluate performance, identify areas for improvement, and set goals for future competitions</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Training at Show Pricing:</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>$100 per day – for up to 2 horses</li>
        <li>$75 per day – for up to 4 horses</li>
        <li>$60 per day – for 5 or more horses</li>
        <li>$35 per class – Trainer fee per show horse (plus class entry fee)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Hauling Services</h2>
      <p class="mb-4">
        Trailering to shows is available for all training horses, whether they are owned by German Magic Farm or by students.
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Minimum hook fee: $75 per trip to the venue (can be split if multiple horses share a trailer)</li>
        <li>Mileage fee: $3+ per mile (dependent on current fuel prices)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <p>Check back soon for our upcoming show and competition schedule.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">How to Participate</h2>
      <p>Details about participation requirements and registration will be available soon.</p>
    </section>
  </div>
</main> 