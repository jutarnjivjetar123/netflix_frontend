const apiUrl = "http://127.0.0.1:3000";
let storedOffers = [];
let selectedOfferIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  const completedStage = localStorage.getItem("completedStage");
  console.log(completedStage);
  if (completedStage !== null) {
    if (completedStage === "1") {
      window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
    }
  }

  if (window.innerWidth > 840) {
    document.querySelector(".progressionTrackText").innerHTML =
      'Create account > <span class="currentProgressStage">Select Offer</span> > Payment device > Confirm subscription > Verify email';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
  }
  if (window.innerWidth < 840) {
    document.querySelector(".progressionTrackText").innerHTML =
      'Current stage: <span class="currentProgressStage">Select offer</span>';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    document.querySelector(".selectOfferText").innerText =
      "Choose the right plan for you";
  }
  if (window.innerWidth < 450) {
    document.querySelector(".progressionTrackText").innerHTML =
      '<span class="currentProgressStage">Select offer</span>';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    document.querySelector(".selectOfferText").innerText =
      "Pick from the plans below";
  }
  if (window.innerWidth < 310) {
    document.querySelector(".goBackButtonElement").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>';
    document.querySelector(".selectOfferText").innerText = "Select plan below";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 840) {
      document.querySelector(".progressionTrackText").innerHTML =
        'Create account > <span class="currentProgressStage">Select Offer</span> > Payment device > Confirm subscription > Verify email';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 840) {
      document.querySelector(".progressionTrackText").innerHTML =
        'Current stage: <span class="currentProgressStage">Select offer</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
      document.querySelector(".selectOfferText").innerText =
        "Choose the right plan for you";
    }
    if (window.innerWidth < 450) {
      document.querySelector(".progressionTrackText").innerHTML =
        '<span class="currentProgressStage">Select offer</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
      document.querySelector(".selectOfferText").innerText =
        "Pick from the plans below";
    }
    if (window.innerWidth < 310) {
      document.querySelector(".goBackButtonElement").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>';
      document.querySelector(".selectOfferText").innerText =
        "Select plan below";
    }
  });
});

//Code block for fetching data from the server and on page load display that data
document.addEventListener("DOMContentLoaded", async () => {
  const getAllOffersURL = `${apiUrl}/offer/offers`;
  try {
    const response = await fetch(getAllOffersURL);
    console.log(response);
    if (response.status === 404) {
      throw new Error("No offers available right now, please try again later");
    }
    if (!response.ok) {
      throw new Error("Could not load offers right now");
    }
    storedOffers = await response.json().then((data) => {
      return data.offers;
    });
    console.log(storedOffers);
  } catch (error) {
    document.querySelector(
      ".offerPanel"
    ).innerHTML = `<p>${error.message}</p>;`;
  }

  //Display data retrieved from the server about given offer plans
  if (storedOffers.length > 0) {
    const offerPanel = document.querySelector(".offerPanel");
    offerPanel.innerHTML = "";
    if (window.innerWidth > 1049) {
      storedOffers.forEach((offer, index) => {
        //Create div which will contain all the relevant data for a single offer instance
        const offerDiv = document.createElement("div");
        offerDiv.classList.add("offer");

        //Create a div which contains offer name and resolution it provides
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerTitle = document.createElement("p");
        offerTitle.classList.add("offerHeaderTitle");
        offerTitle.innerText = offer.offerTitle;

        const offerSubtitle = document.createElement("p");
        offerSubtitle.classList.add("offerHeaderSubtitle");
        offerSubtitle.innerText = offer.offerSubtitle;

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");
        offerHeader.innerHTML = "";
        offerHeader.append(offerTitle, offerSubtitle, offerHeaderSpan);
        console.log(offer.offerColor);
        offerHeader.style.background = offer.offerColor;
        offerDiv.appendChild(offerHeader);
        const offerBody = document.createElement("div");
        offerBody.classList.add("offerBody");
        const items = [
          {
            item: "Monthly price",
            value: offer.monthlyBillingAmount,
          },
          {
            item: "Video and sound quality",
            value: offer.resolutionQuality,
          },
          {
            item: "Resolution",
            value: offer.resolutionDescription,
          },
        ];
        items.forEach((item, index) => {
          const itemDiv = document.createElement("div");
          const itemName = document.createElement("p");
          const itemValue = document.createElement("p");

          itemDiv.classList.add("offerItem");
          itemName.classList.add("offerItemName");
          itemValue.classList.add("offerItemValue");
          if (index === 0) itemValue.classList.add("firstItem");

          itemName.innerText = item.item;
          itemValue.innerText = item.value;
          itemDiv.append(itemName, itemValue);
          offerBody.appendChild(itemDiv);
        });

        if (offer.isSpatialAudio) {
          const spatialAudioItem = document.createElement("div");
          const spatialAudioItemName = document.createElement("p");
          const spatialAudioItemValue = document.createElement("p");

          spatialAudioItem.classList.add("offerItem");
          spatialAudioItemName.classList.add("offerItemName");
          spatialAudioItemValue.classList.add("offerItemValue");

          spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
          spatialAudioItemValue.innerText = "Included";
          spatialAudioItem.append(spatialAudioItemName, spatialAudioItemValue);
          offerBody.appendChild(spatialAudioItem);
        }

        const remainingItems = [
          {
            item: "Supported devices",
            value: offer.supportedDevices,
          },
          {
            item: "Devices your household can watch at the same time",
            value: offer.maxNumberOfDevicesToWatch,
          },
          {
            item: "Download devices",
            value: offer.maxNumberOfDevicesToDownload,
          },
        ];
        remainingItems.forEach((item, index) => {
          const itemDiv = document.createElement("div");
          const itemName = document.createElement("p");
          const itemValue = document.createElement("p");

          itemDiv.classList.add("offerItem");
          itemName.classList.add("offerItemName");
          itemValue.classList.add("offerItemValue");
          if (index === remainingItems.length - 1)
            itemDiv.classList.add("lastItem");

          itemName.innerText = item.item;
          itemValue.innerText = item.value;
          itemDiv.append(itemName, itemValue);
          offerBody.appendChild(itemDiv);
        });
        offerDiv.appendChild(offerBody);
        offerPanel.appendChild(offerDiv);
      });
    }
    if (window.innerWidth < 1050) {
      const offerPanel = document.querySelector(".offerPanel");
      offerPanel.innerHTML = "";
      const offerHeaderPanel = document.createElement("div");
      offerHeaderPanel.classList.add("offerHeaderPanel");
      const offerBody = document.createElement("div");
      offerBody.classList.add("selectedOfferBody");
      storedOffers.forEach((offer, index) => {
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerHeaderTitle = document.createElement("p");
        offerHeaderTitle.innerText = offer.offerTitle;
        offerHeaderTitle.classList.add("offerHeaderTitle");

        const offerHeaderSubtitle = document.createElement("p");
        offerHeaderSubtitle.innerText = offer.offerSubtitle;
        offerHeaderSubtitle.classList.add("offerHeaderSubtitle");

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");
        offerHeader.append(
          offerHeaderTitle,
          offerHeaderSubtitle,
          offerHeaderSpan
        );
        offerHeaderPanel.append(offerHeader);
      });
      offerPanel.appendChild(offerHeaderPanel);
      offerPanel.appendChild(offerBody);
      offerHeaderPanel.children[storedOffers.length - 1].classList.add(
        "selected"
      );
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;

      selectedOfferIndex = storedOffers.length - 1;
      offerHeaderPanel.children[storedOffers.length - 1].style.background =
        storedOffers[selectedOfferIndex].offerColor;
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[0].style.color = "white";
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[1].style.color = "white";

      const items = [
        {
          item: "Monthly price",
          value: storedOffers[selectedOfferIndex].monthlyBillingAmount,
        },
        {
          item: "Video and sound quality",
          value: storedOffers[selectedOfferIndex].resolutionQuality,
        },
        {
          item: "Resolution",
          value: storedOffers[selectedOfferIndex].resolutionDescription,
        },
      ];
      items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("p");
        const itemValue = document.createElement("p");

        itemDiv.classList.add("offerItem");
        itemName.classList.add("offerItemName");
        itemValue.classList.add("offerItemValue");
        if (index === 0) itemValue.classList.add("firstItem");

        itemName.innerText = item.item;
        itemValue.innerText = item.value;
        itemDiv.append(itemName, itemValue);
        offerBody.appendChild(itemDiv);
      });
      if (storedOffers[selectedOfferIndex].isSpatialAudio) {
        const spatialAudioItem = document.createElement("div");
        const spatialAudioItemName = document.createElement("p");
        const spatialAudioItemValue = document.createElement("p");

        spatialAudioItem.classList.add("offerItem");
        spatialAudioItemName.classList.add("offerItemName");
        spatialAudioItemValue.classList.add("offerItemValue");

        spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
        spatialAudioItemValue.innerText = "Included";
        spatialAudioItem.append(spatialAudioItemName, spatialAudioItemValue);
        offerBody.appendChild(spatialAudioItem);
      }

      const remainingItems = [
        {
          item: "Supported devices",
          value: storedOffers[selectedOfferIndex].supportedDevices,
        },
        {
          item: "Devices your household can watch at the same time",
          value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToWatch,
        },
        {
          item: "Download devices",
          value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToDownload,
        },
      ];
      remainingItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("p");
        const itemValue = document.createElement("p");

        itemDiv.classList.add("offerItem");
        itemName.classList.add("offerItemName");
        itemValue.classList.add("offerItemValue");
        if (index === remainingItems.length - 1)
          itemDiv.classList.add("lastItem");

        itemName.innerText = item.item;
        itemValue.innerText = item.value;
        itemDiv.append(itemName, itemValue);
        offerBody.appendChild(itemDiv);
      });
      const offerHeaders = document.querySelectorAll(".offerHeader");
      offerHeaders.forEach((offer, index) => {
        offer.addEventListener("click", () => {
          offerHeaders.forEach((item) => {
            if (item.classList.contains("selected")) {
              item.classList.remove("selected");
              item.children[2].innerHTML = "";
              item.style.background = "white";
              item.children[0].style.color = "black";
              item.children[1].style.color = "black";
            }
          });
          offer.classList.add("selected");
          console.log(offer.children[2]);
          offer.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
          offer.style.background = storedOffers[index].offerColor;
          offer.children[0].style.color = "white";
          offer.children[1].style.color = "white";
          selectedOfferIndex = index;
          console.log(storedOffers[selectedOfferIndex].offerId);
          offerBody.innerHTML = "";
          const items = [
            {
              item: "Monthly price",
              value: storedOffers[selectedOfferIndex].monthlyBillingAmount,
            },
            {
              item: "Video and sound quality",
              value: storedOffers[selectedOfferIndex].resolutionQuality,
            },
            {
              item: "Resolution",
              value: storedOffers[selectedOfferIndex].resolutionDescription,
            },
          ];
          items.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            const itemName = document.createElement("p");
            const itemValue = document.createElement("p");

            itemDiv.classList.add("offerItem");
            itemName.classList.add("offerItemName");
            itemValue.classList.add("offerItemValue");
            if (index === 0) itemValue.classList.add("firstItem");

            itemName.innerText = item.item;
            itemValue.innerText = item.value;
            itemDiv.append(itemName, itemValue);
            offerBody.appendChild(itemDiv);
          });
          if (storedOffers[selectedOfferIndex].isSpatialAudio) {
            const spatialAudioItem = document.createElement("div");
            const spatialAudioItemName = document.createElement("p");
            const spatialAudioItemValue = document.createElement("p");

            spatialAudioItem.classList.add("offerItem");
            spatialAudioItemName.classList.add("offerItemName");
            spatialAudioItemValue.classList.add("offerItemValue");

            spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
            spatialAudioItemValue.innerText = "Included";
            spatialAudioItem.append(
              spatialAudioItemName,
              spatialAudioItemValue
            );
            offerBody.appendChild(spatialAudioItem);
          }

          const remainingItems = [
            {
              item: "Supported devices",
              value: storedOffers[selectedOfferIndex].supportedDevices,
            },
            {
              item: "Devices your household can watch at the same time",
              value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToWatch,
            },
            {
              item: "Download devices",
              value:
                storedOffers[selectedOfferIndex].maxNumberOfDevicesToDownload,
            },
          ];
          remainingItems.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            const itemName = document.createElement("p");
            const itemValue = document.createElement("p");

            itemDiv.classList.add("offerItem");
            itemName.classList.add("offerItemName");
            itemValue.classList.add("offerItemValue");
            if (index === remainingItems.length - 1)
              itemDiv.classList.add("lastItem");

            itemName.innerText = item.item;
            itemValue.innerText = item.value;
            itemDiv.append(itemName, itemValue);
            offerBody.appendChild(itemDiv);
          });
        });
      });
    }
  }
  const offers = document.querySelectorAll(".offer");
  offers.forEach((offer, index) => {
    offer.addEventListener("click", () => {
      offers.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
          item.children[0].children[2].innerHTML = "";
        }
      });
      offer.classList.add("selected");
      offer.children[0].children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
      selectedOfferIndex = index;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const offers = document.querySelectorAll(".offer");
  offers.forEach((offer) => {
    offer.addEventListener("click", () => {
      offers.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        }
      });
      offer.classList.add("selected");
      offer.children[0].children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
    });
  });
});

//Code block for displaying fetched data in corresponding form, depending on the screen size
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    const offerPanel = document.querySelector(".offerPanel");
    offerPanel.innerHTML = "";
    if (window.innerWidth < 1050) {
      const offerPanel = document.querySelector(".offerPanel");
      offerPanel.innerHTML = "";
      const offerHeaderPanel = document.createElement("div");
      offerHeaderPanel.classList.add("offerHeaderPanel");
      const offerBody = document.createElement("div");
      offerBody.classList.add("selectedOfferBody");
      storedOffers.forEach((offer, index) => {
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerHeaderTitle = document.createElement("p");
        offerHeaderTitle.innerText = offer.offerTitle;
        offerHeaderTitle.classList.add("offerHeaderTitle");

        const offerHeaderSubtitle = document.createElement("p");
        offerHeaderSubtitle.innerText = offer.offerSubtitle;
        offerHeaderSubtitle.classList.add("offerHeaderSubtitle");

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");
        offerHeader.append(
          offerHeaderTitle,
          offerHeaderSubtitle,
          offerHeaderSpan
        );
        offerHeaderPanel.append(offerHeader);
      });
      offerPanel.appendChild(offerHeaderPanel);
      offerPanel.appendChild(offerBody);
      offerHeaderPanel.children[storedOffers.length - 1].classList.add(
        "selected"
      );
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;

      selectedOfferIndex = storedOffers.length - 1;
      offerHeaderPanel.children[storedOffers.length - 1].style.background =
        storedOffers[selectedOfferIndex].offerColor;
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[0].style.color = "white";
      offerHeaderPanel.children[
        storedOffers.length - 1
      ].children[1].style.color = "white";

      const items = [
        {
          item: "Monthly price",
          value: storedOffers[selectedOfferIndex].monthlyBillingAmount,
        },
        {
          item: "Video and sound quality",
          value: storedOffers[selectedOfferIndex].resolutionQuality,
        },
        {
          item: "Resolution",
          value: storedOffers[selectedOfferIndex].resolutionDescription,
        },
      ];
      items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("p");
        const itemValue = document.createElement("p");

        itemDiv.classList.add("offerItem");
        itemName.classList.add("offerItemName");
        itemValue.classList.add("offerItemValue");
        if (index === 0) itemValue.classList.add("firstItem");

        itemName.innerText = item.item;
        itemValue.innerText = item.value;
        itemDiv.append(itemName, itemValue);
        offerBody.appendChild(itemDiv);
      });
      if (storedOffers[selectedOfferIndex].isSpatialAudio) {
        const spatialAudioItem = document.createElement("div");
        const spatialAudioItemName = document.createElement("p");
        const spatialAudioItemValue = document.createElement("p");

        spatialAudioItem.classList.add("offerItem");
        spatialAudioItemName.classList.add("offerItemName");
        spatialAudioItemValue.classList.add("offerItemValue");

        spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
        spatialAudioItemValue.innerText = "Included";
        spatialAudioItem.append(spatialAudioItemName, spatialAudioItemValue);
        offerBody.appendChild(spatialAudioItem);
      }

      const remainingItems = [
        {
          item: "Supported devices",
          value: storedOffers[selectedOfferIndex].supportedDevices,
        },
        {
          item: "Devices your household can watch at the same time",
          value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToWatch,
        },
        {
          item: "Download devices",
          value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToDownload,
        },
      ];
      remainingItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("p");
        const itemValue = document.createElement("p");

        itemDiv.classList.add("offerItem");
        itemName.classList.add("offerItemName");
        itemValue.classList.add("offerItemValue");
        if (index === remainingItems.length - 1)
          itemDiv.classList.add("lastItem");

        itemName.innerText = item.item;
        itemValue.innerText = item.value;
        itemDiv.append(itemName, itemValue);
        offerBody.appendChild(itemDiv);
      });
      const offerHeaders = document.querySelectorAll(".offerHeader");
      offerHeaders.forEach((offer, index) => {
        offer.addEventListener("click", () => {
          offerHeaders.forEach((item) => {
            if (item.classList.contains("selected")) {
              item.classList.remove("selected");
              item.children[2].innerHTML = "";
              item.style.background = "white";
              item.children[0].style.color = "black";
              item.children[1].style.color = "black";
            }
          });
          offer.classList.add("selected");
          console.log(offer.children[2]);
          offer.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
          offer.style.background = storedOffers[index].offerColor;
          offer.children[0].style.color = "white";
          offer.children[1].style.color = "white";
          selectedOfferIndex = index;
          console.log(storedOffers[selectedOfferIndex].offerId);
          offerBody.innerHTML = "";
          const items = [
            {
              item: "Monthly price",
              value: storedOffers[selectedOfferIndex].monthlyBillingAmount,
            },
            {
              item: "Video and sound quality",
              value: storedOffers[selectedOfferIndex].resolutionQuality,
            },
            {
              item: "Resolution",
              value: storedOffers[selectedOfferIndex].resolutionDescription,
            },
          ];
          items.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            const itemName = document.createElement("p");
            const itemValue = document.createElement("p");

            itemDiv.classList.add("offerItem");
            itemName.classList.add("offerItemName");
            itemValue.classList.add("offerItemValue");
            if (index === 0) itemValue.classList.add("firstItem");

            itemName.innerText = item.item;
            itemValue.innerText = item.value;
            itemDiv.append(itemName, itemValue);
            offerBody.appendChild(itemDiv);
          });
          if (storedOffers[selectedOfferIndex].isSpatialAudio) {
            const spatialAudioItem = document.createElement("div");
            const spatialAudioItemName = document.createElement("p");
            const spatialAudioItemValue = document.createElement("p");

            spatialAudioItem.classList.add("offerItem");
            spatialAudioItemName.classList.add("offerItemName");
            spatialAudioItemValue.classList.add("offerItemValue");

            spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
            spatialAudioItemValue.innerText = "Included";
            spatialAudioItem.append(
              spatialAudioItemName,
              spatialAudioItemValue
            );
            offerBody.appendChild(spatialAudioItem);
          }

          const remainingItems = [
            {
              item: "Supported devices",
              value: storedOffers[selectedOfferIndex].supportedDevices,
            },
            {
              item: "Devices your household can watch at the same time",
              value: storedOffers[selectedOfferIndex].maxNumberOfDevicesToWatch,
            },
            {
              item: "Download devices",
              value:
                storedOffers[selectedOfferIndex].maxNumberOfDevicesToDownload,
            },
          ];
          remainingItems.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            const itemName = document.createElement("p");
            const itemValue = document.createElement("p");

            itemDiv.classList.add("offerItem");
            itemName.classList.add("offerItemName");
            itemValue.classList.add("offerItemValue");
            if (index === remainingItems.length - 1)
              itemDiv.classList.add("lastItem");

            itemName.innerText = item.item;
            itemValue.innerText = item.value;
            itemDiv.append(itemName, itemValue);
            offerBody.appendChild(itemDiv);
          });
        });
      });
    }
    if (window.innerWidth > 1049) {
      storedOffers.forEach((offer, index) => {
        //Create div which will contain all the relevant data for a single offer instance
        const offerDiv = document.createElement("div");
        offerDiv.classList.add("offer");

        //Create a div which contains offer name and resolution it provides
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerTitle = document.createElement("p");
        offerTitle.classList.add("offerHeaderTitle");
        offerTitle.innerText = offer.offerTitle;

        const offerSubtitle = document.createElement("p");
        offerSubtitle.classList.add("offerHeaderSubtitle");
        offerSubtitle.innerText = offer.offerSubtitle;

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");
        offerHeader.innerHTML = "";
        offerHeader.append(offerTitle, offerSubtitle, offerHeaderSpan);
        console.log(offer.offerColor);
        offerHeader.style.background = offer.offerColor;
        offerDiv.appendChild(offerHeader);
        const offerBody = document.createElement("div");
        offerBody.classList.add("offerBody");
        const items = [
          {
            item: "Monthly price",
            value: offer.monthlyBillingAmount,
          },
          {
            item: "Video and sound quality",
            value: offer.resolutionQuality,
          },
          {
            item: "Resolution",
            value: offer.resolutionDescription,
          },
        ];
        items.forEach((item, index) => {
          const itemDiv = document.createElement("div");
          const itemName = document.createElement("p");
          const itemValue = document.createElement("p");

          itemDiv.classList.add("offerItem");
          itemName.classList.add("offerItemName");
          itemValue.classList.add("offerItemValue");
          if (index === 0) itemValue.classList.add("firstItem");

          itemName.innerText = item.item;
          itemValue.innerText = item.value;
          itemDiv.append(itemName, itemValue);
          offerBody.appendChild(itemDiv);
        });

        if (offer.isSpatialAudio) {
          const spatialAudioItem = document.createElement("div");
          const spatialAudioItemName = document.createElement("p");
          const spatialAudioItemValue = document.createElement("p");

          spatialAudioItem.classList.add("offerItem");
          spatialAudioItemName.classList.add("offerItemName");
          spatialAudioItemValue.classList.add("offerItemValue");

          spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
          spatialAudioItemValue.innerText = "Included";
          spatialAudioItem.append(spatialAudioItemName, spatialAudioItemValue);
          offerBody.appendChild(spatialAudioItem);
        }

        const remainingItems = [
          {
            item: "Supported devices",
            value: offer.supportedDevices,
          },
          {
            item: "Devices your household can watch at the same time",
            value: offer.maxNumberOfDevicesToWatch,
          },
          {
            item: "Download devices",
            value: offer.maxNumberOfDevicesToDownload,
          },
        ];
        remainingItems.forEach((item, index) => {
          const itemDiv = document.createElement("div");
          const itemName = document.createElement("p");
          const itemValue = document.createElement("p");

          itemDiv.classList.add("offerItem");
          itemName.classList.add("offerItemName");
          itemValue.classList.add("offerItemValue");
          if (index === remainingItems.length - 1)
            itemDiv.classList.add("lastItem");

          itemName.innerText = item.item;
          itemValue.innerText = item.value;
          itemDiv.append(itemName, itemValue);
          offerBody.appendChild(itemDiv);
        });
        offerDiv.appendChild(offerBody);
        offerPanel.appendChild(offerDiv);
      });
    }
  });
});

function displayDataForComputerScreen() {
  storedOffers.forEach((offer, index) => {
    //Create div which will contain all the relevant data for a single offer instance
    const offerDiv = document.createElement("div");
    offerDiv.classList.add("offer");

    //Create a div which contains offer name and resolution it provides
    const offerHeader = document.createElement("div");
    offerHeader.classList.add("offerHeader");

    const offerTitle = document.createElement("p");
    offerTitle.classList.add("offerHeaderTitle");
    offerTitle.innerText = offer.offerTitle;

    const offerSubtitle = document.createElement("p");
    offerSubtitle.classList.add("offerHeaderSubtitle");
    offerSubtitle.innerText = offer.offerSubtitle;

    const offerHeaderSpan = document.createElement("span");
    offerHeaderSpan.classList.add("offerHeaderSpan");
    offerHeader.innerHTML = "";
    offerHeader.append(offerTitle, offerSubtitle, offerHeaderSpan);
    console.log(offer.offerColor);
    offerHeader.style.background = offer.offerColor;
    offerDiv.appendChild(offerHeader);
    const offerBody = document.createElement("div");
    offerBody.classList.add("offerBody");
    const items = [
      {
        item: "Monthly price",
        value: offer.monthlyBillingAmount,
      },
      {
        item: "Video and sound quality",
        value: offer.resolutionQuality,
      },
      {
        item: "Resolution",
        value: offer.resolutionDescription,
      },
    ];
    items.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      const itemName = document.createElement("p");
      const itemValue = document.createElement("p");

      itemDiv.classList.add("offerItem");
      itemName.classList.add("offerItemName");
      itemValue.classList.add("offerItemValue");
      if (index === 0) itemValue.classList.add("firstItem");

      itemName.innerText = item.item;
      itemValue.innerText = item.value;
      itemDiv.append(itemName, itemValue);
      offerBody.appendChild(itemDiv);
    });

    if (offer.isSpatialAudio) {
      const spatialAudioItem = document.createElement("div");
      const spatialAudioItemName = document.createElement("p");
      const spatialAudioItemValue = document.createElement("p");

      spatialAudioItem.classList.add("offerItem");
      spatialAudioItemName.classList.add("offerItemName");
      spatialAudioItemValue.classList.add("offerItemValue");

      spatialAudioItemName.innerText = "Spatial audio (immersive sound)";
      spatialAudioItemValue.innerText = "Included";
      spatialAudioItem.append(spatialAudioItemName, spatialAudioItemValue);
      offerBody.appendChild(spatialAudioItem);
    }

    const remainingItems = [
      {
        item: "Supported devices",
        value: offer.supportedDevices,
      },
      {
        item: "Devices your household can watch at the same time",
        value: offer.maxNumberOfDevicesToWatch,
      },
      {
        item: "Download devices",
        value: offer.maxNumberOfDevicesToDownload,
      },
    ];
    remainingItems.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      const itemName = document.createElement("p");
      const itemValue = document.createElement("p");

      itemDiv.classList.add("offerItem");
      itemName.classList.add("offerItemName");
      itemValue.classList.add("offerItemValue");
      if (index === remainingItems.length - 1)
        itemDiv.classList.add("lastItem");

      itemName.innerText = item.item;
      itemValue.innerText = item.value;
      itemDiv.append(itemName, itemValue);
      offerBody.appendChild(itemDiv);
    });
    offerDiv.appendChild(offerBody);
    offerPanel.appendChild(offerDiv);
  });
}

function displayDataForMobileScreen() {}
