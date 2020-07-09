import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  public message: string = 'Hello World!';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;

    config.map([
      { route: ['', 'welcome'], name: 'welcome', title: 'Welcome', moduleId: PLATFORM.moduleName('pages/welcome') },
      { route: ['resume'], name: 'resume', title: 'Resume', moduleId: PLATFORM.moduleName('pages/resume'), nav: true }
    ]);
  }
}
