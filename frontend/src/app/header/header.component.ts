import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators ,FormArray,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

requiredForm=new FormGroup({
   
  email:new FormControl(),
  password:new FormControl()
});
constructor(private fb: FormBuilder,private router: Router,) {
 
   this.myForm();
}

//Create required field validator for name
myForm() {
   this.requiredForm = this.fb.group({
   
   email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]  
         
   });
}
onSubmit(){
  alert("login successsfull")
  //  window.location.reload();
  if(!this.requiredForm.valid){
        return;
      }
      window.location.reload();
      this.router.navigate(['/home'])
      
  //  localStorage.setItem('user',this.requiredForm.value)
      
}
// onSubmit(){
//   if(!this.requiredForm.valid){
//     return;
//   }
//   localStorage.setItem('user',this.requiredForm.value)
 // this.router.navigate(['/home'])
// }
ngOnInit()
{

}
}