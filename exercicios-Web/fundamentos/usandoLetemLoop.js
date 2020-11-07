const func = []
for(let i = 1; i <= 10; i++) {
  func.push(function(){
    console.log(i)
  })  
}

func[2]()
func[5]()
// vendo o funcionamento do let no escopo block
// console.log('i =', i)  // Erro
