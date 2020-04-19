let idInput = document.querySelector('#id-check');
let idComment = document.querySelector('#id-comment');
let idpara = document.querySelector('id-para')
let idCheck = false
let passwordCheck = false;
let num_pattern1 = /[0-9]/; 
let lowerAlpha = /[a-z]/;
let upperAlpha = /[A-Z]/;
let specialChar =  /[~!@#$%^&*()_+|<>?:{}]/;
let passwordConfirm = document.querySelector('#password-search');
let passwordComment = document.querySelector('#password-comment');
let passwordDoubleCheck = document.querySelector('#password-double-check');
let pwdCheckComment = document.querySelector('#password-double-check-comment');
let passwordDouble = false;
let userInput = document.querySelector('#name-input');
let userInputCommenrt = document.querySelector('#name-input-comment');
let nameCheck = false;
let telInput = document.querySelector('#tel-input');
let signBox = document.querySelector('#signUpBox');
let telComment = document.querySelector('#tel-input-comment');
// let telInput = document.querySelector('#tel-input')
idInput.addEventListener('blur', function() {
    idCheck = false
    lengthCheck(idInput)
    // if(idInput.value.length === 0) {
    //     idComment.textContent = '필수정보입니다.'
    // }
    if(idInput.value.length !== 0) {
        confirmId(idInput.value)
    }
})

function confirmId(value){
    userData.forEach(function(element){
        if(element.userId === value) {
            idCheck = true;
            console.log(123123123)
          idComment.textContent = '아이디가 중복됩니다. 다시 입력해주세요.'
        }
    })
    if(!(idCheck)) {
        idComment.textContent = '';
    } 
}
function confirmPassword(value) {
    if(!(num_pattern1.test(value)) || (!(lowerAlpha.test(value) || upperAlpha.test(value))) || (!specialChar.test(value)) || 
       !(value.length >= 8 && value.length <=16)) {
        passwordCheck = true;
        passwordComment.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
    }
    else if(!(passwordCheck)) {
        console.log(13313123123)
        passwordComment.textContent = ''; 
    }
}

passwordConfirm.addEventListener('blur', function() {
    passwordCheck = false;
    lengthCheck(passwordConfirm)
//   if(passwordConfirm.value.length === 0) {
//       passwordComment.textContent = '필수정보입니다.'
//   }
  if(passwordConfirm.value.length !== 0) {
    confirmPassword(passwordConfirm.value)
  }
})

passwordDoubleCheck.addEventListener('blur', function() {
    passwordDouble = false;
    lengthCheck(passwordDoubleCheck)
    // if(passwordDoubleCheck.value.length === 0) {
    //     pwdCheckComment.textContent = '필수정보입니다';
    // }
    if(passwordDoubleCheck.value.length !== 0) {
        passwordDoubleCheckConfirm(passwordDoubleCheck.value)
    }
})

function passwordDoubleCheckConfirm(value) {
    console.log('password확인값',value,'비밀번호값:',passwordConfirm.value)
    if(value !== passwordConfirm.value) {
        passwordDouble = true;
        pwdCheckComment.textContent = '비밀번호가 일치하지 않습니다.'
    }
    else if(!(passwordDouble)) {
        pwdCheckComment.textContent = '';
    }
}

userInput.addEventListener('blur',function(e) {
    console.log(e)
    console.log(123123123)
    lengthCheck(userInput);
//   if(userInput.value.length === 0) {
//     userInputCommenrt.textContent = '필수정보입니다.'
//   }
    

   if((userInput.value.length !== 0)) {
        userInputCommenrt.textContent = '';
      }
})

function lengthCheck(element) {
let para = document.querySelector('.para');
    if(element.value.length === 0) {
        console.log('para',para.children[2])
        element.parentElement.nextElementSibling.textContent = '필수정보입니다';
    }
}

telInput.addEventListener('blur',function(){
    lengthCheck(telInput);
    if(telInput.value.length !== 0) {
        telComment.textContent = '';
    }
})





