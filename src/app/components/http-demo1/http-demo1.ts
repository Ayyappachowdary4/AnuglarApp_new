import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    // this.fetchUsersJavascript();
    // this.fetchUsersAngular();
    this.httpClientWithHeaders();
  }
  fetchUsersJavascript() {
    // fetch() return promise
    fetch(this.user_api_url).then(
      (response) => {
        response.json().then(
          (finalResponse) => {
            console.log(finalResponse)
          }
        )
      },
      (error) => {
        console.log(error);
      }
    )
  }
  fetchUsersAngular() {
    // get() returns observable, to read data from observable, subscribe()

    /*  this.httpClient.get(this.user_api_url).subscribe(
       (response) => { console.log(response) },
       (error) => { console.log(error) },
       () => { console.log('all data received') }
     ); */

    this.httpClient.get(this.user_api_url).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('Completed...')
    });
  }

  httpClientWithHeaders() {
    this.httpClient.get(this.user_api_url, { observe: 'response' }).subscribe(response => {
      console.log(response); // complete response object ( body + status + status_text)
    })
  }

}