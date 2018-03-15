import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
    class1: any;
    class2: any;
    class3: any;
    class4: any;
    class5: any;
    class6: any;
    class7: any;
    class8: any;

    constructor(public navCtrl: NavController,navParams : NavParams) {
        this.class1 = navParams.get('class1');
        this.class2 = navParams.get('class2');
        this.class3 = navParams.get('class3');
        this.class4 = navParams.get('class4');
        this.class5 = navParams.get('class5');
        this.class6 = navParams.get('class6');
        this.class7 = navParams.get('class7');
        this.class8 = navParams.get('class8');
        

    }
    
    
    ionViewDidLoad() {
        console.log('ioniViewDidLoad AboutPage');
        if (this.class1 == "1101") {
            console.log("If");
            let per1 = document.getElementById('per1');
            per1.style.opacity = '1';
        } else {
            console.log("Else");
            let per1 = document.getElementById('per1');
            per1.style.opacity = '0';
        }

        if (this.class2 == "1102") {
            console.log("If");
            let per2 = document.getElementById('per2');
            per2.style.opacity = '1';
        } else {
            console.log("Else");
            let per2 = document.getElementById('per2');
            per2.style.opacity = '0';
        }

        if (this.class3 == "1103") {
            console.log("If");
            let per3 = document.getElementById('per3');
            per3.style.opacity = '1';
        } else {
            console.log("Else");
            let per3 = document.getElementById('per3');
            per3.style.opacity = '0';
        }
         if (this.class4 == "1104") {
                console.log("If");
                let per4 = document.getElementById('per4');
                per4.style.opacity = '1';
            } else {
                console.log("Else");
                let per4 = document.getElementById('per4');
                per4.style.opacity = '0';
            }

        if (this.class5 == "1313") {
            console.log("If");
            let per5 = document.getElementById('per5');
            per5.style.opacity = '1';
        } else {
            console.log("Else");
            let per5 = document.getElementById('per5');
            per5.style.opacity = '0';
        }

        if (this.class6 == "1301") {
            console.log("If");
            let per6 = document.getElementById('per6');
            per6.style.opacity = '1';
        } else {
            console.log("Else");
            let per6 = document.getElementById('per6');
            per6.style.opacity = '0';
        }
        if (this.class7    == "1204") {
            console.log("If");
            let per7 = document.getElementById('per7');
            per7.style.opacity = '1';
        } else {
            console.log("Else");
            let per7 = document.getElementById('per7');
            per7.style.opacity = '0';
        }

        if (this.class8 == "1407") {
            console.log("If");
            let per8 = document.getElementById('per8');
            per8.style.opacity = '1';
        } else {
            console.log("Else");
            let per8 = document.getElementById('per8');
            per8.style.opacity = '0';
        }
        }

    }
      
    

