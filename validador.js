function validacao() {
var cpf = document.getElementById('cpf_validacao').value
var resultadoValidacao = validaCPF(cpf)
function validaCPF(cpf){
   if (cpf.length !=11){
      return false
   }else {
      return true
   }
}
if (resultadoValidacao){
   document.getElementById('success').style.display = 'block'
}else{
   document.getElementById('error').style.display = 'block'
}
   
}
