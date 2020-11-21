function compras(trabalho1, trabalho2) {
  const tomaSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor ou exclusivo
  const comprarTv32 = trabalho1 != trabalho2 // tambem é possivel usar o ou exclusivo com dirente
  const manterSaudavel = !tomaSorvete

  return {tomaSorvete, comprarTv50, comprarTv32, manterSaudavel}
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))