import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o proprio nome', () => {

        const participantes = [
            'Anna',
            'Catarina',
            'Juliana',
            'João',
            'Vinicius',
            'Nathalia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})