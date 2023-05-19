const zoom500 = document.querySelector(`.zoom__img`)

let zoomCount = 200
let checkZoom = true;

const zoom = () => {
    if (checkZoom) {
        zoomCount += 50
        zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
        if (zoomCount > 500) checkZoom = false;
    }
    if (!checkZoom) {
        zoomCount -= 50
        zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
        if (zoomCount === 200) checkZoom = true;
    }
    console.log(zoomCount);
}
zoom500.onclick = zoom