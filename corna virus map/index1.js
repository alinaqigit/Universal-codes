async function a(){
    let response= await fetch('./data.json');
    let rsp = await response.json()
    rsp.data.forEach(h => {
        latitude=h.latitude
      longitude=h.longitude
      inf=h.infected
      let a={draggable:false,color:"red"}
    
      if(inf>255)
        a.color="rgb(255,0,0)"
      else
        a.color=`rgb(${inf},0,0)`
       
      new mapboxgl.Marker(a)
    .setLngLat([longitude,latitude])
    .addTo(map); 
    });
}

a();