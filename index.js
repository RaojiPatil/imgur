async function movie (){
try{
    let res=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7d7a9a6c33a69866ca2616dbfe472ef9`)
    let data = await res.json();
   console.log(data)
   show(data.results)

}
catch(e){
    console.log(`Error:${e}`)
}
}

movie()
var div1=document.getElementById("product");
function show(movie){
    movie.forEach(function(item){

    var div=document.createElement("div");
    var figure=document.createElement("figure");
    
    var img=document.createElement("img");
    figure.append(img);
    img.src=`https://image.tmdb.org/t/p/w500/${item.poster_path}`;
     var release=document.createElement("p");
    release.id="rel";
   
    release.textContent=item.release_date||item.first_air_date;
    var prod_name=document.createElement('p')
    prod_name.id="desc";
    prod_name.textContent=` ${item.title||item.name}`;

    div.append(figure, prod_name,release);
   
    div1.append(div)
   
    })
}
