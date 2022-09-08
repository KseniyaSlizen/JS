// создаем переменную с типом данных str
let surname = "Slizen"

console.log(surname)

let age = 22
console.log(age)

//let person = surname + "" + age
console.log(surname + " " + age)

let user_age = 30
let work_period = 10

let total_time = user_age + work_period

// неявное приведения типа
console.log("total time =" + total_time, typeof("total time =" + total_time)) //если используем плюс, то итог выйдет в значении стринг
console.log("total time =", total_time, typeof("total time =", total_time))  //если используем заяптую, то итог выйдет в значении числа

let total_time2 = user_age * work_period
console.log("total time =", total_time2)

//тип данных boolean
let morning = false
console.log("morning = ", morning, typeof(morning))

let evening = true
console.log("morning = ", evening, typeof(evening))

// тип данных через опирации сравнения
let apples = 15
let cherry = 20

let compare = apples <= cherry
console.log("compare =", compare)


//операции ветвления
if (compare){
    console.log("Compare is", compare)
} else if (apples == 15) {
    console.log("apples == ", apples)
} else{
    console.log("!! Compare is", false)
}