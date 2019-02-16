# Ionic 3 super-tabs easy way

Ionic 3 small demo project how get to use swipeable super-tabs easily.

# Get start

1. Open a new terminal window (Mac) or a command window (Windows), and navigate (cd) to the your-ionic-work directory

2. Using the Ionic CLI, create an application named **my-super-tabs-app** based on the tabs starter app:
```bash
$ ionic start my-super-tabs-app tabs
```

3. Navigate to the **my-super-tabs-app** folder 
```bash
$ cd my-super-tabs-app 
```

4. Install the module via NPM
```bash
$ npm i ionic2-super-tabs --save
```

5. Import SuperTabsModule.forRoot() in your app's main module (file: /src/app/app.module.ts)
```ts
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
    ...
    imports: [
      ...
      SuperTabsModule.forRoot()
      ],
    ...
})
export class AppModule {}
```

6. Open file /src/app/pages/tabs/tabs.html 

and replace:

```html
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>
```

to:

```html
<super-tabs tabsPlacement="bottom">
  <super-tab [root]="tab1Root" title="Home" icon="home"></super-tab>
  <super-tab [root]="tab2Root" title="About" icon="information-circle"></super-tab>
  <super-tab [root]="tab3Root" title="Contact" icon="contacts"></super-tab>
</super-tabs>
```

7. Is ready! Default tabs are on the top. tabsPlacement="bottom" set tabs to bottom.

[super-tabs home page on gitHub](https://github.com/zyra/ionic2-super-tabs)
