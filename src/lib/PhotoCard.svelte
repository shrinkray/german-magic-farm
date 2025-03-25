<script>
	const pics = [
		{
			title: 'SERVICES',
			photo: './pam-bauer-horseshow-kid.webp',
			link: './services',
			excerpt:
				'Group and individual lessons, training for your OR your horse, or test out new skills at a horse show!'
		},
		{
			title: 'MEET PAM',
			photo: './pam-bauer-teaching.webp',
			link: './meet-pam-bauer',
			excerpt: 'Meet Pam Bauer, resident trainer & owner at German Magic Farm'
		},
		{
			title: 'CLINICS',
			photo: './jumping-clinic.webp',
			link: './clinics',
			excerpt: 'Transform rider and horse skills. Learn, practice and have fun at a clinic! '
		}
	];
</script>

<section class="section my-60">
	<div class="container">
		<div class="auto-grid">
			{#each pics as { title, photo, link, excerpt }}
				<div class="card flow-bottom">
					<h3>{title}</h3>
					<a href={link}><img class="square" src={photo} alt={title} /> </a>
					<div class="excerpt">{excerpt}</div>
					<a class="button" href={link}>Learn more</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.flow-bottom > * {
		/* margin-bottom: 2em; */
		/* margin-block: 2rem; */
	}

	img {
		margin-bottom: 2rem;
	}

	.auto-grid {
		gap: 1em;

		@media (width < 395px) {
			display: block;
		}
	}

	.excerpt {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	img {
		width: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: 6px;
		transition: all 1s ease;
	}

	img:hover {
		transform: scale(1.08);
		/* transform: skewX(-3deg); */
	}

	.button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		text-decoration: none;
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 1em;
		cursor: pointer;
		padding: 0.5em 1em;
	}

	.button:hover {
		text-decoration: underline;
		transform: scale(0.2);
	}
</style>
