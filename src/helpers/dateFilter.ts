//Todas as funções referentes a manipulação de datas acontecem aqui
import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()} - ${now.getMonth() + 1}`; //O mês no TypeScript começa no 0, por isso usa-se o +1 para deixar o mês no nosso formato de calendário 
}

//função que vai filtrar a lista pelo mês
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    const newList: Item[] = [];
    const [year, month] = date.split('-');

    for(const i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) && //parseInt para year virar um inteiro
           (list[i].date.getMonth() + 1) === parseInt(month) //parseInt para month virar um inteiro
        )
        {
            newList.push(list[i]); //se a conta específica for do ano e mês que quer filtrar, ele retorna o item em uma nova lista 
        }
    }

    return newList;
}

//função para formatar a data para modelo brasileiro
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

//adicionar zero na frente quando dia e mês forem menores do que 10
const addZeroToDate = (n:number): string => n < 10 ? `0${n}` : `${n}`;

//transformar o mês numeral para o seu nome string e formatar exibição no formato brasileiro
export const formatCurrentMonth = (currentMonth: string): string => {
    const [year, month] = currentMonth.split('-');
    const months = [
        'Janeiro', 
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    return `${months[parseInt(month) - 1]} de ${year}`;
}
