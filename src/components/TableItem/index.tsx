import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
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
                    R$ {item.value}
                </C.Value>
            </C.TacleColumn>
        </C.TableLine>
    );
}