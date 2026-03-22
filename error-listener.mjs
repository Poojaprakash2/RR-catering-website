import http from 'http';
http.createServer((req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    res.end();
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', () => {
    console.log('\n\n!!! REACT CRASH DIAGNOSTIC !!!');
    console.log(body);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n');
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    res.end('ok');
    process.exit(0);
  });
}).listen(9999, () => console.log('Listening for errors on 9999...'));
