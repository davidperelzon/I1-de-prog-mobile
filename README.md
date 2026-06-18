# I1-de-prog-mobile
O useEffect é uma ferramenta do React que permite executar alguma ação depois que a tela é carregada ou quando alguma informação é alterada. Ele é muito útil para buscar dados, atualizar informações ou executar tarefas automáticas no aplicativo.

O array de dependências define quando o useEffect será executado. Quando ele está vazio ([]), a ação acontece apenas uma vez, logo que o componente é carregado.

useEffect(() => {
  console.log("Componente carregado");
}, []);

Se colocarmos alguma variável dentro do array, o useEffect será executado novamente sempre que essa variável mudar.

Mesmo não sendo necessário neste projeto, ele poderia ser usado para carregar exercícios salvos quando o aplicativo fosse aberto.
