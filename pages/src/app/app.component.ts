import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On the Slopes',
      url: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On Lake Tahoe',
      url: 'https://images.unsplash.com/photo-1615955980976-c04e7bcaba40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMHRhaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Heavenly Resort',
      url: 'https://images.unsplash.com/photo-1585585984719-836ea988d2a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVubHklMjByZXNvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Sand Harbor',
      url: 'https://images.unsplash.com/photo-1570739251705-3739c1d67d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZCUyMGhhcmJvciUyMGNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On the Slopes',
      url: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On Lake Tahoe',
      url: 'https://images.unsplash.com/photo-1615955980976-c04e7bcaba40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMHRhaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Heavenly Resort',
      url: 'https://images.unsplash.com/photo-1585585984719-836ea988d2a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVubHklMjByZXNvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Sand Harbor',
      url: 'https://images.unsplash.com/photo-1570739251705-3739c1d67d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZCUyMGhhcmJvciUyMGNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },{
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On the Slopes',
      url: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On Lake Tahoe',
      url: 'https://images.unsplash.com/photo-1615955980976-c04e7bcaba40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMHRhaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Heavenly Resort',
      url: 'https://images.unsplash.com/photo-1585585984719-836ea988d2a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVubHklMjByZXNvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Sand Harbor',
      url: 'https://images.unsplash.com/photo-1570739251705-3739c1d67d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZCUyMGhhcmJvciUyMGNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },{
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On the Slopes',
      url: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'On Lake Tahoe',
      url: 'https://images.unsplash.com/photo-1615955980976-c04e7bcaba40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMHRhaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Heavenly Resort',
      url: 'https://images.unsplash.com/photo-1585585984719-836ea988d2a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdmVubHklMjByZXNvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At Sand Harbor',
      url: 'https://images.unsplash.com/photo-1570739251705-3739c1d67d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZCUyMGhhcmJvciUyMGNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }
}

