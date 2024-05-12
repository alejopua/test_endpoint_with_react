// 1 - Arregla esta función para que el código posterior funcione como se espera:

import net from "node:net";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    // return { time: process.hrtime(startTime), ip }; <- no funciona
    callback(null, { time: process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    client.end();
    callback(err);

    // throw err; // <- no funciona
  });
};

ping("midu.dev", (err, info) => {
  if (err) return console.error(err);
  else return console.log(info);
});
