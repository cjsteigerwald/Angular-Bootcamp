import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employeed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employeed: false },
    { name: 'Elyse', age: 25, job: 'Fun Time', employeed: true },
  ];

  headers = [
    { key: 'employeed', label: "Has a Job?"},
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
