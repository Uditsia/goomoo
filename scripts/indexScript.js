(() => {
  let headText = document.querySelector(".headText");

  headText.style = "width:100%;";

  window.onscroll = () => {
    let scrolVall = window.screenTop;
    if (scrolVall < 10) {
      console.log("its less than 10");
    }
  };
})();
