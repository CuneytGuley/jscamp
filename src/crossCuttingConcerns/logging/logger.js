export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic " + data) // burada baselogger ı ezmiş olduk, ezmeyebilirz de
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo " + data)
    }
}

export class FirebaseLogger extends BaseLogger{
    log(data){
        console.log("Logged to FireBase " + data)
    }
}