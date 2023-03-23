## First considerations:
When the component is generated, you can explore and observe that there is some sample code in the .html, .ts. plus a .db.json that has some data just for testing purposes.

If you want to test using this json, I suggest you install the json-server module with the command:

### windows
```sh
npm install -g json-server
```
### linux
```sh
sudo npm install -g json-server
```
### mac
```sh
sudo npm install -g json-server
```

## Experimenting with the component
To use the generated component, you need to follow some steps:
1. Add the .module.ts that exists inside the newly generated component to a .module.ts, for example app.module.ts.
2. Use the component selector in the template you want, I suggest testing first in what is more practical, such as app.component.html

If you chose to test using the test json:
Run the following command in a separate terminal:
```sh
json-server src/app/pets/pets.db.json
```

Now in another free terminal, run:
```sh
ng serve
```
Make sure you have NodeJS configured on your machine.

Go to localhost:4200 and... Ulha! It works!

Feel free to ask for help or suggest improvements from our [Github Repository](https://github.com/pauloweskleyzup/ulha-angular-stack/issues).

I hope can help you in your development. ;)