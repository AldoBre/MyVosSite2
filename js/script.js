const openModalButton = document.querySelectorAll('.openModal')
const closeModalButton = document.querySelector('.closeModal')
const modal = document = document.querySelector('#modal')
const fade = document.querySelector('#fade');
const btn1 = document.querySelector('#openModalOne')
const btn2 = document.querySelector('#openModalTwo')
const btn3 = document.querySelector('#openModaltree')

const titleModal = document.querySelector('#titleModal')

const liItem1 = document.querySelector('#listIten1')
const liItem2 = document.querySelector('#listIten2')
const liItem3 = document.querySelector('#listIten3')
const liItem4 = document.querySelector('#listIten4')
const liItem5 = document.querySelector('#listIten5')

const priceModalPlansTwo = document.querySelector('#pricePlanTwo')
const planTitle = document.querySelector("#planTitle")
const plansPrice = document.querySelector("#plansPrice")
const plansPeriod = document.querySelector("#plansPeriod")

const btnModalText= document.querySelector('#btnModalText')

const text = document.querySelector('.text')

btn1.addEventListener('click', ()=>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")

    titleModal.innerHTML = 'Para Você'
    liItem1.innerHTML = 'Seus dados de saúde em um único lugar;'
    liItem2.innerHTML = 'Salve seus exames, e medicamentos em uso, e acesse quando quiser;'
    liItem3.innerHTML = 'Converse com um especialista onde e quando quiser;'
    liItem4.innerHTML = '<li> Tenha uma linha do tempo com todo seu histórico médico '
    liItem5.innerHTML = '<li> Um mês <b>GRÁTIS</b> para aproveitar todos os recursos da plataforma'
    planTitle.innerHTML = 'Plano Mensal'
    plansPrice.innerHTML = 'R$ 7,90'
    plansPeriod.innerHTML = '/Mês'
    btnModalText.innerHTML ='CADASTRE-SE GRATUITAMENTE'
    
    btnModalText.onclick = function(){
        window.open('https://myvos.med.br/register','_blank')
    }


    priceModalPlansTwo.style.display ='flex'
    liItem4.style.display = 'flex'
    liItem5.style.display = 'flex'
    plansPeriod.style.display = 'flex'
    
})

btn2.addEventListener('click', ()=>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")

    titleModal.innerHTML = 'Para sua Empresa'
    liItem1.innerHTML = 'Benefícios para todos os seus colaboradores;'
    liItem2.innerHTML = 'QR Code para cada colaborador usar em seu crachá;'
    liItem3.innerHTML = 'Mais segurança em caso de acidentes de trabalho;'
    planTitle.innerHTML = 'Planos a partir de'
    plansPrice.innerHTML = 'R$ 3,90'
    plansPeriod.innerHTML = '/colaborador'
    btnModalText.innerHTML= 'CONVERSE COM NOSSO ATENDIMENTO'
    liItem4.style.display ="none"
    liItem5.style.display ="none"
    priceModalPlansTwo.style.display ='none'

    btnModalText.onclick = function(){
        window.open('https://contate.me/myvos','_blank')
    }

    plansPeriod.style.display = 'flex'
    
})

btn3.addEventListener('click', ()=>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")

    titleModal.innerHTML = 'Para sua Clínica'
    liItem1.innerHTML = 'Gerêncie os contatos de seus pacientes;'
    liItem2.innerHTML = 'Tenha acesso ao prontuário durante o atendimento online;'
    liItem3.innerHTML = 'Amplie seus atendimentos;'
    liItem4.innerHTML = 'Facilidade na monetização dos atendimentos.'

    planTitle.innerHTML = 'Cadastre-se Agora'
    plansPrice.innerHTML = 'GRATUITAMENTE'
    btnModalText.innerHTML= 'CONVERSE COM NOSSO ATENDIMENTO'
    btnModalText.onclick = function(){
        window.open('https://contate.me/myvos','_blank')
    }

    plansPeriod.style.display = 'none'
    priceModalPlansTwo.style.display ='none'
    liItem5.style.display ="none"
    liItem4.style.display ="flex"
})


openModalButton.forEach(function(button){
    button.addEventListener('click', () =>{
        modal.classList.toggle("hide")
    fade.classList.toggle("hide")
    })
})

closeModalButton.addEventListener("click", () =>{
    modal.classList.add("hide")
    fade.classList.add("hide")
})

//carrega imagem assim que abre o site

window.onload = function() {
    document.querySelector("#ImgHeader").classList.add("show");
  };

// efeito de text




