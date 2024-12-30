import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    
    const money = (item.value); //Pegar o número que representa valor e colocar dentro da variável money
    
    const formatMoney = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(money); //transformar o valor money para o formato nacional de moeda


    return(
        <C.TableLine>
            <C.TacleColumn>{formatDate(item.date)}</C.TacleColumn>
            <C.TacleColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TacleColumn>
            <C.TacleColumn>{item.title}</C.TacleColumn>
            <C.TacleColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    {formatMoney}
                </C.Value>
            </C.TacleColumn>
        </C.TableLine>
    );
}