
const app = require('./app')

app.listen(3000, () => {
    console.log(`Server started on port 3000`)  //call-back сработает сразу после запуска сервера
});