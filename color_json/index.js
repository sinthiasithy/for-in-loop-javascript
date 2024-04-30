let colorList = {
  "black": {
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 255, 255, 1],
      "hex": "#000"
    }
  },
  "white": {
    "category": "value",
    "type": "primary",
    "code": {
      "rgba": [0, 0, 0, 1],
      "hex": "#FFF"
    }
  },
  "red": {
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 0, 0, 1],
      "hex": "#FF0"
    }
  },
  
  "green": {
    "category": "hue",
    "type": "secondary",
    "code": {
      "rgba": [0, 255, 0, 1],
      "hex": "#0F0"
    }
  }
};
// console.log(colorList.colors[1]);
// console.log(colorList.colors[2].type);
// console.log(colorList.colors[3].code);
// console.log(colorList.colors[4].code.rgba);
// console.log(colorList.colors[5].code.hex);
for(let propty in colorList){
  console.log(propty);

}
