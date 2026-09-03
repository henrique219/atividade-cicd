import { afterEach, expect, test } from 'vitest'
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react'
import App from './App'

afterEach(() => {
  cleanup()
})

test('o contador começa em zero', () => {
  render(<App />)

  expect(
    screen.getByText('Cliques: 0')
  ).toBeInTheDocument()
})

test('o contador aumenta ao clicar no botão', () => {
  render(<App />)

  const botao = screen.getByRole('button', {
    name: 'Adicionar clique',
  })

  fireEvent.click(botao)

  expect(
    screen.getByText('Cliques: 1')
  ).toBeInTheDocument()
})
