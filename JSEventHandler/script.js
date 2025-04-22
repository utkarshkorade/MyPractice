const btnmode = document.querySelector("#mode");
currentmode="dark";

btnmode.addEventListener("click", () => {
    if(currentmode=="dark"){

        currentmode="light";
    }
    console.log(currentmode);
});
