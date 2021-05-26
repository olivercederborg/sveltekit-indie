<script>
	import { afterUpdate, onMount } from 'svelte'
	import { messages } from '$lib/stores.js'
	import ChatMessage from '$components/ChatMessage.svelte'
	import ChatInputField from '$components/ChatInputField.svelte'

	let scrollInView

	afterUpdate(() => {
		scrollInView.scrollIntoView({
			behavior: 'smooth'
		})
	})

	onMount(() => {
		scrollInView.scrollIntoView({
			behavior: 'smooth'
		})
	})
</script>

<svelte:head>
	<title>Chat - Indie</title>
</svelte:head>

<main class="max-h-screen">
	<ul
		id="chat"
		class="h-[600px] overflow-y-auto relative w-full flex flex-col space-y-4 py-8 px-4"
	>
		{#each $messages as message, i (i)}
			<ChatMessage {message} />
		{/each}
		<div bind:this={scrollInView} />
	</ul>

	<ChatInputField />
</main>

<style>
	#chat::-webkit-scrollbar {
		width: 6px;
	}
	#chat::-webkit-scrollbar-track {
		border-radius: 10px;
	}
	#chat::-webkit-scrollbar-thumb {
		background: hsla(0, 0%, 0%, 0.4);
		border-radius: 10px;
	}
</style>
