<script>
	const pics = [
		{
			title: 'SERVICES',
			photo: './pam-bauer-horseshow-kid.jpg',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
		},
		{
			title: 'MEET PAM',
			photo: './pam-bauer-teaching.jpg',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
		},
		{
			title: 'CLINICS',
			photo: './jumping-clinic.jpg',
			excerpt: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit'
		}
	];
</script>

<div class="container">
	<div class="grid">
		{#each pics as { title, photo, excerpt }}
			<div>
				<h3>{title}</h3>
				<img class="square" src={photo} alt={title} />
				<p>{excerpt}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	.square {
		aspect-ratio: var(--ratio-square);
	}
</style>
