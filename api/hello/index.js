async function GetHello(context, req) {
  context.res = {
    body: 'Hello from API at ' + new Date().toLocaleTimeString()
  };
};
module.exports = GetHello;