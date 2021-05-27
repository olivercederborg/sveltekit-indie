<script>
	import { createEventDispatcher } from 'svelte'
	import Checkmark20 from 'carbon-icons-svelte/lib/Checkmark20'
	import TrashCan20 from 'carbon-icons-svelte/lib/TrashCan20'

	const dispatch = createEventDispatcher()

	export let name
	export let index
	export let isCompleted

	const deleteTodo = () => {
		dispatch('removeTodo', {
			index
		})
	}

	const toggleChecked = () => {
		dispatch('toggleChecked')
	}
</script>

<li
	class="p-2 w-full flex justify-between rounded-xl overflow-hidden transition-shadow duration-200 ease-in-out {isCompleted
		? 'ring-1 ring-gray-200 bg-gray-50'
		: 'shadow-md'}"
>
	<div class="flex items-center">
		<span
			on:click={toggleChecked}
			class="h-8 w-8 rounded-full cursor-pointer mr-4 grid place-items-center border-none outline-none bg-white ring-1 ring-gray-200"
		>
			{#if isCompleted}
				<Checkmark20 class="text-gray-700" />
			{/if}
		</span>
		<span class={isCompleted && 'line-through text-gray-400'}>{name}</span>
	</div>
	<span
		on:click={deleteTodo}
		class="h-8 w-8 rounded-full cursor-pointer grid place-items-center border-none outline-none bg-transparent text-white"
	>
		<TrashCan20 class="text-gray-700" />
	</span>
</li>
