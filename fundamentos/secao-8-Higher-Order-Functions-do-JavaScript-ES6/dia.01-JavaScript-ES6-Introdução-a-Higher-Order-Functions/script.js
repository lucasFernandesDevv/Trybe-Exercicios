const gerador = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_')
    return {nome, email : `${email}@trybe.com`}
}
const newEmployees = (funcionario) => {
    const employees = {
      id1: funcionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(gerador))






