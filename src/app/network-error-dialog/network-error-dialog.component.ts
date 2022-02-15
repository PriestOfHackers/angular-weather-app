import { Component, OnInit ,  Input } from '@angular/core';
import {MatDialog ,MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-network-error-dialog',
  templateUrl: './network-error-dialog.component.html',
  styleUrls: ['./network-error-dialog.component.css']
})
export class NetworkErrorDialogComponent implements OnInit {

  @Input() showDialog: boolean;
  
  openDialog() {
    //this.dialog.open(DialogElementsExampleDialog);
    const dialogRef = this.dialog.open(DialogElementsExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(public dialog: MatDialog,   
    private dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    ) { }

  ngOnInit(): void {
    if(this.showDialog){
          this.openDialog();
    }
  }


  close() {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

  refreshPage(){
    console.log("Network dialog refresh page");
    location.reload();
  }

}
