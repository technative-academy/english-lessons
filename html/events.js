let tabContainer = document.querySelectorAll(".tab-container");

tabContainer.forEach((container) => {

  var profileButtonElements = container.querySelectorAll(".tab-button");

  profileButtonElements.forEach(addButtonListener);

  function addButtonListener(profileButtonElement) {
    profileButtonElement.addEventListener("click", profileButtonClick);
  }

  function profileButtonClick(event) {
    const clickedButton = event.currentTarget;
    //alert("You clicked" + clickedButton.textContent);
    const contentElements = container.querySelectorAll(".tab-content");
    console.log(contentElements);
    //var index = Array.from(profileButtonElements).indexOf(contentElements);
    const index = [...profileButtonElements].indexOf(event.currentTarget);
    console.log(index);

    contentElements.forEach((content) =>
      content.classList.remove("quoteSelected"),
    );
    contentElements[index].classList.add("quoteSelected");

    profileButtonElements.forEach((buttonElement) =>
      buttonElement.classList.remove("active"),
    );
    profileButtonElements[index].classList.add("active");
  }


})
