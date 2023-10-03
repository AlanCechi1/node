const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('ALan o trem')

})

app.listen(1000, () =>{
    console.log('alzin proplayer valorant')
})
