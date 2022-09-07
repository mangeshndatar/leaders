import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabs = [
    {tabName : 'feed', image : '/assets/icon/feed-selected-tab.svg'},
    {tabName : 'favourite', image : '/assets/icon/favourite-tab.svg'},
    {tabName : 'chat', image : '/assets/icon/chat-tab.svg'},
    {tabName : 'events', image : '/assets/icon/events-tab.svg'},
    {tabName : 'events', image : '/assets/icon/events-tab.svg'}
  ];
  
  constructor(private router: Router) {}
  navigate(index: number){
  
    this.tabs.forEach((tab , i)=>{
    debugger
   
      if(index===i){
        if(!tab.image.includes('-selected'))
          tab.image=tab.image.replace(tab.tabName,tab.tabName+"-selected");
      }else{
        tab.image=tab.image.replace(tab.tabName+"-selected",tab.tabName);
      }
  })
  }
}
