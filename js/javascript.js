function.validacao(){
	if(document.form.nome.value==""){
	  alert("Por favor, preencha o campo nome.");
	  document.form.nome.focus();
	  return false;
}
	if(document.form.cpf.id==""){
	   alert("Por favor, insira seu cpf");
       document.form.cpf.focus();
	   return false;
}       

	if(document.form.email.value==""|| document.form.email.value.indeOf('@')==-1|| document.form.email.value.indeOf('.')==-1{
	  alert("Por favor, digite um endereço de email válido!");
	  document.form.email.focus();
	  return false;
}
