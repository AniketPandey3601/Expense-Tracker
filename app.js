const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/expense');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});