export class App {
  configureRouter(config, router) {
    config.title = 'Brandon Poole';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: false, title:'Home' },
      { route: 'about', name: 'about', moduleId: 'about', nav: true, title: 'About' }
    ]);

    this.router = router;
  }
}
