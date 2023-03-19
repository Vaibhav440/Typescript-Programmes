function Area(radius) {
    var area = 0;
    var pi = 3.14;
    area = pi * radius * radius;
    return area;
}
var radius = 5;
var result = 0;
result = Area(radius);
console.log("Area of circel :" + result);
