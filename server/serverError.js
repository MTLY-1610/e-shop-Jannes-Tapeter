//Error constructor som vi importerar i de filer som den används

class ServerError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = ServerError
