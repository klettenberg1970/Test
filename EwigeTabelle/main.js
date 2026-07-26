import { ladeEwigeTabelle }  from './ewigeTabelle.js'


const getTabelle =  async() =>{
const tabelle = await ladeEwigeTabelle()
console.log(tabelle)
}

getTabelle()