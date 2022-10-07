import { Component, OnInit,Inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit , AfterViewInit {

  constructor(  private _commonServices:CommonServiceService , public dialog: MatDialog) { }

  openDialog(datas: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog ,{
      data: {
        animal: 'panda',
      },
    } ) ;
    console.log(datas,'Dialog result:');
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // displayedColumns: string[] = ['AdvertismentNo','PostName', 'name', 'weight', 'symbol', 'post_closed_date','Action'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageTitile="Post Details"

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
   wallData:any
  getMainWallData(){
    this.wallData= this._commonServices.main_wall_data
    console.log(this.wallData,"jj");
    
}

  ngOnInit(): void {
    
    this.getMainWallData()
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}

// export interface PeriodicElement {
//   name: string;
//   PostName: number;
//   weight: number;
//   symbol: string;
//   AdvertismentNo:string
//   post_closed_date:string
  
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {AdvertismentNo:'', PostName: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' ,post_closed_date:''},
//   {AdvertismentNo:'',  PostName: 2, name: 'Helium', weight: 4.0026, symbol: 'He' ,post_closed_date:''},
//   {AdvertismentNo:'',  PostName: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' ,post_closed_date:''},
//   {AdvertismentNo:'',  PostName: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' ,post_closed_date:''}]
