AOS.init();

const dataDoEvento = new Date("Apr 8, 2024 00:00:00");
const timeStampdoEvento = dataDoEvento.getTime();

const contasAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteoEvento = timeStampdoEvento - timeStampAtual;


    const diaEmMs = 1000*60*60*24;
    const horasemMS = 1000*60*60;
    const MinutoEmMS = 1000*60;
    const DiasAteoEventi=  Math.floor(distanciaAteoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteoEvento % diaEmMs) / horasemMS);
    const minutosAteOEvento = Math.floor((distanciaAteoEvento % horasemMS) / MinutoEmMS);
    const segundosateoevento = Math.floor((distanciaAteoEvento % MinutoEmMS) / 1000);


    document.getElementById('contador').innerHTML = `${DiasAteoEventi}d ${horasAteOEvento}d ${minutosAteOEvento}m ${segundosateoevento}s`;
    if(distanciaAteoEvento < 0 ){
        clearInterval(contasAsHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado`;
    }
},1000);