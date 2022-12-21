// Code here
document.addEventListener('DOMContentLoaded',()=>{


    firstBeeer()
})

url = "http://localhost:3000/beers"

//fetching the first beer for load page
function firstBeeer(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        console.log(data[0])
        firstDet = data[0]
        let beerName = document.getElementById('beer-name')
        let beerImg = document.getElementById('beer-image')
        let beerDesrpt =document.getElementById('beer-description')
        let beerReviews = document.getElementById('review-list')

        beerName.innerText = firstDet.name
        beerImg.src = firstDet.image_url
        beerDesrpt.innerText = firstDet.description
        const review = firstDet.reviews
        review.forEach(item=>{
            console.log(item)
            const li = document.createElement('li')
            // beerReviews.innerHTML=`<li>${item}</li>` 
            li.innerText= item
            beerReviews.append(li)

            li.addEventListener('click',()=>{
                li.remove()
            })
        })

        //List menu  of available beers
        const menuList = document.getElementById('beer-list')
        data.forEach(item=>{
            console.log(item.name)
            list = document.createElement('li')
            list.innerText =item.name
            menuList.appendChild(list)
            list.addEventListener('click',()=>{

                let beerNam = document.getElementById('beer-name')
                let beerImge = document.getElementById('beer-image')
                let beerDesrp =document.getElementById('beer-description')
                let beerReview = document.getElementById('review-list')

                beerNam.innerText = item.name
                console.log(item.name)
                beerImge.src = item.image_url
                console.log(item.image_url)
                beerDesrp.innerText = item.description
                console.log(item.description)

                let review = item.reviews
                review.forEach(rev=>{
                    console.log(review)
                    const li = document.createElement('li')
                    li.innerText = rev
                    beerReview.appendChild(li) 
                })

                

            })

        })



        //adding a review
        
        const  form =  document.getElementById('review-form')
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            const addedReview = document.getElementById('review-list')
            const addedReviewLi = document.createElement('li')
            addedReviewLi.innerText = e.target.review.value
            addedReview.appendChild(addedReviewLi)
            addedReviewLi.addEventListener('click',()=>{
                addedReviewLi.remove()
            })
        })


    })
}

// function otherBeers(){
//     fetch(url)
//     .then(res=>res.json())
//     .then(content =>{
//         constent.forEach(item=>{

//         })
//     })
// }
