// Servidor local de previsualización: node serve.js  →  http://localhost:3100
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname,PORT=process.env.PORT||3100;
const MIME={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.mp4':'video/mp4','.ico':'image/x-icon','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.json':'application/json','.svg':'image/svg+xml'};
http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p.endsWith('/'))p+='index.html';let f=path.join(ROOT,p);
if(fs.existsSync(f)&&fs.statSync(f).isDirectory()){res.writeHead(301,{location:p+'/'});res.end();return;}
if(!fs.existsSync(f)){res.writeHead(404,{'content-type':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(ROOT,'404.html')));return;}
res.writeHead(200,{'content-type':MIME[path.extname(f)]||'application/octet-stream','cache-control':'no-cache'});fs.createReadStream(f).pipe(res);}).listen(PORT,()=>console.log('v2 en http://localhost:'+PORT));
