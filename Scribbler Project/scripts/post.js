 var edit_button=document.getElementById("edit");
 var save_button=document.getElementById("save");
 
 var title_blog=document.getElementById("headingtopic");
 var title_blog_edit=document.getElementById("textareaheading");
 
 var body_content=document.getElementById("commentbody");
 var body_content_edit=document.getElementById("editcontent");
 
 var like=document.getElementById("like");
 var like_counter=document.getElementById("likecount");
 
 var comment_content=document.getElementById("commentleave");
 var comment_section=document.getElementById("allcomment");
 
 function editpost() {
     title_blog.style.display="none";
     title_blog_edit.style.display="block";
 
     body_content.style.display="none";
     body_content_edit.style.display="block";
 
     edit_button.style.display="none";
     save_button.style.display="block";
 
     var val_title=title_blog.textContent.trim();
     title_blog_edit.innerHTML=val_title;
 
     var val=body_content.textContent.trim();
     body_content_edit.innerHTML=val;
 
 
     body_content_edit.style.height = "1px";
     body_content_edit.style.height = (25+body_content_edit.scrollHeight)+"px";
 
 }
 
 function savepost() {
     title_blog.style.display="block";
     title_blog_edit.style.display="none";
 
     body_content.style.display="block";
     body_content_edit.style.display="none";
 
     edit_button.style.display="block";
     save_button.style.display="none";
 
     title_blog.innerHTML=title_blog_edit.value;
     body_content.innerHTML=body_content_edit.value;
 }
 
 var count=0;
 
 function likepost() {
 
     like.innerHTML="<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/> Liked!";
     count++;
     if(count==1){
         like_counter.innerHTML="1 person has liked it";
     }
     else{
         like_counter.innerHTML=count+" people have liked it";
     }
 
 }
 
 function postcomment(){
     var new_para=document.createElement("P");
     var text=document.createTextNode(comment_content.value);
     new_para.appendChild(text);
     new_para.setAttribute("class","comment_content");
     comment_section.insertBefore(new_para,comment_section.childNodes[0]);
 }