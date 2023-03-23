The purpose of this stack is to give developers a base Angular project in a particular Angular version **without the need to install @angular/cli**.

For the next releases, a new template based on the **Ulha Architecture** will be included. Ulha is built on clean architecture concepts and some of the most used design patterns.

How to use the stack:
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
## Create your application using default architecture template
### 3. Enter in your directory of your choice and use this command:
```sh
stk create app <app_name> -t ulha-angular-stack/default-architecture-template
```
### 4. From that point on, you can choose the version of your angular project.
```sh
? Angular version (Use shortcuts or arrow keys)
 » 1) ~15.0.0
   2) ~14.2.0
   3) ~14.1.3
   4) ~14.0.7
   5) ~13.3.0
   6) ~13.2.6
   7) ~13.1.4
   8) ~13.0.4
   9) ~12.2.18
   0) ~12.1.4
   a) ~12.0.5
   b) ~11.2.19
   c) ~11.1.4
   d) ~11.0.7
   e) ~10.2.4
   f) ~10.1.7
   g) ~10.0.8
   h) ~9.1.15
   i) ~9.0.7
  Answer: 1) ~15.0.0
```
```sh
? Style (Use shortcuts or arrow keys)
 » 1) scss
   2) css
   3) saas
   4) less
  Answer: 1) scss
```
```sh
? Add app-rounting.module.ts ? (Y/N) (Yes)
```
```sh
? Download and install angular dependencies? (Y/N) (Yes)
```
### 5. After it, you see something like this on screen and your project is create with success
```sh
Creating the base project. wait...
CREATE <app_name>/README.md (1061 bytes)
CREATE <app_name>/.editorconfig (274 bytes)
CREATE <app_name>/.gitignore (548 bytes)
CREATE <app_name>/angular.json (2884 bytes)
CREATE <app_name>/package.json (1039 bytes)
CREATE <app_name>/tsconfig.json (901 bytes)
CREATE <app_name>/tsconfig.app.json (263 bytes)
CREATE <app_name>/tsconfig.spec.json (273 bytes)
CREATE <app_name>/.vscode/extensions.json (130 bytes)
CREATE <app_name>/.vscode/launch.json (474 bytes)
CREATE <app_name>/.vscode/tasks.json (938 bytes)
CREATE <app_name>/src/favicon.ico (948 bytes)
CREATE <app_name>/src/index.html (293 bytes)
CREATE <app_name>/src/main.ts (214 bytes)
CREATE <app_name>/src/styles.scss (80 bytes)
CREATE <app_name>/src/assets/.gitkeep (0 bytes)
CREATE <app_name>/src/app/app.module.ts (314 bytes)
CREATE <app_name>/src/app/app.component.scss (0 bytes)
CREATE <app_name>/src/app/app.component.html (23083 bytes)
CREATE <app_name>/src/app/app.component.spec.ts (962 bytes)
CREATE <app_name>/src/app/app.component.ts (213 bytes)
    Directory is already under version control. Skipping initialization of git.
Base project creation is complete!
Dependencies are being downloaded and configured...
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead

added 927 packages, and audited 928 packages in 2m

93 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success!
You have created the project based on version ~15.0.0
Make you sure using node.js compatible.
More informations in link https://stackoverflow.com/a/60258560
How about try it the plugin created to accelerate your coding? ;)
Enjoy Dev!
- <app_name> application successfully created!
```

For more info about how to install and use Stackspot, visit [this link](https://docs.stackspot.com/docs/stk-cli/installation)

Feel free to ask for help, or suggest improvements from [github repository](https://github.com/pauloweskleyzup/ulha-angular-stack/issues).

I hope this stack can help you in your development.
