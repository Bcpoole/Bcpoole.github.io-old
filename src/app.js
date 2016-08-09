export class App {
  configureRouter(config, router) {
    config.title = 'Brandon Poole';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'Welcome' },
      { route: 'resume', name: 'resume', moduleId: 'resume', nav: true, title: 'Resume' }      
    ]);

    this.router = router;
  }
}
