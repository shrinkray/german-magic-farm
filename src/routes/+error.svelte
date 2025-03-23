<script>
	import Hero from '$lib/Hero.svelte';
</script>

<section class="section | fade">
	<div class="container | flow | center">
		<h1>Opps you landed on old link!</h1>
		<h2>Don't worry, just use the menu above!</h2>
		<p>... and get a jump on our new site 😀</p>
	</div>
</section>
<Hero
	--bg-image="url('/white-horse-jumping.webp')"
	--bg-opacity="0.5"
	--bg-size="contain"
	--margin-block="0"
/>

<style>
	.hero {
		margin: 0;
	}

	h3 {
		border-bottom: 1px solid #ddd;
	}
</style>
