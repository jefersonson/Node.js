import http from 'node:http'

const PORT = 3333
//5 rotas.
//=> GET - Listar todos os usuarios /usuarios.
//=> GET - Litar um unico usuario Ex: /usuarios/.
//=> POST - Atualizar um usuario.
// => Put - cria novo recurso ou subsititui uma representação do recurso de destino
//=> Delete - Deletar um usuario.
//três tipos de requisição
//=> body - Via formulário =>POST
// => ROUTER - parâmetros => GET, PUT, DELETE, PATH
//=> QUERY - /usuarios?param1=valor1&param=valor2 - GET



const usuarios = [];// Banco de dados
const server = http.createServer((request, response) =>{
    const {method, url} = request
    //localhost:3333/usuario/{id}
    //Disponibilizar a API para front-end
response.setHeader('Access-Control-Allow-Oringn', '*');
response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELET');
    response.setHeader('Access-Control-Allow-Headrs', "Content-Type");
    
   if(method === "GET" && url === "/usuario"){
    response.writeHead(200,{"Content-type": "applications/json"})
    response.end(JSON.stringify(usuarios))

   }else if (method=== "POST" && url.startsWith("/usuarios/")){
    let body = ''
    request.on('data', (chunk)=> {
     body += chunk.toString()
    })
    request.on('end', ()=> {
        const novoUsuario = JSON.parse(body)
        novoUsuario.id = usuarios.length + 1
        usuarios.push(novoUsuario)
        response.writeHead(201, {"Content-Type": "application/json"})
        response.end(JSON.stringify(novoUsuario))
    })
    response.end('POST/usuario')

   }else if (method=== "PUT" && url.startsWith("/usuarios/")){
    // 1º Encontrar um susario.
    const id = parseInt(url.split('/')[2])
    // 2º Receber as onformações atualizadas.
    let body = ''
    request.on('data', (chunk) => 
    body += chunk.toString()
    )
    request.on(`end`, ()=> {
        const usuarioAtualizado = JSON.parse(body)
    })
    // 3º Encontrar e validar o usuario
    const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id)
    response.end()
    if(indexUsuario === -1){
    response.writeHead(404, {'Content-Type':'application'/'json'})
    response.end(JSON.stringify({message: 'usuario não exite'}))
    }
    // 4º Atuaçizar os dados.
    usuarios[indexUsuario] = {...usuarios[indexUsuario], ...usuarioAtualizado}
    // 5º Anviar uma resapota de confirmação.
    response.writeHead(200, {'Content-Type':'application/json'})
    response.end(JSON.stringify(usuarios[indexUsuario]))
    //Eu siu o melhor/ I am the best
   }else if (method=== "DELETE" && url.startsWith("/usuarios/")){
    response.end('DELETE/usuario')

   }else if (method=== "GET" && url.startsWith("/usuarios/")){

   const id = url.split('/')[2]
   const usuario = usuarios.find((usuario) => usuario.id == id)
   if(!usuario){
   response.writeHead(404, {'Content-Type' : 'aplication/json'})
   response.end(JSON.stringify({message: 'Usuario não encontrado'}))
   return
}
response.writeHead(200,{'Content-Type' : 'aplication/json'})
response.end(JSON.stringify(usuario))
console.log(usuario)
response.end(id)

   }else{
   response.writeHead(404, {"Content-type": "application/json"});
   response.end(JSON.stringify({message: "Rota não existe"}))
   }
})
server.listen(PORT, () => {
    console.log(`Servidor está ativo: ${PORT}`)
})
// Split => [locahost:3333, usuarios, 1].
// Método nativo chamado splite feito para recortar algum tipo de parte exata do código.
// FindeIndex => retorna o índice no array do primeiro elemento pra realizar a função provida.
// Onde a palavra Find no inglês significa encontrar. 
// O metodo splice altera o conteúdo de uma lista, a dicionando novos elemtos enquanto remove outros.