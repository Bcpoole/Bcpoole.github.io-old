export class App {
  configureRouter(config, router) {
    config.title = 'Brandon Poole';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'Welcome' }
    ]);

    this.router = router;
  }
}
