<script>
	const year = new Date().getFullYear();
</script>

<footer class="wave">
	<div class="container">Copyright © German Magic Farm {year}</div>
</footer>

<style>
	footer {
		margin-top: -40px;
		padding: 3em 0;
		background-color: var(--footer-color);
		color: white;
	}

	.wave {
		--mask: radial-gradient(67.08px at 50% 90px, #000 99%, #0000 101%) calc(50% - 60px) 0/120px 100%,
			radial-gradient(67.08px at 50% -60px, #0000 99%, #000 101%) 50% 30px/120px 100% repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
	.container {
		text-align: center;
	}
</style>
