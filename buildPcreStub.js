const spawn = require('child_process').spawn;
const ocamlc = spawn('ocamlc', ['-c', 'src/pcre_stubs.c']);

ocamlc.stdout.on('data', function(data) {
  console.log("stdout:", data);
});

ocamlc.stderr.on('data', function(data) {
  console.log("stderr:", data);
});

ocamlc.on('close', function(code) {
  if (code === 0) {
    return console.log("pcre_stub.c compiled successfully!");
  }
  console.log("ERROR: child process exited with code", code);
});
