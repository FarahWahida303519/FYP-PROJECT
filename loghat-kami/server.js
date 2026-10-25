// GUIDE: OPTIONAL NODE PREVIEW SERVER. Run node server.js from this folder, then open the printed URL. HTML/CSS/JS edits do not require changing the server.
// Optional local preview server. No database or dependencies.
const http=require('node:http');const fs=require('node:fs');const path=require('node:path');
// GUIDE: FILE ROOT AND MIME TYPES: __dirname serves this project folder; types tells the browser how to read each file extension.
const root=__dirname;const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
// GUIDE: REQUEST HANDLER: Resolve the URL, block paths outside the project, read the file, and send 400/403/404 errors where appropriate.
// GUIDE: EDIT PORT: The final listen(3000, ...) sets port 3000. 127.0.0.1 restricts preview access to this computer.
http.createServer((req,res)=>{let target;try{target=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}const file=path.resolve(root,'.'+(target==='/'?'/index.html':target));if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(data)})}).listen(3000,'127.0.0.1',()=>console.log('Loghat Kami: http://127.0.0.1:3000'));
