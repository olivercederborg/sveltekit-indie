<script>
	import { afterUpdate } from 'svelte'
	import { formatDistanceToNow } from 'date-fns'

	let scrollInView

	const username = 'Oliver'
	let messages = [
		{
			author: 'John Doe',
			message: 'Hello, how are you today?',
			sentAt: new Date(2021, 5, 18, 15, 48)
		},
		{
			author: 'Oliver',
			message: "Hey John! I'm good, what about you?",
			sentAt: new Date(2021, 5, 18, 15, 52)
		},
		{
			author: 'John Doe',
			message: "Good to hear! I'm also good thanks",
			sentAt: new Date(2021, 4, 25, 14, 48)
		}
	]
	let messageInput = ''

	const sendMessage = () => {
		let newMessage = {
			author: username,
			message: messageInput,
			sentAt: new Date()
		}

		messages = [...messages, newMessage]
		messageInput = ''
	}

	afterUpdate(() => {
		scrollInView.scrollIntoView({
			behavior: 'smooth'
		})
	})
</script>

<main class="max-h-screen">
	<h1 class="text-2xl font-bold">Chat</h1>

	<ul
		id="chat"
		class="h-[600px] overflow-y-auto relative w-full flex flex-col space-y-4 py-8 px-4"
	>
		{#each messages as message}
			<li
				class="inline-flex flex-col items-start {message.author == username
					? 'items-end'
					: ''}"
			>
				{message.author}
				<span
					class="p-3 inline-block rounded-md {message.author == username
						? 'bg-yellow-500'
						: 'bg-gray-200'}"
				>
					{message.message}
				</span>
				<span>{formatDistanceToNow(message.sentAt)} ago</span>
			</li>
		{/each}
		<div bind:this={scrollInView} />
	</ul>

	<form
		on:submit|preventDefault={sendMessage}
		class="flex items-center bg-gray-100 overflow-hidden rounded-lg shadow-lg mx-4"
	>
		<input
			bind:value={messageInput}
			type="text"
			required
			placeholder="Type a message..."
			class="w-full pt-3 pb-6 bg-transparent text-gray-800 px-3 outline-none"
		/>
		<button
			type="submit"
			class="self-stretch px-5 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200 ease-in-out"
		>
			SEND
		</button>
	</form>
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
