//Step1:为name为username和pwd的文本框绑定获得焦点事件
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.pwd;
txtName.onfocus=txtPwd.onfocus=function(){
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
function vali(txt,reg){
  txt.className="";
  var div=txt.parentNode
    .nextElementSibling
    .firstElementChild;
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }else{
    div.className="vali_fail";
    return false;
  }
}

/**
 * 1. 查找触发事件的元素
 * 2. 绑定事件
 *  3. 查找要修改的元素
 *  4. 修改元素
 */
form.elements[form.length-2].onclick=function(){
  //依次验证每个文本框
  /*var rName=vali(txtName,/^\w{1,10}$/);
  var rPwd=vali(txtPwd,/^\d{6}$/);
  if(rName&&rPwd)//如果都验证通过
    form.submit()//才手动提交表单*/
  //依次验证每个文本框
  if(!vali(txtName,/^\w{1,10}$/)){
    txtName.focus();
  }else if(!vali(txtPwd,/^\d{6}$/)){
    txtPwd.focus();
  }else{
    form.submit()
  }
}
