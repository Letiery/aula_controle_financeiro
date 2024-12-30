import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/Dashboard/TableArea';
import { InfoArea } from './components/Dashboard/InfoArea';
import { InputArea } from './components/Dashboard/InputArea';

const App = () => {
  const [list, setList] = useState(items); //lista completa de dados com todos os meses
  const [filteredList, setFilteredList] = useState<Item[]>([]); //filtro da lista
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //seletor de meses
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  useEffect(()=> {
    setFilteredList( filterListByMonth(list,currentMonth) );//essa função pega a lista completa e o seletor de mês atual, filtra e gera uma nova lista, retornando-a em setFilteredList
  }, [list, currentMonth]); //array vai monitorar se as variáveis list e currentMonth foram modificadas. Quando alterar o mês altera as informações

  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;

    for(const i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);//array vai monitorar filteredList, sempre que modificar, ela vai rodar essa função. Essa função recalcula o que é despesa e o que é receita
  
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    const newList = [...list]; //adiciona o novo item a lista
    newList.push(item);
    setList(newList);
  }

  return(

    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro Pessoal</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}//receitas
          expense={expense}//despesas
        /> 

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>

  );
};

export default App;