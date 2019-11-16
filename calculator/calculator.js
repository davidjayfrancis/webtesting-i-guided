module.exports = {
  add
};

function add(...restArgs) {
  let total = 0;
  for (let i = 0; i < restArgs.length; i++) {
    total += restArgs[i];
  }
  return total;
}
