## First considerations
When the module is generated, you can explore and observe that there is a **effects.ts** file with some code snippets commenting.
These snippets are exactly for you to adjust your communication **service** to correctly use the effects.

## Experimenting with the component
To use the generated component, you need to follow some steps:

You must include the following lines in the imports of the module that you want to control the store:

```sh
StoreModule.forFeature('<yourFeatureSelector>', yourReducer),
EffectsModule.forFeature([<yourEffects>])
```

Make sure the imports are correct.

And that's it. Now you can use or modify the store to suit your needs.

Feel free to ask for help or suggest improvements from our [Github Repository](https://github.com/pauloweskleyzup/ulha-angular-stack/issues).

I hope can help you in your development. ;)

