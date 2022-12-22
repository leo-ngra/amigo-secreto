import React from 'react'
import { RecoilRoot } from 'recoil'
import { render, screen } from '@testing-library/react'

import Sorteio from './Sorteio'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes'

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participantes = [
        'Ana',
        'Catarina',
        'Jorel'
    ]
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })
})