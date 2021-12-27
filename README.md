# Using the Classmate App

Classmate is a simple app for browsing modules (courses) offered at the National University of Singapore. Users can select modules they are interested in.

Module data was obtained from [NUSMods](https://nusmods.com) via their API suite.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app

To run the app in development mode, you must have npm installed.

In the project directory, you can run:

### `npm install`

Installs the dependencies required to run the app.

### `npm start`

Runs the app in the development mode.\
If your browser is not launched automaticaly, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Authentication
To view pages such 'Profile' or 'My Modules', a user must be logged in, and will be prompted to do so when attempting to access these pages. If you do not have an account, you can sign up using any email and password, and subsequently use these credentials to log in.

## Extensions

Below are some extensions I would like to implement given more time.

### Search
This feature would allow modules (courses) to be searched based on title or module code. This could be implemented through the use of a react hook like useState.

### Filter
This would filter modules based on the department or faculty that they are offered by. This could be implemented through the use of a react hook like useState.

### Saving
Most importantly, this would restore the modules selected during a user's previous sessions. The data would be loaded upon login, via API calls to the Firebase backend.

### Credit Counter
This would keep track of the total credits a user's selection of modules (courses) would yield. Additionally, a warning would be displayed when the credits go above a certain threshold (usually 24 credits). This can be implemented quite simply, as a the credits yielded by a module are stored in the module entry in a user's module array. The credits could be added up to find the total. More intuitively, since most modules are 4 credits, the warning could be displayed when a user selects more than 6 modules. The count is already stored in the current implementation, so this would be simpler.
