class Message {
    constructor(time, author, text)
    {
    this.time = time;
    this.author = author;
    this.text = text;
    }

    toString () {
        console.log(`${this.time} ${this.author}: ${this.text}`)
    }
}

let tostr = new Message();

class Messenger extends Message {
    send(author, text, author2, text2)
    {
        console.log(`${author}: ${text}`)
        console.log(`${author2}: ${text2}`)
    }
 
    show_history(){
            let now = new Date();            
        console.log(`${now.getHours()}:${now.getMinutes()}` + ' ' + tostr.toString())
    }
}

let message = new Messenger()

console.log(message.send('Zaur', 'Zdraste Djavid muellim'))
console.log(message.send('Djavid', 'Zdraste'))
console.log(message.show_history())
