

const item = document.querySelector(".items");
const imag = document.querySelectorAll(".image");

item.addEventListener('click', function (event) {
    if (event.target.classList.contains("item")) {
        item.querySelector(".active").classList.remove("active");
        // console.log(event.target.innerText);
        event.target.classList.add("active");
        let filterdata = event.target.getAttribute("data-name");
        imag.forEach((image) => {
           let filterimages =image.getAttribute("data-name");
            // console.log(filterdata);
            if ((filterimages == filterdata) || filterdata == "all") {
                image.classList.add("show");
            } else {

                image.classList.add("hide");
                image.classList.remove("show");

            }


        });
    }
})

