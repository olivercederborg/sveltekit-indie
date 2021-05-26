import { writable } from 'svelte/store'

export const messages = writable([
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
])

export const username = writable('Oliver')
