import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video'
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-link',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Nested Components", "f8qBeaGe2S4", "Working with nested components"),
            new Video(2, "HIDDEN CAMERA UBER PRANK", "8BJa19unuc4", "Hidden camera uber relationship fight prank")
        ]
    }
}
