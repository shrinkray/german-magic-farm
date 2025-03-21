<script land="ts">
	import Seo from '$lib/Seo.svelte';
	import Contact from '$lib/Contact.svelte';
	import services from '$lib/data/services.json';
	import Hero from '$lib/Hero.svelte';
	import lessons from '$lib/data/lessons.json';
	import SmallLogo from '$lib/SmallLogo.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';

	let showThird = true;
</script>

<svelte:head
	><meta
		property="og:image"
		content="https://www.germanmagicfarm.com/pam-bauer-teaching.webp"
	/><meta property="og:image:width" content="663" /><meta
		property="og:image:height"
		content="477"
	/><meta property="og:image:alt" content="Pam Bauer riding in winter" /></svelte:head
>

<Hero
	herotitle="German Magic Farm Services"
	tagline="Training, Lessons, Leasing, Showing and Fun!"
	--bg-image="url('/pam-dressage-slider.webp')"
	--bg-opacity="0.5"
/>
<section class="section">
	<div class="container grid">
		<article class="alt-color-band flow">
			<h2>Learn about our services</h2>

			{#each services as { content, title, amount }, index}
				<div class="service-feature">
					<h3>{title}</h3>
					<span class="bold" role="text" aria-label="Cost of service">{amount}</span>
					<p class="service-description" role="text" aria-label="Description of service">{content}</p>
				</div>
			{/each}
		</article>
	</div>
</section>
<section class="section">
	<div class="container italics">
		<h4>** Note About Late Fees</h4>
		<p>
			Late Fees: a $50 late fee will be charged 10 days after payment is late, and every additional
			10 days thereafter.
		</p>
	</div>
</section>

<section class="section">
	<article class="px-20 lessons larger-wrapper fade">
		<div class="container mx-auto">
			<h2>Types Of Lessons and Pricing</h2>
				{#each lessons as { kindOfLesson, firstPrice, firstDescription, secondPrice, secondDescription, thirdPrice, thirdDescription }}
					<div class="py-20 flexible-grid">
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
		</div>
	</article>
</section>

<div class="py-20 center-w-grid"><SmallLogoLayers /></div> 

<Seo
	title="Dressage and jumping Lessons | Training Horseshow Information German Magic
Farm"
	description="Information on lessons, training and horse shows with Pam Bauer.  Learn about all the services offered at German Magic Farm in Dundee, Mi"
	type="WebPage"
	image="/pam-dressage-slider.webp"
/>

<style>
	.italics {
		font-style: italic;
		font-size: var(--fs-300);
	}

	.section {
		padding-block: var(--size-fluid-1);
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



	.lessons {
		padding-block: var(--size-7);
	}

	.bold {
		font-weight: bold;
	}
</style>
