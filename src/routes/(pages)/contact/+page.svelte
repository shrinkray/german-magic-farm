<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Seo from '$lib/Seo.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Button from '$lib/Button.svelte';
	import SmallLogoLayers from '$lib/SmallLogoLayers.svelte';
	export let data: PageData;

	// Client API:
	const { form, message, errors, constraints } = superForm(data.form);
</script>

<!-- <SuperDebug data={$form} /> -->

<section class="py-30 container">
	<div class="section">
		<h1>Questions?</h1>
		<p class="pull-quote section-description">
			Please fill out the form below to contact us. We will get back to you as soon as possible.
		</p>
		<form class="form" method="POST">
			<label for="name">Name</label>
			<input
				class=""
				type="text"
				name="name"
				aria-invalid={$errors.name ? 'true' : undefined}
				bind:value={$form.name}
				{...$constraints.name}
			/>
			{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

			<label for="email">E-mail</label>
			<input
				class=""
				type="email"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
				{...$constraints.email}
			/>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

			<label for="body">Your message</label>
			<textarea
				class=""
				name="body"
				cols="30"
				rows="10"
				aria-invalid={$errors.body ? 'true' : undefined}
				bind:value={$form.body}
				{...$constraints.body}
			/>
			<!-- <textarea name="body" id="" cols="30" rows="10" /> -->
			{#if $errors.body}<span class="invalid">{$errors.body}</span>{/if}

			<div class="space-y-20"></div>

			<div><Button class="secondary bold" size="medium">Submit »</Button></div>

			<div>
				{#if $message}<p>{$message}</p>{/if}
			</div>
		</form>
	</div>
</section>

<section class="section">
	<div class="larger-wrapper contact-map">
		<div class="contact-info col"><Contact /></div>
		<div class="map col">
			<div class="map-container">
				<div class="map-overlay"></div>
				<iframe
					title="Map showing location of German Magic Farm in Dundee, Michigan"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.3392084379652!2d-83.63739278065546!3d41.96147313325206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c9dcaecb22297%3A0x9a8a3080e9bc5486!2sGerman%20Magic%20Farm!5e0!3m2!1sen!2sus!4v1742695523556!5m2!1sen!2sus"
					width="100%"
					height="350"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
	<div class="center-w-grid static-logo"><SmallLogoLayers /></div>
</section>

<Seo
	title="Directions | Contact info German Magic Farm"
	description="Directions contact and Map to German Magic Farm"
	type="WebPage"
	image="./german-magic-farm-logo-short.svg"
/>

<style>
	form {
		padding-block: var(--size-7);
	}

	label {
		font-family: 'Montserrat', sans-serif;
		margin-top: 1rem;
	}
	.contact-map {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
		padding-block: var(--size-7);
		padding-right: 2rem;
		background-color: var(--accent-fade);
		margin-bottom: 2rem;
		border-radius: 1rem;
	}

	.contact-info {
		padding-left: 2.5rem;
	}
	@media (width < 965px) {
		.contact-info {
			width: 100%;
		}
	}

	.map {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (width > 965px) {
			width: 58%;
		}
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75em 1em;
		border-radius: 0.25em;
		border: 1px solid #999;
		color: var(--input-color);
		font-size: var(--fs-300);
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

	.button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		color: white;
		font-size: 1em;
		cursor: pointer;
	}

	.map-container {
		position: relative;
		width: 100%;
		height: 350px;
		border-radius: 0.5rem;
		@media (width < 965px) {
			margin-left: 2rem;
		}
	}

	.map-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(89, 76, 60, 0.3);
		pointer-events: none;
		z-index: 1;
		background-color: rgb(156, 156, 156); /* neutral gray */
    	mix-blend-mode: saturation;
		border-radius: 0.5rem;
	}

	iframe {
		position: relative;
		border-radius: 0.5rem;
	}
</style>
