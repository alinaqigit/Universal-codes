
 
  fetch('../static/data.json').then(response=>response.json()).then(rsp=>{
    console.log(rsp.data)
    rsp.data.forEach(h=>{
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
  })})
  // arr.forEach(h=>{
  //   latitude=h.latitude
  //   longitude=h.longitude
    
  //   new mapboxgl.Marker({
  //     draggable:true,
  //     color:"red"
  //   })
  //   .setLngLat([longitude,latitude])
  //   .addTo(map); 
  // })
