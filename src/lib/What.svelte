<script>
	import Button from '$lib/Button.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<div class="container flexible-grid">
	<div class="what">
		<h3>Willkommen!</h3>

		<p>
			German Magic Farm is a private training and lesson facility located in historic, Dundee
			Michigan. Our tranquil farm offers a huge outdoor arena, grass pastures, and access to trail
			riding. Resident trainer and owner; Pamela Bauer, is a German native who has traveled the
			world teaching and training dressage and jumping to horses and riders. From beginner to Grand
			Prix; German Magic Farm is happy to provide riders of all ages a relaxed fun atmosphere for
			perfecting riding skills; or for training your next equine star!
		</p>

		<p>
			Whether it's lessons in dressage, hunters, jumpers; or even a program suited to eventing
			horses, German Magic Farm can provide the perfect mixture of German and American training to
			suit your needs!
		</p>

		<Button class="secondary" id="a-button" size="medium">Let's Get Started >></Button>
	</div>
	<Contact />
</div>

<style>
	.flexible-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.flexible-grid > * {
		flex: 1;
	}

	.what > * {
		padding: 1em;
	}

	h3 {
		/* padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
		font-weight: 500; */
		border-bottom: 1px solid #ddd;
	}
</style>
