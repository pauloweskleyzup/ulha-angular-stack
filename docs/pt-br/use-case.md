O objetivo deste ***template*** é fornecer um projeto base Angular ao desenvolvedor. No entanto, a maior vantagem de usar este modelo é a capacidade de criar um projeto em **várias versões sem a necessidade de instalar @angular/cli**.

A próxima etapa da evolução da stack será fornecer o novo modelo com base na **arquitetura Ulha**, que utiliza conceitos de arquitetura limpa e alguns dos padrões de projeto mais usados. Isso também permitirá que você crie projetos em versões diferentes.

Por enquanto, vamos nos concentrar em criar um projeto a partir do modelo padrão.
## Passos
Se você não baixou e configurou a pilha angular, **execute as etapas 1 e 2** abaixo, caso contrário pule-as.

### 1. Obtenha a pilha angular da ULHA
```sh
stk import stack https://github.com/pauloweskleyzup/ulha-angular-stack
```
### 2. Verifique se importado com sucesso.
```sh
stk list stack | grep ulha-angular-stack
```
## Crie seu aplicativo usando o modelo de arquitetura padrão
### 3. Digite seu diretório de sua escolha e use este comando:
```sh
stk create app <app_name> -t ulha-angular-stack/default-architecture-template
```
### 4. A partir desse ponto, você pode escolher a versão do seu projeto angular.
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
### 5. Depois disso, você vê algo assim na tela e seu projeto está criado com sucesso.
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

Para obter mais informações sobre como instalar e usar o Stackspot, acesse [este link](https://docs.stackspot.com/docs/stk-cli/installation).

Sinta-se à vontade para pedir ajuda ou sugerir melhorias a partir do [repositório github](https://github.com/pauloweskleyzup/ulha-angular-stack/issues).

Espero que esta stack ajude-o no desenvolvimento do seu projeto ;)