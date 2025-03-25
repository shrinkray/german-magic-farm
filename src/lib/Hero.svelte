<script>
	export let herotitle = '';
	export let tagline = '';
</script>

<div class="hero-container bottom-rounded">
	<div class="hero">
		<div class="value-prop">
			<h1 class="highlighted-text-shadow">{herotitle}</h1>
			<p class="hero-tagline">
				{tagline}
			</p>
		</div>
	</div>
</div>

<style>
	:root {
		--bg-image: url('./german-magic-bg.webp');
		--bg-opacity: 0;
		--visibility: visible;
		--bg-size: cover;
		--margin-block: 1rem;
	}

	@layer demo {
		.highlighted-text-shadow {
			text-shadow:
      /* regular text-shadow */
				0 0.15ch 15px var(--shadow),
				/* text-shadow highlight */ 0 -2px 0 var(--highlight);
		}
	}

	@layer demo {
		:root {
			--hue: 0; /* change me */
			--bg: oklch(59% 0 var(--hue));
			--text: oklch(94% 0 var(--hue));
			--shadow: oklch(35% 0 var(--hue));
			--highlight: oklch(98% 0 var(--hue));
		}
	}

	.hero-container {
		max-height: 470px;
		overflow: hidden;
		margin-bottom: 2rem;
	}
	.hero {
		padding: 9em 0;
		color: white;
		background-image: var(--bg-image);
		background-position: center top;
		background-repeat: no-repeat;
		background-size: var(--bg-size);
		position: relative;
		isolation: isolate;
	}

	.hero::after {
		content: '';
		position: absolute;
		z-index: -1;
		/* shorthaand for top btm left right) */
		inset: 0;
		background: grey;
		opacity: var(--bg-opacity);
	}

	.hero-tagline {
		font-size: var(--fs-400);
		font-family: 'Montserrat', sans-serif;
		color: white;
		line-height: 1.2;
		margin-top: 0;
	}

	p {
		color: var(--heading-color);
		font-size: var(--fs-400);
		font-weight: bold;
		/* line height from open props */
		line-height: var(--font-lineheight-4);
		margin-block: 1em;
	}
</style>
