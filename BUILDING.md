To build this project, go into the src directory and build out the individual dependencies for frontend and backend.

for the frontend

```cd src/forum/frontend/```
```npm install```

for the backend

```cd src/forum/backend/```
```npm install```

And to write new content onto the database, contact eddy varela so he can make you a database user account. You will need to create a config/db.js file within the backend.

Once your credentials have been supplied export something like this (provided by eddy):

in backend/config/db.js

module.exports= {
      url: "mongodb://user:password@dbname"
}

Without these credentials, you will not be able to read or write from the database.

Thanks for reading and please reach out to eddy@captaincode.cc with any questions.