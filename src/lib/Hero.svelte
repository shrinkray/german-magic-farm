<script>
	export let herotitle = 'German Magic Farm';
	export let tagline = 'My home page tagline ';
</script>

<div class="hero">
	<div class="container">
		<!-- <h2>{herotitle}</h2> -->
		<p>
			{tagline}
		</p>
	</div>
</div>

<style>
	:root {
		--bg-image: url('german-magic-bg.jpg');
	}
	.hero {
		padding: 11em 0;

		color: white;
		background-image: var(--bg-image);
		background-position: center;
		background-repeat: no-repeat;
	}
	h2 {
		margin: 0;
		font-size: 3.5em;
		font-weight: 500;
		color: var(--heading-color);
	}
	p {
		color: #ddd;
		font-size: 1.1em;
		line-height: 1.6;
	}
</style>
