import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
presidents: string[]= ["Higgins","Mcaleese","Robsion","Hillery","O Dalaigh"]

mypresidents: any[]=[{name: "Higgins", term:"2011-"},
{name: "Mcaleese", term:"1997-2011"},
{name: "Robsion", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}]
}
