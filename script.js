const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  // jyare openModal valo function call thashe tyare "modal na classList ma navi class add kari do 'active' naam ni ".
  modal.classList.add("active");
  // jyare openModal valo function call thashe tyare "overlay na classList ma navi class add kari do 'overlayactive' naam ni  "
  overlay.classList.add("overlayactive");
};

// Modal close function
// close calo function che to ama sidhi vat che k j apde pahela add karelu hase te have apde remove karishu to j pahela hatu avu ne avu thai jashe ,
//  apde active and overlayactive ne add karela have aa abne ne remove kari daiye mate j pahela hatu avu ne avu atyre malshe 

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};