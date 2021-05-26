<script>
	import { formatDistanceToNow } from 'date-fns'
	import { username } from '$lib/stores'

	export let message
</script>

<li
	class="inline-flex flex-col items-start {message.author == $username &&
		'items-end'}"
>
	{message.author}
	<span
		class="inline-flex flex-col group"
		class:items-end={message.author == $username}
	>
		<span
			class="p-3 inline-block rounded-md {message.author == $username
				? 'bg-yellow-500'
				: 'bg-gray-200'}"
		>
			{message.message}
		</span>
		<span
			class="transform -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-200 ease-in-out translate-x-0 text-sm text-gray-500 mt-1"
			>{formatDistanceToNow(message.sentAt)} ago</span
		>
	</span>
</li>
