import { Topic } from './topic.model';

export class Discussion{
    constructor(public title: string,
                public topic1: Topic,
                public topic2: Topic){}
}