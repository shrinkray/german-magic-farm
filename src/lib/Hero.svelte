<script>
	export let herotitle = '';
	export let tagline = '';
</script>

<div class="hero">
	<div class="container">
		<h2>{herotitle}</h2>
		<p>
			{tagline}
		</p>
	</div>
</div>

<style>
	:root {
		--bg-image: url('german-magic-bg.webp');
		--bg-opacity: 0;
		--visibility: visible;
		--bg-size: cover;
	}
	.hero {
		padding: 11em 0;

		color: white;
		background-image: var(--bg-image);
		background-position: center;
		background-repeat: no-repeat;
		background-size: var(--bg-size);
		margin-block: 1em;
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
		color: #ddd;
		font-size: 1.1em;
	}
</style>
