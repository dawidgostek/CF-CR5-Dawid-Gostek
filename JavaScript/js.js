var movies = JSON.parse(movie);
console.table(movies);

for (var i=0; i < movies.length; i++) {
    $("#boxMovie").append(`<div id="bigBox" class="my-2 col-12 col-lg-6">
        <div id="box" class="d-flex">
            <img src=${movies[i].image}>
            <div id="text" class="d-flex flex-column justify-content-around">
                <div class="text">
                    <h4>${movies[i].movieName}</h4>
                    <p>${movies[i].year}</>
                    <p>${movies[i].description}</p>
                </div>
                <div id="${i}"class="button d-flex justify-content-end">
                    <button class="like d-flex align-items-center">Like<img src="../IMG/like.png"></button>
                    <div class="boxplus d-flex justify-content-center align-items-center">
                        <p class="plus">${movies[i].likes}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>`)}

$(document).ready(function(){
    $(".like").on("click", function(){
    var l = $(this).parent().attr("id");
    movies[l].likes += 1;
    $(this).parent().find(".plus").html(movies[l].likes);
    console.log(movies[l].likes)
    
    })
})

$(".sort").on("click", function(){
    var i = [movies[0].likes, movies[1].likes, movies[2].likes, movies[3].likes, movies[4].likes, movies[5].likes]
    i.sort((a,b) => b - a)
    console.log(i)
    })
    