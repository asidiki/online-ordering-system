const path          = require('path');
const express       = require('express');
const session       = require('express-session');
const exphbs        = require('express-handlebars');
const fs            = require('fs');
const flash         = require('express-flash');
const passport      = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

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



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});