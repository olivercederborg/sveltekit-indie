<script>
	import TodoItem from '$components/TodoItem.svelte'
	import { todos } from '$lib/stores'

	let addTodoInput = ''

	$: completedTodos = $todos.filter((item) => item.isCompleted)

	$: numOfIncompleteTodos = $todos?.length - completedTodos?.length

	const addTodo = () => {
		let newTodo = {
			name: addTodoInput,
			isCompleted: false
		}

		$todos = [...$todos, newTodo]
		addTodoInput = ''
	}

	const removeTodo = (event) => {
		$todos.splice(event.detail.index, 1)
		$todos = $todos
	}
</script>

<svelte:head>
	<title>
		{numOfIncompleteTodos > 0
			? `${numOfIncompleteTodos} ${
					numOfIncompleteTodos > 1 ? 'todos' : 'todo'
			  }`
			: 'Todos'} - Indie
	</title>
</svelte:head>

<main class="container mt-24">
	<form on:submit|preventDefault={addTodo} class="max-w-xl mx-auto">
		<label for="addTodo" class="flex flex-col">
			Add todo
			<div class="flex">
				<input
					bind:value={addTodoInput}
					id="addTodo"
					type="text"
					placeholder="Enter a task i.e. 'Buy milk' "
					class="p-3 border w-full rounded-xl outline-none focus-within:border-black"
				/>
			</div>
		</label>
	</form>

	{#if $todos.length}
		<p class="text-center mt-8 mb-2">
			You have {numOfIncompleteTodos} incomplete
			{#if numOfIncompleteTodos == 1}todo{:else}todos{/if}.
		</p>
		<ul class="max-w-xl mx-auto space-y-3">
			{#each $todos as todo, i}
				<TodoItem
					{...todo}
					index={i}
					on:removeTodo={removeTodo}
					on:toggleChecked={() => (todo.isCompleted = !todo.isCompleted)}
				/>
			{/each}
		</ul>
	{/if}
</main>
