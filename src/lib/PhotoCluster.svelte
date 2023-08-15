<script>
	const cluster = [
		{
			photo: './pam-bauer-winter-trot.png',
			alt: './Pam Bauer riding in winter'
		},
		{
			photo: './pam-bauer-oxer.webp',
			alt: './Pam Bauer jumping an oxer'
		},
		{
			photo: './pam-bauer-teaching.webp',
			alt: './Pam Bauer teching a lesson'
		},

		{
			photo: './spotless-dressage.webp',
			alt: './Pam Bauer showing in dressage'
		}
	];
</script>

<div class="auto-grid">
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
	}
</style>
