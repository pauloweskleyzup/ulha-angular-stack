## Steps
If you have not downloaded and configured ulha-angular-stack, **please perform steps 1 and 2** below, otherwise skip them.

### 1. Get Ulha Angular Stack
```sh
stk import stack https://github.com/pauloweskleyzup/ulha-angular-stack
```
### 2. Check if successfully imported.
```sh
stk list stack | grep ulha-angular-stack
```
### 3. Enter in root directory of your application and use this command:
```sh
stk apply plugin ulha-angular-stack/service-api-plugin
```
## Applying the plugin in your application
From that point on, you must enter some information.
```sh
? Service name  (pet)
```
```sh
? Service path  (src/app/)
```
```sh
? API host  (localhost)
```
```sh
? Host port  (3000)
```
```sh
? Resouce name (Please input name in single)  (pet)
```
```sh
? Do you want configure http module? (y/N) (No)
```
### 5. After it, you see something like this on screen and your project is create with success
```sh
Ulha! Your service has been create!
You can read doc files to more informations about to use the plugin ;)
Enjoy Dev!
- Plugin ulha-angular-stack/service-api-plugin applied.
```