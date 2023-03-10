To apply the Plugin in your projects, you need have the StackSpot CLI installed on your machine. [If not, follow this tutorial to install](https://docs.stackspot.com/docs/stk-cli/installation/).

### 1. Import the Stack on your machine

```sh
stk import stack https://github.com/pauloweskleyzup/ulha-angular-stack
```

### 2. Now check if the Stack was successfully imported

```sh
stk list stack | grep ulha-angular-stack
```

### 3. Apply the Plugin, in your project directory, execute

```sh
stk apply plugin ulha-angular-stack/service-api-plugin
```

### 4. Check the changes in your project

```sh
git status
```

Feel free to ask for help or suggest improvements from our [Github Repository](https://github.com/pauloweskleyzup/ulha-angular-stack/issues).

I hope can help you in your development. ;)