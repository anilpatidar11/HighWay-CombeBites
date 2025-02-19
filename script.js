//*******************nav bar***********************
function openMenu() {
  document.getElementById('sideMenu').style.right = "0";
}

function closeMenu() {
  document.getElementById('sideMenu').style.right = "-250px";
}

//**************navbar button******************

let Collection = document.querySelector(".Collection");
let deliveryy = document.querySelector(".delivery");

let bgChange = () => {   
      deliveryy.style.backgroundColor = "#ffffff";
      Collection.style.backgroundColor = "";
};

  deliveryy.addEventListener("click", bgChange);




  let bgChanger = () => {   
    deliveryy.style.backgroundColor = "";
    Collection.style.backgroundColor = "#ffffff";
};

Collection.addEventListener("click",  bgChanger);

  


 



  


  
