<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	// Client API:
	const { form, message, errors, constraints } = superForm(data.form);
</script>

<SuperDebug data={$form} />

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

<style>
	.form {
		display: flex;
		flex-direction: column;
		padding-block: var(--size-7);
	}

	label {
		font-size: var(--fs-300);
	}

	input {
		font-size: var(--fs-400);
	}
</style>
