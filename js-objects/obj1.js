const person ={
    firstname:"dipti",
    lastname: 'shrivas',
    hobbies: ['gym', 'coding'],
    ismarried:false,
    hasbf:false,
    getfullName: function (){
        return 'dipti shrivas'
    },
    //obj k andr ek obj
address: {


    hno:26,
    street:1,
    country: 'IN',
    state: 'MP'
    }

}
console.log(person.address.state) 

const remote = {
    color: 'black',
    brand: 'xyz',
    dimension : {
        height: 1,
        width: 3
    }
    // turnoff :function (){
     
    // }
    // volumeUp: function (){

    // }
}