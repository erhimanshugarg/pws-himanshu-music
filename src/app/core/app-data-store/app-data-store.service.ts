import { Injectable } from '@angular/core';

/**
 * AppDataStoreServie to transport data across pages
 */
@Injectable({
  providedIn: 'root'
})
export class AppDataStoreService {

  // object to store data
  public data: { [ key: string ]: any } = {};

  /**
   * Get the Data from the store
   * @param key 
   */
  public get( key: string ) {
    return this.data[ key ] || ( this.data[key] === false ? false: null );
  }

  /**
   * set the key value pair data in store
   * @param key 
   * @param value 
   */
  public set( key: string, value : any ) {
    this.data[ key ] = value;
  }

  /**
   * Get all the stored keys
   */
  public keys(): Array<string> {
    return Object.keys( this.data );
  }

  /**
   * get all the entries in the store
   */
  public entries(): any {
    return this.data;
  }

  /**
   * Reset the store
   */
  public reset(): void {
    this.data = {};
  }
}
