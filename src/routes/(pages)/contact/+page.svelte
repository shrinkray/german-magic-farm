<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Seo from '$lib/Seo.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	// Client API:
	const { form, message, errors, constraints } = superForm(data.form);
</script>

<!-- <SuperDebug data={$form} /> -->

<div class="container">
	<form class="form" method="POST">
		<label for="name">Name</label>
		<input
			type="text"
			name="name"
			aria-invalid={$errors.name ? 'true' : undefined}
			bind:value={$form.name}
			{...$constraints.name}
		/>
		{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

		<label for="email">E-mail</label>
		<input
			type="email"
			name="email"
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
			{...$constraints.email}
		/>
		{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

		<label for="body">Your message</label>
		<textarea
			name="body"
			cols="30"
			rows="10"
			aria-invalid={$errors.body ? 'true' : undefined}
			bind:value={$form.body}
			{...$constraints.body}
		/>
		<!-- <textarea name="body" id="" cols="30" rows="10" /> -->
		{#if $errors.body}<span class="invalid">{$errors.body}</span>{/if}

		<div><button>Submit</button></div>

		<div>
			{#if $message}<p>{$message}</p>{/if}
		</div>
	</form>
</div>

<div class="larger-wrapper contact-map">
	<div><Contact /></div>
	<div class="map">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11866.804920549557!2d-83.6402403380172!3d41.96375198592071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1435260600940"
			width="100%"
			height="350"
			frameborder="0"
			style="border:0"
			allowfullscreen=""
		/>
	</div>
</div>

<Seo
	title="Directions | Contact info German Magic Farm"
	description="Directions contact and Map to German Magic Farm"
	type="WebPage"
	image="./german-magic-farm-logo-short.svg"
/>

<style>
	h2 {
	}

	form {
		padding-block: var(--size-7);
	}
	.contact-map {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
		padding-block: var(--size-7);
	}

	.contact-map {
		flex: 1;
	}

	.map {
		width: 100%;

		@media (width > 965px) {
			width: 65%;
		}
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75em 1em;
		border-radius: 0.25em;
		border: 1px solid #999;
	}

	textarea {
		font-size: var(--fs-300);
	}
	.form-group {
		margin-bottom: 1.5em;
	}
	label {
		display: block;
		padding-bottom: 0.5em;
	}
	.success {
		color: rgb(8, 115, 8);
	}
	.error {
		border: 1px solid red;
	}
	.red {
		color: red;
	}

	button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		color: white;
		font-size: 1em;
		cursor: pointer;
	}
</style>
