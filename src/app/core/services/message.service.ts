import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: String[] = [];

  add(message: String): void{
    this.messages.push(message);
  }
  
  clear(): void{
    this.messages = [];
  }

  getMessages(): String[] {
    return this.messages;
  }
}
