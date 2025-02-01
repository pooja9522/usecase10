
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import {RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import {SubjectComponent }  from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import {  FacultyComponent} from "./faculty/faculty.component";
import {  FacultyListComponent} from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';

import {MyprofileComponent} from './user/myprofile.component';

import { AssetComponent } from './asset/asset.component';
import { AssetListComponent } from './asset/assetlist.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customerlist.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client/clientlist.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cartlist.component';
import { PoojaComponent } from './pooja/pooja.component';
import { PoojalistComponent } from './pooja/poojalist.component';
import { PhysicianComponent } from './physician/physician.component';
import { PhysicianlistComponent } from './physician/physicianlist.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaselistComponent } from './purchase/purchaselist.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/itemlist.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'loader',
        component : LoaderComponent

    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },
   
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,
      
    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent
      
    },
    {
        path: 'marksheet',
        component: MarksheetComponent
      
    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent
      
    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent
      
    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent
      
    },
    {
        path: 'getmarksheet',
        component : GetmarksheetComponent
      
    },
    {
        path: 'college',
        component: CollegeComponent
      
    },
    {
        path: 'college/:id',
        component: CollegeComponent
      
    },
    {
        path: 'collegelist',
        component: CollegeListComponent
      
    },
    {
        path: 'student',
        component: StudentComponent
      
    },
    {
        path: 'student/:id',
        component: StudentComponent
      
    },
    {
        path: 'studentlist',
        component: StudentListComponent
      
    },
    {
        path: 'user',
        component: UserComponent
      
    },
    {
        path: 'user/:id',
        component: UserComponent
      
    },
    {
        path: 'userlist',
        component: UserListComponent
      
    },
    {
        path: 'role',
        component : RoleComponent
      
    },
    {
        path : 'rolelist',
        component : RoleListComponent
      
    },
    {
        path: 'role/:id',
        component: RoleComponent
      
    },
    {
        path: 'course',
        component: CourseComponent
      
    },
    {
        path: 'courselist',
        component: CourseListComponent
      
    },
    {
        path :'course/:id',
        component :CourseComponent
      
    },
    {

        path:'faculty',
        component:FacultyComponent
      
    },
    {
        path : 'facultylist',
        component : FacultyListComponent
      
    },
    {
        path : 'faculty/:id',
        component : FacultyComponent
      
    },
    {
        path: 'timetable',
        component : TimetableComponent
      

    },
    {
        path:'timetablelist',
        component: TimetableListComponent
      
    },
    {
        path : 'timetable/:id',
        component : TimetableComponent
      
    },
    {
        path: 'order',
        component: OrderComponent

    },
    {
        path: 'order/:id',
        component: OrderComponent

    },
    {
        path: 'orderlist',
        component: OrderlistComponent

    },

    {
        path: 'subject',
        component: SubjectComponent
      
    },
    {
        path: 'subjectlist',
        component : SubjectListComponent
      
    },
    {
        path : 'subject/:id',
        component : SubjectComponent
      
    },
    {
        path : 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {   path :'changepassword',
        component : ChangepasswordComponent
      
    }, 
    {
        path: 'asset',
        component: AssetComponent
      },
      {
        path: 'assetlist',
        component: AssetListComponent
      },
      {
        path: 'asset/:id',
        component: AssetComponent
      },

      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'clientlist',
        component: ClientListComponent
      },
      {
        path: 'client/:id',
        component: ClientComponent
      },


      {
        path: 'purchase',
        component: PurchaseComponent
      },
      {
        path: 'purchaselist',
        component: PurchaselistComponent
      },
      {
        path: 'purchase/:id',
        component: PurchaseComponent
      },

      {

        path:'item',
        component:ItemComponent
      
    },

    {
        path : 'itemlist',
        component : ItemListComponent
      
    },
    {
        path : 'item/:id',
        component : ItemComponent
      
    },
   
   



      {
        path: 'pooja',
        component: PoojaComponent
      },
      {
        path: 'poojalist',
        component: PoojalistComponent
      },
      {
        path: 'pooja/:id',
        component: PoojaComponent
      },


      


      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'cartlist',
        component: CartListComponent
      },
      {
        path: 'cart/:id',
        component: CartComponent
      },


      {
        path: 'physician',
        component: PhysicianComponent
      },
      {
        path: 'physicianlist',
        component: PhysicianlistComponent
      },
      {
        path: 'physician/:id',
        component: PhysicianComponent
      },



      {
        path: 'customer',
        component: CustomerComponent
      },
    
      {
        path: 'customerlist',
        component: CustomerlistComponent
      },

      {
        path: 'customerlist/:id',
        component: CustomerlistComponent
      }
    
    
   
      
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})


export class AppRoutingModule { }