import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Curso Angular 8',
                imageUrl: '/assets/images/forms.png',
                preco: 290,
                code: 'RVF-9876',
                duration: 120,
                rating: 4.4,
                realeseDate: '23/23/2021'
            },
            {
                id: 2,
                name: 'Curso java',
                imageUrl: '/assets/images/cli.png',
                preco: 29,
                code: 'RVF-76',
                duration: 150,
                rating: 2.8,
                realeseDate: '23/23/2021'
            }
        ]
    }

 
    
}