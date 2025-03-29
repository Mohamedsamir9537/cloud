const { readFileSync } = require("fs");
const http = require("http");

const homepage = readFileSync('./navbar-app/index.html')
const homestyle = readFileSync('./navbar-app/styles.css')
const homeimage = readFileSync('./navbar-app/logo.svg')
const homlogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{
    const url = req.url
    if(url==='/'){console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
            res.write(homestyle)
            res.end()
            
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
            res.write(homeimage)
            res.end()
            
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
            res.write(homlogic)
            res.end()
            
    }

            
    
   res.end()
    
});





server.listen(5000)












