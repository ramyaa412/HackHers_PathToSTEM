angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.start', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/start.html',
        controller: 'startCtrl'
      }
    }
  })

  .state('tabsController.avatar', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/avatar.html',
        controller: 'avatarCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.gradeLevel'
      2) Using $state.go programatically:
        $state.go('tabsController.gradeLevel');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
      /page1/tab3/page3
  */
  .state('tabsController.gradeLevel', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/gradeLevel.html',
        controller: 'gradeLevelCtrl'
      },
      'tab2': {
        templateUrl: 'templates/gradeLevel.html',
        controller: 'gradeLevelCtrl'
      },
      'tab3': {
        templateUrl: 'templates/gradeLevel.html',
        controller: 'gradeLevelCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eSQuestion1'
      2) Using $state.go programatically:
        $state.go('tabsController.eSQuestion1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
      /page1/tab3/page11
  */
  .state('tabsController.eSQuestion1', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/eSQuestion1.html',
        controller: 'eSQuestion1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/eSQuestion1.html',
        controller: 'eSQuestion1Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/eSQuestion1.html',
        controller: 'eSQuestion1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eSQuestion2'
      2) Using $state.go programatically:
        $state.go('tabsController.eSQuestion2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
      /page1/tab3/page15
  */
  .state('tabsController.eSQuestion2', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/eSQuestion2.html',
        controller: 'eSQuestion2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/eSQuestion2.html',
        controller: 'eSQuestion2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/eSQuestion2.html',
        controller: 'eSQuestion2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eSQuestion3'
      2) Using $state.go programatically:
        $state.go('tabsController.eSQuestion3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
      /page1/tab3/page14
  */
  .state('tabsController.eSQuestion3', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/eSQuestion3.html',
        controller: 'eSQuestion3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/eSQuestion3.html',
        controller: 'eSQuestion3Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/eSQuestion3.html',
        controller: 'eSQuestion3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eSQuestion4'
      2) Using $state.go programatically:
        $state.go('tabsController.eSQuestion4');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
      /page1/tab3/page16
  */
  .state('tabsController.eSQuestion4', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/eSQuestion4.html',
        controller: 'eSQuestion4Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/eSQuestion4.html',
        controller: 'eSQuestion4Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/eSQuestion4.html',
        controller: 'eSQuestion4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eSQuestion5'
      2) Using $state.go programatically:
        $state.go('tabsController.eSQuestion5');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab2/page17
      /page1/tab3/page17
  */
  .state('tabsController.eSQuestion5', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/eSQuestion5.html',
        controller: 'eSQuestion5Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/eSQuestion5.html',
        controller: 'eSQuestion5Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/eSQuestion5.html',
        controller: 'eSQuestion5Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mSQuestion1'
      2) Using $state.go programatically:
        $state.go('tabsController.mSQuestion1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
      /page1/tab3/page6
  */
  .state('tabsController.mSQuestion1', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/mSQuestion1.html',
        controller: 'mSQuestion1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/mSQuestion1.html',
        controller: 'mSQuestion1Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/mSQuestion1.html',
        controller: 'mSQuestion1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mSQuestion2'
      2) Using $state.go programatically:
        $state.go('tabsController.mSQuestion2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
      /page1/tab3/page7
  */
  .state('tabsController.mSQuestion2', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/mSQuestion2.html',
        controller: 'mSQuestion2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/mSQuestion2.html',
        controller: 'mSQuestion2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/mSQuestion2.html',
        controller: 'mSQuestion2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.mSQuestion3'
      2) Using $state.go programatically:
        $state.go('tabsController.mSQuestion3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
      /page1/tab3/page8
  */
  .state('tabsController.mSQuestion3', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/mSQuestion3.html',
        controller: 'mSQuestion3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/mSQuestion3.html',
        controller: 'mSQuestion3Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/mSQuestion3.html',
        controller: 'mSQuestion3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.hSQuestion1'
      2) Using $state.go programatically:
        $state.go('tabsController.hSQuestion1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
      /page1/tab3/page9
  */
  .state('tabsController.hSQuestion1', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/hSQuestion1.html',
        controller: 'hSQuestion1Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/hSQuestion1.html',
        controller: 'hSQuestion1Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/hSQuestion1.html',
        controller: 'hSQuestion1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.hSQuestion2'
      2) Using $state.go programatically:
        $state.go('tabsController.hSQuestion2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
      /page1/tab3/page10
  */
  .state('tabsController.hSQuestion2', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/hSQuestion2.html',
        controller: 'hSQuestion2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/hSQuestion2.html',
        controller: 'hSQuestion2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/hSQuestion2.html',
        controller: 'hSQuestion2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.hSQuestion3'
      2) Using $state.go programatically:
        $state.go('tabsController.hSQuestion3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
      /page1/tab3/page12
  */
  .state('tabsController.hSQuestion3', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/hSQuestion3.html',
        controller: 'hSQuestion3Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/hSQuestion3.html',
        controller: 'hSQuestion3Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/hSQuestion3.html',
        controller: 'hSQuestion3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.elementaryPathResults'
      2) Using $state.go programatically:
        $state.go('tabsController.elementaryPathResults');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page39
      /page1/tab2/page39
      /page1/tab3/page39
  */
  .state('tabsController.elementaryPathResults', {
    url: '/page39',
    views: {
      'tab1': {
        templateUrl: 'templates/elementaryPathResults.html',
        controller: 'elementaryPathResultsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/elementaryPathResults.html',
        controller: 'elementaryPathResultsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/elementaryPathResults.html',
        controller: 'elementaryPathResultsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.highSchoolPathResults'
      2) Using $state.go programatically:
        $state.go('tabsController.highSchoolPathResults');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page40
      /page1/tab2/page40
      /page1/tab3/page40
  */
  .state('tabsController.highSchoolPathResults', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/highSchoolPathResults.html',
        controller: 'highSchoolPathResultsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/highSchoolPathResults.html',
        controller: 'highSchoolPathResultsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/highSchoolPathResults.html',
        controller: 'highSchoolPathResultsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});