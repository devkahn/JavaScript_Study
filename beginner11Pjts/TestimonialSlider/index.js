const testimonial = [
    {
        name : "Rolland M",
        photoUrl :"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
        text : "It really saves me time and effort. apple is exactly what our business has been lacking. Thanks guys, keep up the good work! It's really wonderful. I'm good to go. "
    },
    {
        name : "Biddy Y.",
        photoUrl :"https://images.unsplash.com/photo-1595044543674-e90d0db9e9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "I am so pleased with this product. I use apple often."
    },
    {
        name : "Kristal X.",
        photoUrl :"https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "I use apple often. Thanks apple! Wow what great service, I love it! I have gotten at least 50 times the value from apple."
    },
    {
        name : "Galina G.",
        photoUrl :"https://images.unsplash.com/photo-1508449405506-2f559e868bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "Apple is the most valuable business resource we have EVER purchased. Apple impressed me on multiple levels. If you aren't sure, always go for apple. The service was excellent."
    },
    {
        name : "Noel L.",
        photoUrl :"https://images.unsplash.com/photo-1595044543674-e90d0db9e9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "I love your system. It really saves me time and effort. sexy is exactly what our business has been lacking. The very best."
    },
    {
        name : "Zorana P.",
        photoUrl :"https://images.unsplash.com/photo-1619817278902-42bd23925bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "Korean impressed me on multiple levels. I made back the purchase price in just 48 hours!"
    },
    {
        name : "Dareen U.",
        photoUrl :"https://images.unsplash.com/photo-1580171542477-451bb1c67267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "Dude, your stuff is the bomb! Since I invested in seoul I made over 100,000 dollars profits. You guys rock!"
    },
    {
        name : "Ford V.",
        photoUrl :"https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "I would like to personally thank you for your outstanding product. Madrid has got everything I need. You guys rock!"
    },
    {
        name : "Constantina E.",
        photoUrl :"https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        text : "Man, this thing is getting better and better as I learn more about it. Since I invested in barcelona I made over 100,000 dollars profits."
    },
    {
        name : "Fawne X.",
        photoUrl :"https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
        text : "I like mountain more and more each day because it makes my life a lot easier. We were treated like royalty. You've saved our business! I didn't even need training."
    },
]

const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');
const imgEl = document.querySelector('img');



let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];

    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;

    if(idx === testimonial.length) {
        idx =0;
    }



    setTimeout(() => {
        updateTestimonial();
    }, 2000);

}
