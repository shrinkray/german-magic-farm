<script>
	const year = new Date().getFullYear();
</script>

<footer class="wave">
	<div class="serif container">© {year} German Magic Farm</div>
	<div class="created-by container">
		<span
			>Site created by <a
				href="https://shrinkraylabs.com"
				target="_blank"
				rel="noopener noreferrer"
				class="bold">Shrinkray Interactive</a
			>.</span
		><br />If you need help with your website, or are interested in something truly amazing by a
		developer who cares, give us a shout!
		<span><a href="mailto:help@gregmiller.io" class="bold">Reach out today!</a></span>
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

	span a {
		color: white;
		text-decoration: none;
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
	}

	span a:hover {
		text-decoration-line: underline;
		text-decoration-style: wavy;
		color: #fecf0a;
	}
</style>
