
import { Topic } from './topic.model';
import { Discussion } from './discussion.model';

export class DiscussionsService{
    discussions: Discussion[] = [
        new Discussion(
            "1st NC English Conner",
            new Topic("Procrastination",
                      "blabla1",
                      ""),
            new Topic(
                    "Stereotype",
                    "blabla2",
                    "")
        ),
        new Discussion(
            "2nd NC English Conner",
            
            new Topic("Procrastination",
                    "blabla1111",
                    ""),
            
            new Topic(
                    "Stereotype",
                    "blabla2222",
                    "")
        )
    ];
    
    constructor(){}
    
    getDiscussions(){
        return this.discussions.slice();
    }
}