function Person(fullName,favoriteColor) {
  this.name = fullName,
  this.favColor = favoriteColor,
  this.greet = function(){
    console.log('hello my name is ' + this.name + ' and my favorite color is ' + this.favColor + '.');
  }
}
