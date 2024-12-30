import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
    const handlePrevMonth = () => { //função para diminuir o mês e voltar para o mês anterior
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1 );//transforma em data real, para não ter problema de retornar para mês 0 ou -1
        currentDate.setMonth( currentDate.getMonth() - 1 ); //diminui um mês
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);//função para formatar para ano - mês
    }

    const handleNextMonth = () => { //função para aumentar o mês e ir para o próximo mês 
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1 );//transforma em data real, para não ter problema de retornar para mês 0 ou -1
        currentDate.setMonth( currentDate.getMonth() + 1 ); //aumenta um mês
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
    }
   
    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense}
                    color={(income-expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}