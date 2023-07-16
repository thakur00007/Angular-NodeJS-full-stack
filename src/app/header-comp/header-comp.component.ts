import { Component } from '@angular/core';
import {Router, Routes} from "@angular/router";
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent {

  protected readonly Router = Router;
}
