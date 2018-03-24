var pet_info = {
name: "Poodle",
weight: 45,
happiness: 4
}

$(function() {
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

  function clickedTreatButton() {
    pet_info.happiness += 1;
    // Increase pet happiness
    pet_info.weight += 1;
    // Increase pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
        pet_info.happiness += 1;
        pet_info.weight -=1;

    // Increase pet happiness
    // Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info.happiness -=1;
    pet_info.weight -=1;
    // Decrease pet happiness
    // Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    if (checkWeightAndHappinessBeforeUpdating()){
    updatePetInfoInHtml();
    }
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    var valid = true;
    if (pet_info.weight < 0) {
        valid = false;
        pet_info.weight = 0;   
          alert("Your dog is too skinny, feed it now.")
    }
    if (pet_info.happiness < 0) {
        valid = false;
        pet_info.happiness = 0;
          alert("Your dog isn't happy, play with it or give it a treat.")
    }
    return valid;
}

  // function checkWeightAndHappinessBeforeUpdating() {
  //   if (pet_info.weight < 0) {
  //       pet_info.weight = 0;   
  //         alert("Your dog is too skinny, feed it now.")
  //   }
  //   if (pet_info.happiness < 0) {
  //       pet_info.happiness = 0;
  //         alert("Your dog isn't happy, play with it or give it a treat.")
  //   }
  //   // Add conditional so if weight is lower than zero, set it back to zero
  // }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
