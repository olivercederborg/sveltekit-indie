<script>
	import { todos } from '$lib/stores'

	let searchValue = ''
	let searchResults = []

	const checkName = (name, string) => {
		let pattern = string
			.split('')
			.map((x) => {
				return `(?=.*${x})`
			})
			.join('')
		let regex = new RegExp(`${pattern}`, 'g')
		return name.match(regex)
	}

	$: if (typeof document !== 'undefined') {
		console.log(document.activeElement)
	}

	$: if (searchValue) {
		let searchString = searchValue.toLowerCase().substring(0, 5)

		searchResults = $todos.filter((item) => {
			let substring = item.name.substring(0, 5).toLowerCase()
			return (
				item.name.toLowerCase().includes(searchString) ||
				checkName(substring, searchString)
			)
		})
	} else {
		searchResults = []
	}
</script>

<div class="relative z-10">
	<form>
		<div class="relative">
			<span
				class="absolute h-full flex items-center w-14 justify-center text-black"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					focusable="false"
					width="1.5rem"
					height="1.5rem"
					style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
					preserveAspectRatio="xMidYMid meet"
					><g
						fill="none"
						stroke="#444"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="11" cy="11" r="8" /><path
							d="M21 21l-4.35-4.35"
						/></g
					></svg
				>
			</span>
			<input
				type="text"
				placeholder="Search for todos"
				bind:value={searchValue}
				class="border py-3 px-4 pl-12 rounded-lg outline-none focus:border-black min-w-[500px] hover:border-gray-400 transition-colors duration-200 ease-in-out"
			/>
		</div>
	</form>

	{#if searchResults.length}
		<ul
			class="space-y-6 absolute top-16 bg-white shadow-lg w-full p-3 rounded-lg"
		>
			<li class="my-3 mx-2">
				We found
				<strong>{searchResults.length}</strong>
				{#if searchResults.length === 1}result{:else}results{/if}
				from your search.
			</li>
			{#each searchResults as item}
				<a
					href="/"
					class="flex items-center hover:bg-gray-100 rounded-md p-2 cursor-pointer"
					on:click={() => (searchValue = '')}
				>
					<div class="flex flex-col">
						<h4 class="font-semibold text-lg">{item.name}</h4>
						{#if item.isCompleted}
							<p class="text-green-600">Completed</p>
						{:else}
							<p class="text-red-500">Incomplete</p>
						{/if}
					</div>
				</a>
			{/each}
		</ul>
	{:else if searchValue}
		<ul
			class="space-y-6 absolute top-16 bg-white shadow-lg w-full p-3 rounded-lg"
		>
			<li class="my-3 mx-2">We found no results from your search.</li>
		</ul>
	{/if}
</div>
