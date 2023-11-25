// // INPUT AND OUTPUT
// /* const readline=require('readline');
// const rl=readline.createInterface({input:process.stdin,output:process.stdout})
// rl.question('Please',(name)=>{
//     console.log(name);
//     rl.close();
// })
// rl.on('close',()=>{
//     console.log('Interface');
//     process.exit(0);
// }) */
// // READ FILE
// /* const fs=require('fs');
// let textIn=fs.readFileSync('./Files/input.txt','utf-8');
// console.log(textIn);
// let content=`Data read from input.txt :${textIn}. \n Date Created ${new Date()}`
// fs.writeFileSync('./Files/input.txt',content); */
// /* const fs=require('fs');
// fs.readFile('./Files/input.txt','utf-8',(error,data)=>{console.log(data)});console.log('cool') */
// const http = require('http');
// const fs=require('fs');
// let html=fs.readFileSync('./Template/index.html','utf-8');
// // Create a server
// const server=http.createServer((request,response)=>{
  
// console.log('A new request is created');
// console.log(response);
// path=request.url;
// if (path==='/'|| path==='/home') {
//     response.end(html);
// }
// });
// // START THE SERVER
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Server has started');
// });
const express= require('express');
let app=express();
app.get('/api/movies')
const port=3000;
app.listen(port,()=>{
    console.log('Server has started');
});