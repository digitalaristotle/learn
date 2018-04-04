function course(name,grade,description){
  this.name=name;
  this.grade=grade;
  this.description=description;
  this.chapters=[];
  this.addchapter=function(name){

  }
}
function chapter(name,description){
  this.name=name;
  this.description=description;
  this.topics=[];
  this.questions=[];
  this.addtopic=function(name,description){
  }
}
function topic(name,description){
  this.name=name;
  this.questions=[];
}
function question(question,answers,correct){

}
