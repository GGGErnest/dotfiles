# Angular Schematics - Configuration

Some common options can be customized in a one click with the [configuration helper](command:angular-schematics.configuration):

- Copy settings from angular.json
- Enable SCSS, Sass or Less styles
- Disable styles
- Enable external HTML templates
- Enable single file components (SFC)
- Enable or disable ngOnInit
- Disable change detection optimization
- Disable lazy loading
- Disable block CSS display
- Enable shadow DOM
- Set the selector prefix
- Disable classes suffixes 💎
- Force NgModules 💎
- Force class interceptors 💎
- Force class guards and resolvers 💎
- Disabled predefined schematics 💎

<br>

## Where is configuration stored?

This extension stores the configuration in [VS Code *workspace* settings](command:workbench.action.openWorkspaceSettingsFile). It means:
- it is applied only to the current opened project
- if you commit the `.vscode/settings.json` file (and you should), all your team will benefit from it
- the configuration helper assists you to set the initial settings, if you want to change them afterwards, just [edit the `.vscode/settings.json` file](command:workbench.action.openWorkspaceSettingsFile)

<br>

## [Copy settings from angular.json](command:angular-schematics.configuration)

This extension uses its own configuration. But if you have an *official and valid* `angular.json` with some `schematics` settings, the extension can [copy them](command:angular-schematics.configuration). It should detect the following settings:
- SCSS, Sass or Less styles
- no style
- external HTML templates
- single file components (SFC)
- change detection optimization
- shadow DOM

<br>

## [Enable SCSS, Sass or Less styles](command:angular-schematics.configuration)

For projects with a design system still using CSS preprocessors (like SCSS for Angular Material or PrimeNG).

<br>

## [Disable styles](command:angular-schematics.configuration)

For projects not using styles in components and pages because of alternative tools (like Tailwind CSS).

<br>

## [Enable external HTML templates](command:angular-schematics.configuration)

Unlike the Angular CLI, inline HTML templates are the default in this extension because:
- less files (separation of concerns is not separation of files)
- it is easier to see the data bindings connections between the HTML and the class
- it draws attention to the template length, to keep each component as small as possible
- the official [Angular Language Service extension](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) provides the same coloration and autocompletion as in HTML files

But you can [switch to external HTML templates](command:angular-schematics.configuration) if you prefer.

<br>

## [Enable single file components (SFC)](command:angular-schematics.configuration)

Some may want to go even further with single file components (inline HTML, inline styles and no subfolder).

<br>

## [Enable or disable ngOnInit](command:angular-schematics.configuration)

By default in this extension:
- components does not include `ngOnInit()` (because most pure components should not handle such logic)
- pages includes `ngOnInit()` (because pages have to handle logic)

But you can [enable or disable ngOnInit()](command:angular-schematics.configuration) as you wish.

<br>

## [Disable change detection optimization](command:angular-schematics.configuration)

With the introduction of signals in Angular 16, the good practice is to optimize the change detection strategy of all components and pages to `OnPush`.

If your project uses Angular <=15, or if you or your team are not yet comfortable with these topics, you can [disable the change detection optimization](command:angular-schematics.configuration) in pages and/or in components.

<br>

## [Disable lazy loading](command:angular-schematics.configuration)

By default, for better application performances, pages are generated as lazy loaded components. But you can [disable lazy loading](command:angular-schematics.configuration).

<br>

## [Disable block CSS display](command:angular-schematics.configuration)

Web components have an `inline` CSS display by default. It is a flaw of the standard, as 99% of components are in fact used as `block`s. So when generating components, `:host { display: block; }` is automatically added in styles, but you can [disable it](command:angular-schematics.configuration).

<br>

## [Enable shadow DOM](command:angular-schematics.configuration)

For projects ready to use native shadow DOM view encapsulation.

<br>

## [Set the selector prefix](command:angular-schematics.configuration)

Angular default prefix selector for components, directives and pipes is `app`.

If you want a different one, this is the only setting for which the extension uses the official `angular.json` `prefix` configuration, because this one is simple to get and in an Angular CLI monorepo, it can differ from one application or library to another.

<details>
<summary>Example of angular.json</summary>

```json
{
  "version": 1,
  "projects": {
    "some-app": {
      "projectType": "application",
      "prefix": "app"
    },
    "some-lib": {
      "projectType": "library",
      "prefix": "mycompany",
    }
  }
}
```
</details>

But it requires a *valid and official* `angular.json`, which is not the case in all projects. Only such cases, [set the selector prefix](command:angular-schematics.configuration) via the extension configuration helper. It will be global to the workspace.

<br>

## 💎 [Enable classes prefixes](command:angular-schematics.configuration)

In your Pro edition, you can [enable automatic classes prefixes](command:angular-schematics.configuration), for example to generate `MatButtonComponent` instead of `ButtonComponent` (given "mat" is set as the selector prefix). It is useful when doing a library of components.

<br>

## 💎 [Disable classes suffixes](command:angular-schematics.configuration)

In your Pro edition, you can [disable automatic classes suffixes](command:angular-schematics.configuration), for example to generate `SomeButton` instead of `SomeButtonComponent`, or `SomeApiClient` instead of `SomeApiClientService`.

This option allows to partly align with the upcoming [new Angular style guide](https://gist.github.com/jelbourn/0158b02cfb426e69c172db4ec92e3c0c), being discussed in [this RFC](https://github.com/angular/angular/discussions/58412).

It has also been the standard in some design systems libraries since always, like Angular Material itself (it is `MatButton`, not `MatButtonComponent`).

<br>

## 💎 [Force NgModules](command:angular-schematics.configuration)

In your Pro edition, if your project uses Angular <=13 or is not ready for standalone components yet.

<br>

## 💎 [Class interceptors](command:angular-schematics.configuration)

In your Pro edition, if your project uses Angular <=14 or is not ready for functional interceptors yet.

<br>

## 💎 [Class guards and resolvers](command:angular-schematics.configuration)

In your Pro edition, if your project uses Angular <=14.1 or is not ready for functional guards and resolvers yet. Note [class guards and resolvers are officially deprecated](https://angular.io/guide/deprecations#router-class-and-injection-token-guards) by Angular and planned for removal.

<br>

## 💎 [Disable predefined schematics](command:angular-schematics.configuration)

In your Pro edition, if some of the predefined schematics do not suit your project, you [can disable them](command:angular-schematics.configuration), and even replace them with your own custom schematics.

<br>
