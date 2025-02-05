document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.querySelector(".color-box");
    const hexColor = document.getElementById("hexColor");

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbToHex(red, green, blue);

        colorBox.style.backgroundColor = rgbColor;
        hexColor.textContent = hex;
        colorPicker.value = hex;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1).toUpperCase()}`;
    }

    function hexToRgb(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    function updateFromInputs() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const rgb = hexToRgb(colorPicker.value);
        redRange.value = rgb.r;
        greenRange.value = rgb.g;
        blueRange.value = rgb.b;

        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;

        updateColor();
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateFromInputs);
    greenInput.addEventListener("input", updateFromInputs);
    blueInput.addEventListener("input", updateFromInputs);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
