import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //inject the dependency // ActivatedRoute // like after the route url has been passed what things it contain
  name = '';
  welcomeServiceMessage="";
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    console.log(this.name);//snapshot will give snapshot of params of which we are taking name param

  }

  getWelcomeMessage() {

    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response)
    );
  }

  getWelcomeMessageWithPath(){
    console.log(this.service.executeHelloWorldBeanServiceWithPath(this.name));
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeServiceMessage=response.message;
    console.log(response.message);
  }

}
