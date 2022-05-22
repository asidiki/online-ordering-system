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
const routes = require('./controllers')

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(routes);




sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});