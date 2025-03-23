<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import Contact from '$lib/Contact.svelte';
	import services from '$lib/data/services.json';
	import Hero from '$lib/Hero.svelte';
	import lessons from '$lib/data/lessons.json';
	import SmallLogo from '$lib/SmallLogo.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
	import { marked } from 'marked';

	marked.use({
		gfm: true,
		breaks: true,
		renderer: {
			strong(token) {
				const text = token?.text || token?.raw || '';
				return text ? `<span class="bold line-height-3">${text}</span>` : '';
			},
			heading(token) {
				const text = token?.text || token?.raw || '';
				const level = token.depth;
				// Use the heading level as is - #### will render as h4
				return text ? `<h${level}>${text}</h${level}>` : '';
			}
		}
	});

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
			<h2 class="section-title">Learn about our services</h2>

			{#each services as { content, title, amount }, index}
				<div class="service-feature">
					<h3>{title}</h3>
					<span class="bold inset" aria-label="Cost of service">{amount}</span>
					<div class="service-description" aria-label="Description of service">
						{@html marked(content)}
					</div>
				</div>
			{/each}
		</article>
	</div>
</section>
<section class="section">
	<div class="container italics">
		<blockquote>
			<h4>** Note About Late Fees</h4>
			<p>
				Late Fees: a $50 late fee will be charged 10 days after payment is late, and every additional
				10 days thereafter.
			</p>
		</blockquote>
	</div>
</section>

<section class="section">
	<article class="px-20 lessons larger-wrapper fade rounded">
		<div class="container mx-auto">
			<h2>Types Of Lessons and Pricing</h2>
				{#each lessons as { kindOfLesson, firstPrice, firstDescription, secondPrice, secondDescription, thirdPrice, thirdDescription }}
					<div class="flexible-grid">
					<h3>{kindOfLesson}</h3>
					<div class="">
						<p class=""><span class="bold mr-5">{firstPrice}</span> {firstDescription}</p>
						<p class=""><span class="bold mr-5">{secondPrice}</span> {secondDescription}</p>
						{#if thirdPrice && thirdDescription}
							<p class="symbol"><span class="bold mr-5">{thirdPrice}</span> {thirdDescription}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</article>
</section>

<div class="py-20 center-w-grid static-logo"><SmallLogoLayers /></div> 

<Seo
	title="Dressage and jumping Lessons | Training Horseshow Information German Magic
Farm"
	description="Information on lessons, training and horse shows with Pam Bauer.  Learn about all the services offered at German Magic Farm in Dundee, Mi"
	type="WebPage"
	image="/pam-dressage-slider.webp"
/>

<style>
	article.alt-color-band > div:nth-child(odd) {
		background-color: var(--accent-fade);
	}
	.flexible-grid {
		display: flex;
		gap: 1.5em;
		margin-bottom: 1rem;
		@media (max-width: 600px) {
			flex-wrap: wrap;
		}
	}

	h3 {
		border-bottom: 1px solid #ddd;
		min-width: 12rem;
		padding-left: 1rem;
		padding-top: 0;

		@media (width < 660px) {
			width: 100%;
			margin-top: 1rem;
		}
	}

	.lessons {
		padding-block: var(--size-7);
	}

	

	.bold {
		font-weight: bold;
	}
	.service-description {
		margin-top: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.service-feature {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-radius: 1rem;
	}
	.mr-5 {
		margin-right: 0.5rem;
	}
	@media (max-width: 770px) {
		.px-20 {
			padding-left: 0;
			padding-right: 0;
		}
		.lessons h3 {
			padding-left: 0;
		}
	}
</style>
