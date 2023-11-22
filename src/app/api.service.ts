import { Injectable } from '@angular/core';
import { stories } from '../app/dashboard/stories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	// for prod
	// PHP_API_SERVER = "http://192.168.0.136:8000/"; 
	PHP_API_SERVER = "https://creativecornerprojects.in/api";
	constructor(private httpClient: HttpClient) {}
	
	readProducts(): Observable<stories[]>{
		return this.httpClient.get<stories[]>(`${this.PHP_API_SERVER}/read.php`);
	}
	createProduct(product: stories): Observable<stories>{
		return this.httpClient.post<stories>(`${this.PHP_API_SERVER}/create.php`, product);
	}
	// updateProduct(product: Product){
	// 	return this.httpClient.put<Product>(`${this.PHP_API_SERVER}/update.php`, product);
	// }
	deleteProduct(id: number){
		return this.httpClient.delete<stories>(`${this.PHP_API_SERVER}/delete.php/?id=${id}`);
	}

	performGetEx(data: any):Observable<any>{
		console.log('mail')
        return this.httpClient.post<any>(`${this.PHP_API_SERVER}/attemail.php`,data);
		
    }

	uploadFile(File: any):Observable<any>{
        return this.httpClient.post<any>(`${this.PHP_API_SERVER}/uploadfile.php`,File);
    }


}