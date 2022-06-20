import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
HttpClient
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  filterPost: string = "";
  url = 'https://my-json-server.typicode.com/MiguelAngelMoya/usuarios/user';
  items: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      if (data !== null && data !== undefined) {
        const res: any[] = data as [];
        res.forEach(element => {
          this.items.push(element);
        })
      }
    });
  }

}


