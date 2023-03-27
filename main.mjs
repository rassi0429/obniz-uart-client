import Obniz from "obniz";


const obniz = new Obniz(process.env.obniz_id);

obniz.onconnect = async () => {

    const uart = obniz.getFreeUart();
    uart.start({tx:0, rx:1})
    uart.onreceive = function(data, text) {
        console.log(data);
    }
}