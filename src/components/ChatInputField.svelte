<script>
	import { messages } from '$lib/stores'
	import { randomNumber } from '$lib/reusables'
	import { autoMessages } from '../chatArrays'

	let messageInput = ''

	const sendAutoMessage = () => {
		let randomMessage = {
			...autoMessages[randomNumber(0, autoMessages.length)],
			sentAt: new Date()
		}

		$messages = [...$messages, randomMessage]
	}

	const sendMessage = () => {
		let newMessage = {
			author: 'Oliver',
			message: messageInput,
			sentAt: new Date()
		}

		$messages = [...$messages, newMessage]

		setTimeout(() => {
			sendAutoMessage()
		}, 3000)
		messageInput = ''
	}
</script>

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
