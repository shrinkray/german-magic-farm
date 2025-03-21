<script>
	export let herotitle = '';
	export let tagline = '';
</script>

<div class="hero">
	<div class="container">
		<h1 class="highlighted-text-shadow">{herotitle}</h1>
		<p>
			{tagline}
		</p>
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
      /* regular text-shadow */ 0 0.15ch 15px var(--shadow),
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

	.hero {
		padding: 9em 0;
		color: white;
		background-image: var(--bg-image);
		background-position: center top;
		background-repeat: no-repeat;
		background-size: var(--bg-size);
		margin-block: var(--margin-block);
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

	h2 {
		margin: 0;
		/* font-size: 3.5em;
		font-weight: 500; */
		color: var(--heading-color);
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
