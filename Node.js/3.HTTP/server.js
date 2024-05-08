const http = require('node:http')

const PORT = 3333

// EXEMPLO 01
// const server = http.createServer((request, response) => {
//  response.write('Olá Mundo!. Modulo HTTP')    
//     response.end()
// })

//EXEMPLO 02
// const server = http.createServer((request, response) => {
//     response.writeHead(201, {"Content-Type":"text/plan"})// toda resposta é prescis ser criada
//      response.end('Usuário Criado')
//})

//EXEMPLO 03

// const server = http.createServer((request, response) => {
//     if(request.url=== '/'){//localhost:3333/
//      response.write.writeHead(200, {'Content-Type':'text/plan'})
//      response.end('pagína inicial')
//     //vai dizer quais paginas o usuario vai navegar{

//     }else if(request.url==='/sobre'){//localhost:3333/
//      response.write.writeHead(200, {'Content-Type':'text/plan'})
//      response.end('Pagína sobre')

//     }else{
//       request.writeHead(404, {'Content-Type':'text/plan'})
//       response.end('Pagina não  encontrada')

//     }
// })

// server.listen(PORT, ()=>{
//  console.log(`Servidor on PORT: ${PORT}`)

//04
// })
// const server = http.createServer((request, response) => {
//  if(request.url === '/'){
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.write("<meta charse=utf8>")
//     response.write('<h1>Página Inicial</h1');
//     response.end()
//  }else if(request.url === '/contatos'){
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.write("<meta charse=utf8>")
//     response.write('<h1>Página de contato</h1');
//     response.end()
//  }else{
//     response.writeHead(400, {'Content-Type':'text/html'});
//     response.write("<meta charse=utf8>")
//     response.write('<h1>Página Não encontrada</h1');
//     response.end()
//  }
// })
// server.listen(PORT, ()=>{
//     console.log(`Servidor on PORT: ${PORT}`)
// })


//05
const objeto ={
    nome : 'Cauã',
    idade : 17,
    profissão: 'Medico cirurgião CardioVascular'
    

}
const server = http.createServer((request, response) => {
    if(request.url === '/'){
          if(request.url === '/'){
            response.writeHead(200, {'Content-Type':'application/json'});
            response.end(JSON.stringify(objeto))
        }
          }else if(request.url === '/contatos'){
            response.writeHead(200, {'Content-Type':'application/json'});
            response.end(JSON.stringify({message: 'Página de encontro'}))
          }else{
            response.writeHead(404, {'Content-Type':'application/json'});
            response.end(JSON.stringify({message: 'Página Não encontrada'}))
      }
})
server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})
//recebo com método e respondo com a sinalização
// Importante ter sempre ter um servidor por arquivo
//Libera acesso ao servidor(listen)
//Modulo HTTP criar um servidor
//E sempre passadas em uma fução de callback, ou seja um airfunction
//stringfy(ele pega as informações e transforma em objeto json)