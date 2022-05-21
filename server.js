<<<<<<< HEAD
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const fs = require('fs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const css = fs.readFileSync('./public/assets/style.css', 'utf-8');
const loginJS = fs.readFileSync('./public/javascript/login.js', 'utf-8')

const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
=======
const path          = require('path');
const express       = require('express');
const session       = require('express-session');
const exphbs        = require('express-handlebars');
const fs            = require('fs');
const flash         = require('express-flash');
const passport      = require('passport');
>>>>>>> f96c05612f66ad3ccec84517f69401167a87a5b1

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

<<<<<<< HEAD
app.use(session(sess));
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



=======
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(passport.initialize());
app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


const css = fs.readFileSync('./public/style.css', 'utf-8');
// const loginJS = fs.readFileSync('./public/javascript/login.js', 'utf-8')
// const logoutJS = fs.readFileSync('./public/javascript/logout.js', 'utf-8')

app.use(require('./controllers/'));
>>>>>>> f96c05612f66ad3ccec84517f69401167a87a5b1



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});