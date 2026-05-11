import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Todo from '../Todos/Todo'

describe('Todo', () => {
	it('renders todo text', () => {
		const todo = { text: 'Do work', done: false }

		render(
			<Todo
				todo={todo}
				deleteTodo={vi.fn()}
				completeTodo={vi.fn()}
			/>
		)

		expect(screen.getByText('Do work')).toBeDefined()
	})
})
