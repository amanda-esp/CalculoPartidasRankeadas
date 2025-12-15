//Função para retornar o saldo de vitorias
function saldoVitorias(vitorias, derrotas){
	return vitorias - derrotas
}
//Função para retornar o nível do herói
function nivel(vitorias){
	let valorNivel
	switch(true){
      case vitorias <= 10:
      	valorNivel = "Ferro"
      break

      case vitorias > 10 && vitorias <= 20:
      	valorNivel = "Bronze"
      break

      case vitorias > 20 && vitorias <= 50:.
      	valorNivel = "Prata"
      break

      case vitorias > 50 && vitorias <= 80:
      	valorNivel = "Ouro"
      break

      case vitorias > 80 && vitorias <= 90:
      	valorNivel = "Diamante"
      break

      case vitorias > 90 && vitorias <= 100:
      	valorNivel = "Lendário"
      break
      
      default:
      	valorNivel = "Imortal"
      break
    }
    return valorNivel
}
//Nome do herói, número de vitórias e número de derrotas
let herois = [
  ["Ana",85,12],
  ["Benício",15,7],
  ["Carol",40,20],
  ["Danilo",150,30]
]

//Repetição para acessar os dados de todos os heróis 
for(let i=0;i<4;i++){
  let saldoHeroi = saldoVitorias(herois[i][1],herois[i][2])
  let nivelHeroi = nivel(saldoHeroi)

  console.log(`O Herói ${herois[i][0]} possui saldo de ${saldoHeroi} vitorias e está no nível ${nivelHeroi}`)
}
