import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(600) ]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class AuthContentComponent {
  data: string[] = [];
  firstName: string = "";
  title: string = "";
  
  isSubmitted = false;

  selectedImage: File | null = null;
  imagePreview: string | null = null;
  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
        "GET",
        "/messages",
        {}).then(
        (response) => {
            this.data = response.data;
        }).catch(
        (error) => {
            if (error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else {
                this.data = error.response.code;
            }

        }
    );
  }

  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    // You can change the drop area style if you want
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    // Check if event.dataTransfer is not null before accessing its properties
    if (event.dataTransfer && event.dataTransfer.files) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        console.log("Dropped file:", files[0]);
        // Handle the file
      }
    }
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = file;

      // File Preview
      const reader = new FileReader();
      reader.onload = (e: any) => this.imagePreview = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // Logic for handling form submission goes here
    // For example, you could send the data to a server

    // Set isSubmitted to true to show the success message
    this.isSubmitted = true;

    // Optionally reset the form or perform other actions
  }
}
