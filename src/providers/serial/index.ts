;import { TelemetrySerial } from '@/entites/TelemetrySerial';
import SerialPort from 'serialport';

export class SerialConnection {
    constructor(
        // private saveTelemetryusecase: SaveTelemetryUseCase,
        private port?: SerialPort
    ) {
      this.port = new SerialPort({ path: `${process.env.SERIAL_PORT}`, baudRate: 9600, timeout: 3 });
    }
    start() {
          const parser = this.port.pipe(new SerialPort.ReadlineParser({ delimiter: '\r\n' }));
          const listAux = [];
          // eslint-disable-next-line no-constant-condition
          while(1) {
                if (parser.length === 16) {
                const data = new TelemetrySerial({
                count: parser[0],
                temperatura: parser[1],
                altitude: parser[2],
                tensao: parser[3],
                gpsLatitude: parser[4],
                gpsLongitude: parser[5],
                gpsAltura: parser[6],
                giroscopioP: parser[7],
                giroscopioR: parser[8],
                giroscopioY: parser[9],
                acelerometroP: parser[10],
                acelerometroR: parser[11],
                acelerometroY: parser[12],
                magnetometroP: parser[13],
                magnetometroR: parser[14],
                magnetometroY: parser[15]
              });
              if (data && data != undefined) {
                listAux.push(data);
                if ((listAux.length % 5) == 0) {
                  return listAux;
                }
                
              }
            }
          }
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