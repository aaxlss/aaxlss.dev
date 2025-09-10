import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="loading-container flex justify-center items-center p-4">
      <div class="loading-spinner animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      <span class="ml-2">Loading...</span>
    </div>
  `
})
export class LoadingComponent {}