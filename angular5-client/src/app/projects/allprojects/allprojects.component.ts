import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ProjectService } from '../project.service';
import { ProjectInfo } from "../projectInfo";
//import { DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ProjectStatus } from "../projectStatus";

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit, AfterViewChecked {

    displayedColumns = ['name', 'description', 'due', 'skills',  'estimatedCost', 'status',  'actions'];
    dataSource;
    
    @ViewChild(MatSort) sort: MatSort;
    
    constructor(private projectService: ProjectService) { 
    }

    ngOnInit() {
        this.projectService.getAllProjectList().subscribe(
               result => this.dataSource = new MatTableDataSource(result)
        );
    }

    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    
    ngAfterViewChecked() {
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    }
    
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    
}