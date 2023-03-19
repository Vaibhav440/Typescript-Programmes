
function Area (radius: number) : number
{
   var ans: number = 0;
   var pi : number = 3.14;
   ans = pi*radius*radius;
   return ans;
}
var radius : number = 5;
var area : number =0;
area = Area(radius);
console.log("Area of circel :"+area);