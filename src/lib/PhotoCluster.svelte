<script>
	const cluster = [
		{
			photo: './pam-bauer-winter-trot1.webp',
			alt: './Pam Bauer riding in winter'
		},
		{
			photo: './pam-bauer-oxer.webp',
			alt: './Pam Bauer jumping an oxer'
		},
		{
			photo: './pam-bauer-teaching-square.webp',
			alt: './Pam Bauer teching a lesson'
		},

		{
			photo: './spotless-dressage.webp',
			alt: './Pam Bauer showing in dressage'
		}
	];
</script>

<div class="hero auto-grid photo-grid">
	{#each cluster as { photo, alt }}
		<div>
			<img class="square" src={photo} {alt} />
		</div>
	{/each}
</div>

<style>
	img {
		object-fit: cover;
		object-position: center;
		border-radius: 6px;
	}
	.hero {
		color: white;
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

</style>
