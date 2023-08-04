<script land="ts">
	import Seo from '$lib/Seo.svelte';
	import Contact from '$lib/Contact.svelte';
	import services from '$lib/data/services.json';
	import Hero from '$lib/Hero.svelte';
	import lessons from '$lib/data/lessons.json';
	import SmallLogo from '$lib/SmallLogo.svelte';

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
</div>
<article class="lessons larger-wrapper fade">
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

<div class="center-w-grid"><SmallLogo /></div>
<Seo title="Services | German Magic Farm" description="This is about page" type="WebPage" />

<style>
	article.alt-color-band * {
		padding-inline: var(--size-2);
	}

	article.alt-color-band > div:nth-child(odd) {
		background-color: var(--accent-fade);
	}
	.flexible-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
	}

	h3 {
		border-bottom: 1px solid #ddd;
	}

	.larger-wrapper {
		width: min(100% - 3rem, 90ch);
		margin-inline: auto;
	}

	article.larger-wrapper > * {
		padding: 1em;
	}

	.lessons {
		padding-block: var(--size-7);
	}

	.bold {
		font-weight: bold;
	}
</style>
