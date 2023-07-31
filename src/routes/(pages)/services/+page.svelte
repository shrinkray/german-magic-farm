<script>
	import Seo from '$lib/Seo.svelte';
	import Contact from '$lib/Contact.svelte';
	import services from '$lib/data/services.json';
	import Hero from '$lib/Hero.svelte';
	import lessons from '$lib/data/lessons.json';

	let showThird = true;
</script>

<Hero
	herotitle="About Page Title"
	tagline="About pg tagline"
	--heading-color="pink"
	--bg-image="url(pam-dressage-slider.jpg)"
/>
<div class="container grid">
	<div class="what">
		<h1>Services at German Magic Farm</h1>

		<p class="content">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae
			animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam
			laboriosam. Repellat explicabo, maiores!
		</p>
		{#each services as { content, title, amount }, index}
			<h2>{title}</h2>
			<p class="bold">{amount}</p>
			<p class="content">{content}</p>
		{/each}
	</div>
	<div>
		{#each lessons as { kindOfLesson, firstPrice, firstDescription, secondPrice, secondDescription, thirdPrice, thirdDescription }}
			<div class="flexible-grid">
				<h3>{kindOfLesson}</h3>
				<div class="nodollarsign">
					<p>${firstPrice}{firstDescription}</p>
					<p>${secondPrice} {secondDescription}</p>
					{#if showThird}
						<p class="symbol">${thirdPrice} {thirdDescription}</p>
					{/if}
				</div>
			</div>

			<p />
		{/each}
	</div>

	<Contact />
</div>
<div />
<Seo title="Services | German Magic Farm" description="This is about page" type="WebPage" />

<style>
	/*  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  .what {
    grid-column: span 8;
  } */

	.flexible-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		padding-bottom: var(--size-7);
	}

	h3 {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
		font-weight: 500;
		border-bottom: 1px solid #ddd;
	}

	/*div.nodollarsign > p:nth-last-child(odd) {
		display: none;
	} */

	/*div.nodollarsign p:nth-child(odd) {
		display: none;
	} */

	.bold {
		font-weight: bold;
	}

	.content {
		line-height: 1.6;
		box-shadow: var(--shadow-4);
	}
</style>
