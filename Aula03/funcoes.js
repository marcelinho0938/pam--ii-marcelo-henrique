function msgTeste(){
    console.log("Funcionou minha função")
}

msgTeste()

function msgTesteArgumento (param){
    console.log("O parâmetro passado foi:", param, "e o tipo dele é", typeof(param))
}

msgTesteArgumento("Olá")

msgTesteArgumento(4)

function Soma (n1,n2){
    let result = 0

    if(typeof n1 == "number" && typeof n2 == "number"){
        return result = n1+n2
    } 

    return "Deu bom não"
}

console.log(Soma(7,4))


const funcaoArrow = () => {
    console.log("Isso é uma arrow function!")
}

funcaoArrow()
