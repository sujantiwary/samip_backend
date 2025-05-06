class apiResponse{
    constructor(message="Success", statusCode, data){
        this.message = message
        this.statuscode = statusCode
        this.data = data
        this.success = statusCode<400

    }
}