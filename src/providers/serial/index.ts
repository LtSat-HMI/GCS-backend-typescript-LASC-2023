import SerialPort from 'serialport';

export class SerialConnection {
    constructor(
        // private saveTelemetryusecase: SaveTelemetryUseCase,
        private port?: SerialPort
    ) {}
        start() {
            this.port = new SerialPort({ path: "/dev/ttyACM0", baudRate: 9600, timeout: 3 });
            const parser = this.port.pipe(new SerialPort.ReadlineParser({ delimiter: '\r\n' }));
            return parser;
    }

    stop() {
        if (this.port) {
          this.port.close((error: Error) => {
            if (error) {
              console.error('Erro ao fechar a porta serial:', error);
            } else {
              console.log('Porta serial fechada com sucesso.');
            }
          });
    
          this.port = undefined;
        } else {
          console.warn('A porta serial já está fechada.');
        }
      }
}