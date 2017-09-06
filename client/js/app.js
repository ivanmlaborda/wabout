/* global angular */
(function () {
  angular.module('Wabout', ['ngRoute', 'leaflet-directive', 'checklist-model', 'toastr', 'angular-jwt'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise('/auth/login')
  })
  .config(function (toastrConfig) {
    angular.extend(toastrConfig, {
      allowHtml: false,
      closeButton: false,
      closeHtml: '<button>&times;</button>',
      extendedTimeOut: 1000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      positionClass: 'toast-top-center',
      messageClass: 'toast-message',
      onHidden: null,
      onShown: null,
      onTap: null,
      progressBar: true,
      tapToDismiss: true,
      templates: {
        toast: 'directives/toast/toast.html',
        progressbar: 'directives/progressbar/progressbar.html'
      },
      timeOut: 2700,
      titleClass: 'toast-title',
      toastClass: 'toast'
    })
  })
  .run(function ($rootScope, $location, StorageService, AuthService) {
    if (AuthService.isLoggedIn()) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      console.log('route has changed')
      if (next && next.secure) {
        console.log('this route is secured!!')
        if (!AuthService.isLoggedIn()) {
          $location.path('/auth/login')
        }
      }
    })
  })
})()
