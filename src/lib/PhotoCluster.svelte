<script>
	const cluster = [
		{
			photo: './pam-bauer-winter-trot.png',
			alt: './Pam Bauer riding in winter'
		},
		{
			photo: './pam-bauer-oxer.jpg',
			alt: './Pam Bauer jumping an oxer'
		},
		{
			photo: './pam-bauer-teaching.jpg',
			alt: './Pam Bauer teching a lesson'
		},

		{
			photo: './spotless-dressage.jpg',
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
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
