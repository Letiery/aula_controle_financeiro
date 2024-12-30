import * as C from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({title, value, color}: Props) => {

    const dinheiro = (value); //Pegar o número que representa valor e colocar dentro da variável dinheiro
    
    const dinheiroFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(dinheiro); //transformar o valor dinheiro para o formato nacional de moeda
      
    return (

        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{dinheiroFormatado}</C.Info>
        </C.Container>
    );
}