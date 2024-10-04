const http = require('http');

const fs = require('fs');

const server = http.creatserver((req,res)=>{
    let filename = "";

    switch(req.url){
        case '/' :
            filename = "./home.html";
            break;

            case '/product' :
                filename = "./product.html";
                break;

            case '/about' :
                filename = "./about.html";
                break;

            case '/contact' :
                    filename = "./contact.html";
                    break;

            default:
                filename = "./404.html"

    }
    fs.readfile(filename,(err,record)=>{
        if(err){
            console.log(err);
            return false
        }
        res.end(record)
    })
}).listen(8000)