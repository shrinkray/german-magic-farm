<script>
	const year = new Date().getFullYear();
</script>

<footer class="wave">
	<div class="container serif">© {year} German Magic Farm</div>
	<div class="container created-by">
		Site created by Shrinkray Interactive. If you need help with your website, or are interested in something truly amazing by a developer who cares, give us a shout! <span
			><a href="mailto:help@gregmiller.io" class="bold">Reach out today!</a></span
		>
	</div>
</footer>

<style>
	footer {
		margin-top: -40px;
		padding: 3em 0;
		background-color: hsl(48, 100%, 4%);
		color: white;
	}

	.wave {
		--mask: radial-gradient(67.08px at 50% 90px, #000000 99%, #0000 101%) calc(50% - 60px) 0/120px
				100%,
			radial-gradient(67.08px at 50% -60px, #0000 99%, #000 101%) 50% 30px/120px 100% repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
	.container {
		text-align: center;
	}

	.created-by {
		font-size: var(--fs--1);
		padding-top: var(--size-fluid-2);
	}

	span a {
		color: white;
		text-decoration: none;
	}

	span a:hover {
		text-decoration-line: underline;
		text-decoration-style: wavy;
		color: #fecf0a;
	}
</style>
