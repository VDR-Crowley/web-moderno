const func = []

for(var i = 0 ; i < 10; i++) {
  func.push(function () {
    console.log(i)
  })
}
// testando para ver como funciona o var no escopo block
//console.log('i =', i)
// 10 será p valor mostrado no terminal

func[2]()
func[8]()