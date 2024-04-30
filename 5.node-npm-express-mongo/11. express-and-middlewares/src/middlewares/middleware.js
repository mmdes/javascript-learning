// this is a global middleware...

module.exports = (req, res, next) => {
    console.log();
    console.log(`Vi que você alterou e postou ${req.body.cliente}`);
    console.log();
    next();
}