import { Category } from "../types/Category";

export const categories: Category = {
    food: { 
        title: 'Alimentação', 
        color: 'blue', 
        expense: true 
    },
    rent: {
        title: 'Aluguel',
        color: 'brown',
        expense: true
    },
    outlay: {
        title: '(-) Despesas',
        color: 'purple',
        expense: true,
    },
    proceeds:{
        title: '(+) Entradas',
        color: 'lightGreen',
        expense: false,
    },
    salary:{
        title: 'Salário',
        color: 'green',
        expense: false
    },
}