function clickBot(e){
    console.log("click",e);
    if(e==='Italia'){
        document.getElementById('plato').innerText='pizza bianca napoletana';
        document.getElementById('imagen4').setAttribute('src',"./img/pizza2.jpg");
        document.getElementById('imagen2').setAttribute('src',"./img/pizza.jpg");
        document.getElementById('cuento').innerText="En mi viaje a Nápoles, me encontré con una encantadora pizzería que exudaba aroma a masa recién horneada.Decidí probar la 'Pizza Bianca', una delicia con aceite de oliva, ajo fresco, queso mozzarella y romero. La combinación de la masa crujiente y el queso derretido creó una experiencia culinaria única.Sentada junto a la ventana, saboreé cada bocado, capturando la esencia auténtica de la pizza napolitana. Fue un momento breve pero inolvidable, donde la simplicidad y el sabor se fusionaron en la ciudad que lleva la pizza en su corazón.";
    } else if (e==='Japon') {
        document.getElementById('plato').innerText='Ramen en Tokio';
        document.getElementById('imagen4').setAttribute('src',"./img/ramen2.jpg");
        document.getElementById('imagen2').setAttribute('src',"./img/ramen.jpg");
        document.getElementById('cuento').innerText="En el corazón de Tokio, me aventuré a un pequeño local de ramen recomendado por lugareños. El lugar exudaba autenticidad, con mesas compartidas y un chef dedicado tras el mostrador.Opté por el ramen tonkotsu, y mi elección resultó ser una obra maestra culinaria. El caldo untuoso, fideos perfectamente cocidos y trozos de cerdo derretían mi paladar en una sinfonía de sabores.";
    } else if(e==='Mexico'){
        document.getElementById('plato').innerText='Noche Inolvidable en México';
        document.getElementById('imagen4').setAttribute('src',"./img/tacos2.jpg");
        document.getElementById('imagen2').setAttribute('src',"./img/tacos.jpg");
        document.getElementById('cuento').innerText="En una cálida noche mexicana, mi amigo Juan y yo nos aventuramos a explorar la auténtica escena de tacos en las calles de su ciudad natal. Nos sumergimos en un laberinto de olores tentadores y luces vibrantes.Optamos por un puesto modesto con un cartel que prometía 'los mejores tacos al pastor'. El aroma a carne asada y especias llenaba el aire mientras esperábamos nuestras ordenes con anticipación.";
    }
}