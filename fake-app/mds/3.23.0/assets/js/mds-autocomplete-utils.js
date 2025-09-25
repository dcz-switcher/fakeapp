/**
 * Fonction permettant de déclencher l'affichage de l'item de chargement
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 */
export function showLoaderItem(autocompleteIdSelector) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  // <div class="mds-autocomplete mds-hidden">
  let autocompleteResultContainer = autocompleteComponent.getElementsByClassName("mds-autocomplete");
  if (autocompleteResultContainer == 0) {
    console.error("La <div> parent portant la classe mds-autocomplete n'existe pas, elle est nécessaire. Voir le Storybook pour vérifier la strcuture HTML de ce composant.");
  } else {
    // <ul class="mds-autocomplete__result" role="listbox">
    let autocompleteListContainer = autocompleteResultContainer[0].getElementsByClassName("mds-autocomplete__result");
    if (autocompleteListContainer.length == 0) {
      console.error("La liste <ul> portant la classe mds-autocomplete__result est nécessaire. Voir le Storybook pour vérifier la strcuture HTML de ce composant.");
    } else {
      let loadingItem = `
  <li class="mds-autocomplete__result-loader">
      <p class="mds-autocomplete-loader" aria-hidden="true"></p>
      <p>Recherche en cours...</p>
  </li>`;

      autocompleteListContainer[0].innerHTML = loadingItem;
      autocompleteResultContainer[0].classList.remove("mds-hidden");
      autocompleteResultContainer[0].classList.add("mds-visible");
      hideSkipLink(autocompleteIdSelector);
    }
  }
}


/**
 * Fonction permettant de retirer l'item de chargement
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 */
export function removeLoaderItem(autocompleteIdSelector) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  // <div class="mds-autocomplete mds-hidden">
  let autocompleteResultContainer = autocompleteComponent.getElementsByClassName("mds-autocomplete");
  if (autocompleteResultContainer == 0) {
    console.error("La <div> parent portant la classe mds-autocomplete n'existe pas, elle est nécessaire. Voir le Storybook pour vérifier la strcuture HTML de ce composant.");
  } else {
        // <ul class="mds-autocomplete__result" role="listbox">
        let autocompleteListContainer = autocompleteResultContainer[0].getElementsByClassName("mds-autocomplete__result");
        autocompleteListContainer[0].innerHTML = "";
        showSkipLink(autocompleteIdSelector);
  }
}

/**
 * Fonction permettant de cacher le skip link
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 */
function hideSkipLink(autocompleteIdSelector) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  let skipLink = autocompleteComponent.getElementsByClassName("mds-skipLink");

  if (skipLink.length > 0) {
    skipLink[0]?.classList.remove('mds-visible');
    skipLink[0]?.classList.add('mds-hidden');
  }
}

/**
 * Fonction permettant d'afficher le skip link
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 */
function showSkipLink(autocompleteIdSelector) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  let skipLink = autocompleteComponent.getElementsByClassName("mds-skipLink");

  if (skipLink.length > 0) {
    skipLink[0]?.classList.add('mds-visible');
    skipLink[0]?.classList.remove('mds-hidden');
  }
}


/**
 * Fonction permettant d'afficher la liste des résultats
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 * @param {*} isShowResultCount Afficher ou non l'item indiquant le nombre de résultats
 * @param {*} resultCount Nombre de résultats trouvés (pas forcément affichés)
 */
export function showResultList(autocompleteIdSelector, isShowResultCount, totalResultCount) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  // <div class="mds-autocomplete mds-hidden">
  let autocompleteResultContainer = autocompleteComponent.getElementsByClassName("mds-autocomplete");
  if (autocompleteResultContainer == 0) {
    console.error("La <div> parent portant la classe mds-autocomplete n'existe pas, elle est nécessaire. Voir le Storybook pour vérifier la strcuture HTML de ce composant.");
  } else {
    // <ul class="mds-autocomplete__result" role="listbox">
    let autocompleteListContainer = autocompleteResultContainer[0].getElementsByClassName("mds-autocomplete__result");
    if (autocompleteListContainer.length == 0) {
      console.error("La liste <ul> portant la classe mds-autocomplete__result est nécessaire. Voir le Storybook pour vérifier la strcuture HTML de ce composant.");
    } else {
      // <li class="mds-autocomplete__result-item" role="listitem" tabindex="0">
      let resultList = autocompleteListContainer[0].getElementsByClassName("mds-autocomplete__result-item");
      if (autocompleteListContainer.length > 0) {
        if (isShowResultCount === true) {
          showResultCountItem(autocompleteIdSelector, resultList.length, totalResultCount);
        }
        hideSkipLink(autocompleteIdSelector);
        let results = autocompleteListContainer[0].querySelectorAll(".mds-autocomplete__result-item");
        let autocompleteInput = autocompleteComponent.querySelectorAll('.mds-input-group input[aria-autocomplete="list"][role="combobox"]');
        handleHighlightText(autocompleteInput[0], results);
        autocompleteResultContainer[0].classList.remove("mds-hidden");
      }
    }
  }
}

/**
 * Fonction permettant de cacher la liste des résultats
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 */
export function hideResultList(autocompleteIdSelector) {
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  let resultContainer = autocompleteComponent.getElementsByClassName("mds-autocomplete");

  if (resultContainer.length > 0) {
    resultContainer[0].classList.remove("mds-visible");
    resultContainer[0].classList.add("mds-hidden");
    showSkipLink(autocompleteIdSelector);
  }
}

/**
 * Fonction permettant d'afficher l'item du nombre de résultats en plus des résultats
 * 
 * @param {*} autocompleteIdSelector Identifiant parent du composant autocomplete
 * @param {*} resultCountDisplayed Nombre de résultats affichés
 * @param {*} resultCount Nombre de résultats max trouvés
 */
function showResultCountItem(autocompleteIdSelector, resultCountDisplayed, resultCount) {
  let resultCountItem = `
  <div class="mds-autocomplete__result-infos">
    <span class="mds-icon__search--left" aria-hidden="true"></span>
    <div class="mds-autocomplete__result-infos-content">
      <p class="">${resultCountDisplayed} résultats affichés sur ${resultCount}.</p>
      <a class="mds-link" href="#">Voir tous les résultats</a>
    </div>
  </div>`;
  let autocompleteComponent = document.querySelector(autocompleteIdSelector);
  let autocompleteListContainer = autocompleteComponent.getElementsByClassName("mds-autocomplete__result");
  let existedResultCountItem = autocompleteComponent.getElementsByClassName("mds-autocomplete__result-infos");

  if (existedResultCountItem.length == 0) {
    autocompleteListContainer[0].insertAdjacentHTML('afterbegin', resultCountItem);
  }
}

/**
 * Fonction permettant de mettre en gras les textes des items correspondant à la recherche en cours.
 * 
 * @param {*} inputElement Input de l'autocomplete
 * @param {*} textElement 
 */
function handleHighlightText(inputElement, resultList) {
  resultList?.forEach(function (result) {
    let textElement = result.querySelector('p');
    let inputValue = inputElement.value;
    // Iterate through each paragraph in the suggestion
    let text = textElement.textContent;
    let lowerCaseText = text.toLowerCase();
    let highlightedText = '';

    // Check if the input value is included in the paragraph text
    if (lowerCaseText.includes(inputValue.toLowerCase())) {
      // Highlight the matching letters
      let startIndex = lowerCaseText.indexOf(inputValue.toLowerCase());

      if (startIndex !== -1) {
        let boldString = text.substring(startIndex, startIndex + inputValue.length);
        highlightedText = text.replace(boldString, `<span class="mds-text__bold">${boldString}</span>`);
      }

      // Update the paragraph HTML with the highlighted text
      textElement.innerHTML = highlightedText;
    } else {
      // Reset to normal font weight if the input value is not included
      textElement.innerHTML = text;
    }
  });
}
