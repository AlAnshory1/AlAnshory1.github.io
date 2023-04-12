// Website Configuration
var name = "Aris Budiman";
var about = "Saya adalah orang yang sedang mencari ilmu.";
var skill = "Tahfidz, Microsoft ."
var about = "Born in Bogor, July 03, 2002 I graduated from SMK PGRI 2 Cibinong in 2020. I am a person who is very enthusiastic about all things technology and software. I am a creative person and like to find alternative solutions to various problems. I am also open to all possible solutions. Creativity really helps me to be a good leader because I can anticipate various problems.";
skills = [
  84,
  70,
  92
];
// Website Configuration

document.getElementById("name").textContent = name;
title = document.createElement("title");
title.textContent = name;
document.head.appendChild(title);
document.querySelector("h5#skills").textContent = skill;
document.querySelector("#aboutme").textContent = about;
document.querySelector("#skill1").setAttribute("data-bar",skills[0]);
document.querySelector("#skill2").setAttribute("data-bar",skills[1]);
document.querySelector("#skill3").setAttribute("data-bar",skills[2]);

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);

switchT = document.querySelector("#toggleSwitch");
switchT.onclick = function(){
   if(switchT.textContent === "Dark"){
      document.body.classList.add("dark");
      switchT.textContent = "Light";
   }
   else{
      document.body.classList.remove('dark');
      switchT.textContent = "Dark";
   }
}
/*! Morphext - v2.4.4 - 2015-05-21 */!function(a){"use strict";function b(b,c){this.element=a(b),this.settings=a.extend({},d,c),this._defaults=d,this._init()}var c="Morphext",d={animation:"bounceIn",separator:",",speed:2e3,complete:a.noop};b.prototype={_init:function(){var b=this;this.phrases=[],this.element.addClass("morphext"),a.each(this.element.text().split(this.settings.separator),function(c,d){b.phrases.push(a.trim(d))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",a.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var a=this;this._interval=setInterval(function(){a.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery);