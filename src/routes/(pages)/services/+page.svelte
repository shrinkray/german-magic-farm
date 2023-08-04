<script land="ts">
	import Seo from '$lib/Seo.svelte';
	import Contact from '$lib/Contact.svelte';
	import services from '$lib/data/services.json';
	import Hero from '$lib/Hero.svelte';
	import lessons from '$lib/data/lessons.json';

	let showThird = true;
</script>

<Hero
	herotitle="Services:  German Magic Farm"
	tagline="Training, Lessons, Leasing, Showing and Fun!"
	--bg-image="url(pam-dressage-slider.jpg)"
	--bg-opacity="0.5"
/>
<div class="container grid">
	<article class="alt-color-band flow">
		<h1>Services Offered at German Magic Farm</h1>

		{#each services as { content, title, amount }, index}
			<div class="">
				<h2>{title}</h2>
				<p class="bold">{amount}</p>
				<p class="">{content}</p>
			</div>
		{/each}
	</article>
	<article class="lessons">
		<h2>Types Of Lessons and Pricing</h2>
		{#each lessons as { kindOfLesson, firstPrice, firstDescription, secondPrice, secondDescription, thirdPrice, thirdDescription }}
			<div class="flexible-grid">
				<h3>{kindOfLesson}</h3>
				<div class="">
					<p>{firstPrice} {firstDescription}</p>
					<p>{secondPrice} {secondDescription}</p>
					{#if showThird}
						<p class="symbol">{thirdPrice} {thirdDescription}</p>
					{/if}
				</div>
			</div>
		{/each}
	</article>

	<Contact />
</div>
<div />
<Seo title="Services | German Magic Farm" description="This is about page" type="WebPage" />

<style>
	.flexible-grid {
		display: flex;
		flex-wrap: wrap;
	}

	h3 {
		border-bottom: 1px solid #ddd;
	}

	.lessons {
		padding-block: var(--size-7);
	}

	article.alt-color-band * {
		padding-inline: var(--size-2);
	}

	article.alt-color-band > div:nth-child(odd) {
		background-color: var(--accent-fade);
	}

	.bold {
		font-weight: bold;
	}
</style>
