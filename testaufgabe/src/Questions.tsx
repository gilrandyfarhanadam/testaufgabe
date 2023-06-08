class Post {
    private id;
    private question;
    private answer;
    private tags;

    constructor(id:any, question:any, answer:any, tags:any[]) {
        this.id = id
        this.question = question
        this.answer = answer
        this.tags = tags
    }

    public getId(){
        return this.id
    }

    public getQuestion(){
        return this.question
    }

    public getAnswer(){
        return this.answer
    }

    public getTags(){
        return this.tags
    }
}

export default Post