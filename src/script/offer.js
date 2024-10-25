const apiUrl = "http://127.0.0.1:3000";
let storedOffers = [];
let selectedOfferIndex = null;
let isSelectedIndexSet = false;
document.addEventListener("DOMContentLoaded", async () => {
  const completedStage = localStorage.getItem("completedStage");
  console.log(completedStage, typeof completedStage);
  if (completedStage === null) {
    window.location.href = "http://127.0.0.1:5501/src/signup/";
  }
  if (completedStage !== null) {
    if (completedStage === "2" || completedStage === "3") {
      window.location.href =
        "http://127.0.0.1:5501/src/signup/paymentpicker.html";
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
    document.querySelector(".offerPanel").innerHTML = "";
    if ((error.message = "Failed to fetch")) {
      document.querySelector(
        ".warningArea"
      ).innerHTML = `<h2 style="text-align:center">An error occurred:</h2><br/><p>Our servers are currently down, please try again later</p>`;
    } else {
      document.querySelector(
        ".warningArea"
      ).innerHTML = `<p>An error occurred</p><br/><p>${error.message}</p>`;
    }
  }

  const offerPanel = document.querySelector(".offerPanel");

  if (storedOffers.length > 0) {
    offerPanel.innerHTML = "";
    if (window.innerWidth > 1179) {
      storedOffers.forEach((offer, index) => {
        const offerDiv = document.createElement("div");

        offerDiv.classList.add("offer");

        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerHeaderTitle = document.createElement("p");
        offerHeaderTitle.classList.add("offerHeaderTitle");
        offerHeaderTitle.innerText = offer.offerTitle;

        const offerHeaderSubtitle = document.createElement("p");
        offerHeaderSubtitle.classList.add("offerHeaderSubtitle");
        offerHeaderSubtitle.innerText = offer.offerSubtitle;

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");

        offerHeader.append(
          offerHeaderTitle,
          offerHeaderSubtitle,
          offerHeaderSpan
        );

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
          const offerItem = document.createElement("div");
          offerItem.classList.add("offerItem");

          const offerItemName = document.createElement("p");
          offerItemName.innerText = item.item;
          offerItemName.classList.add("offerItemName");

          const offerItemValue = document.createElement("p");
          offerItemValue.innerText = item.value;
          offerItemValue.classList.add("offerItemValue");

          if (index === 0) {
            offerItem.classList.add("firstItem");
            offerItemName.classList.add("firstItem");
            offerItemValue.classList.add("firstItem");
          }
          offerItem.append(offerItemName, offerItemValue);
          offerBody.appendChild(offerItem);
        });
        if (offer.isSpatialAudio) {
          const offerItem = document.createElement("div");
          offerItem.classList.add("offerItem");

          const offerItemName = document.createElement("p");
          offerItemName.innerText = "Spatial audio (immersive sound)";

          const offerItemValue = document.createElement("p");
          offerItemValue.innerText = "Included";

          offerItem.append(offerItemName, offerItemValue);
          offerBody.appendChild(offerItem);
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
          const offerItem = document.createElement("div");
          offerItem.classList.add("offerItem");
          if (index === remainingItems.length - 1) {
            offerItem.classList.add("lastItem");
          }

          const offerItemName = document.createElement("p");
          offerItemName.innerText = item.item;
          offerItemName.classList.add("offerItemName");

          const offerItemValue = document.createElement("p");
          offerItemValue.innerText = item.value;
          offerItemValue.classList.add("offerItemValue");

          offerItem.append(offerItemName, offerItemValue);
          offerBody.appendChild(offerItem);
        });
        offerDiv.appendChild(offerBody);
        offerPanel.append(offerDiv);

        offerDiv.addEventListener("click", () => {
          console.log("Selected offer");
          console.log("Offer index: " + index);
          console.log("Offer element: ");
          console.log(offer);
          selectedOfferIndex = index;
          isSelectedIndexSet = true;

          document
            .querySelectorAll(".offer")
            .forEach((offerNode, offerNodeIndex) => {
              if (offerNode.classList.contains("selected")) {
                offerNode.classList.remove("selected");
                offerNode.children[0].children[2].innerHTML = "";
              }
            });
          offerDiv.classList.add("selected");
          offerDiv.children[0].children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
        });
      });
    }
    if (window.innerWidth < 1180) {
      const offerHeaderPanel = document.createElement("div");
      offerHeaderPanel.classList.add("offerHeaderPanel");
      const offerBody = document.createElement("div");
      offerBody.classList.add("selectedOfferBody");
      storedOffers.forEach((offer, index) => {
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");

        const offerHeaderTitle = document.createElement("p");
        offerHeaderTitle.classList.add("offerHeaderTitle");
        offerHeaderTitle.innerText = offer.offerTitle;

        const offerHeaderSubtitle = document.createElement("p");
        offerHeaderSubtitle.classList.add("offerHeaderSubtitle");
        offerHeaderSubtitle.innerText = offer.offerSubtitle;

        const offerHeaderSpan = document.createElement("span");
        offerHeaderSpan.classList.add("offerHeaderSpan");
        offerHeaderSpan.innerHTML = "";

        offerHeader.append(
          offerHeaderTitle,
          offerHeaderSubtitle,
          offerHeaderSpan
        );
        offerHeaderPanel.appendChild(offerHeader);

        if (index === storedOffers.length - 1) {
          document
            .querySelectorAll(".offerHeader")
            .forEach((offerNode, offerNodeIndex) => {
              if (offerNode.classList.contains("selected")) {
                offerNode.classList.remove("selected");
                offerNode.style.background = "white";
                offerNode.children[0].style.color = "black";
                offerNode.children[1].style.color = "rgba(128, 128, 128, 0.7)";
                offerNode.children[2].innerHTML = "";
                console.log(offerNode);
              }
            });
          offerHeader.classList.add("selected");
          offerHeader.style.background = offer.offerColor;
          offerHeader.children[0].style.color = "white";
          offerHeader.children[1].style.color = "white";
          offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            if (index === 0) {
              offerItem.classList.add("firstItem");
              offerItemName.classList.add("firstItem");
              offerItemValue.classList.add("firstItem");
            }
            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
          if (offer.isSpatialAudio) {
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = "Spatial audio (immersive sound)";
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = "Included";
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");
            if (index === remainingItems.length - 1) {
              offerItem.classList.add("lastItem");
            }

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
        }

        offerHeader.addEventListener("click", () => {
          console.log("Selected offer");
          console.log("Offer index: " + index);
          console.log("Offer element: ");
          console.log(offer);
          selectedOfferIndex = index;

          document
            .querySelectorAll(".offerHeader")
            .forEach((offerNode, offerNodeIndex) => {
              if (offerNode.classList.contains("selected")) {
                offerNode.classList.remove("selected");
                offerNode.style.background = "white";
                offerNode.children[0].style.color = "black";
                offerNode.children[1].style.color = "rgba(128, 128, 128, 0.7)";
                offerNode.children[2].innerHTML = "";

                offerBody.innerHTML = "";
              }
            });
          offerHeader.classList.add("selected");
          offerHeader.style.background = offer.offerColor;
          offerHeader.children[0].style.color = "white";
          offerHeader.children[1].style.color = "white";
          offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            if (index === 0) {
              offerItem.classList.add("firstItem");
              offerItemName.classList.add("firstItem");
              offerItemValue.classList.add("firstItem");
            }
            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
          if (offer.isSpatialAudio) {
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = "Spatial audio (immersive sound)";
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = "Included";
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");
            if (index === remainingItems.length - 1) {
              offerItem.classList.add("lastItem");
            }

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
        });
        offerHeaderPanel.appendChild(offerHeader);
      });
      offerPanel.append(offerHeaderPanel, offerBody);
    }

    window.addEventListener("resize", () => {
      offerPanel.innerHTML = "";
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
      if (window.innerWidth > 1179) {
        storedOffers.forEach((offer, index) => {
          const offerDiv = document.createElement("div");

          offerDiv.classList.add("offer");

          const offerHeader = document.createElement("div");
          offerHeader.classList.add("offerHeader");

          const offerHeaderTitle = document.createElement("p");
          offerHeaderTitle.classList.add("offerHeaderTitle");
          offerHeaderTitle.innerText = offer.offerTitle;

          const offerHeaderSubtitle = document.createElement("p");
          offerHeaderSubtitle.classList.add("offerHeaderSubtitle");
          offerHeaderSubtitle.innerText = offer.offerSubtitle;

          const offerHeaderSpan = document.createElement("span");
          offerHeaderSpan.classList.add("offerHeaderSpan");

          offerHeader.append(
            offerHeaderTitle,
            offerHeaderSubtitle,
            offerHeaderSpan
          );

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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            if (index === 0) {
              offerItem.classList.add("firstItem");
              offerItemName.classList.add("firstItem");
              offerItemValue.classList.add("firstItem");
            }
            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
          if (offer.isSpatialAudio) {
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");

            const offerItemName = document.createElement("p");
            offerItemName.innerText = "Spatial audio (immersive sound)";
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = "Included";
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
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
            const offerItem = document.createElement("div");
            offerItem.classList.add("offerItem");
            if (index === remainingItems.length - 1) {
              offerItem.classList.add("lastItem");
            }

            const offerItemName = document.createElement("p");
            offerItemName.innerText = item.item;
            offerItemName.classList.add("offerItemName");

            const offerItemValue = document.createElement("p");
            offerItemValue.innerText = item.value;
            offerItemValue.classList.add("offerItemValue");

            offerItem.append(offerItemName, offerItemValue);
            offerBody.appendChild(offerItem);
          });
          offerDiv.appendChild(offerBody);
          offerPanel.append(offerDiv);
          if (selectedOfferIndex === index) {
            document
              .querySelectorAll(".offer")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                  offerNode.children[2].innerHTML = "";
                }
              });
            offerDiv.classList.add("selected");
            offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
          }
          offerDiv.addEventListener("click", () => {
            console.log("Selected offer");
            console.log("Offer index: " + index);
            console.log("Offer element: ");
            console.log(offer);
            selectedOfferIndex = index;

            document
              .querySelectorAll(".offer")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                  offerNode.children[0].children[2].innerHTML = "";
                }
              });
            offerDiv.classList.add("selected");
            offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
          });
        });
      }
      if (window.innerWidth < 1180) {
        const offerHeaderPanel = document.createElement("div");
        offerHeaderPanel.classList.add("offerHeaderPanel");
        const offerBody = document.createElement("div");
        offerBody.classList.add("selectedOfferBody");
        storedOffers.forEach((offer, index) => {
          const offerHeader = document.createElement("div");
          offerHeader.classList.add("offerHeader");

          const offerHeaderTitle = document.createElement("p");
          offerHeaderTitle.classList.add("offerHeaderTitle");
          offerHeaderTitle.innerText = offer.offerTitle;

          const offerHeaderSubtitle = document.createElement("p");
          offerHeaderSubtitle.classList.add("offerHeaderSubtitle");
          offerHeaderSubtitle.innerText = offer.offerSubtitle;

          const offerHeaderSpan = document.createElement("span");
          offerHeaderSpan.classList.add("offerHeaderSpan");
          offerHeaderSpan.innerHTML = "";

          offerHeader.append(
            offerHeaderTitle,
            offerHeaderSubtitle,
            offerHeaderSpan
          );
          offerHeaderPanel.appendChild(offerHeader);
          if (
            index === storedOffers.length - 1 &&
            selectedOfferIndex === null
          ) {
            document
              .querySelectorAll(".offerHeader")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                  offerNode.style.background = "white";
                  offerNode.children[0].style.color = "black";
                  offerNode.children[1].style.color =
                    "rgba(128, 128, 128, 0.7)";
                  offerNode.children[2].innerHTML = "";
                  console.log(offerNode);
                }
              });
            offerHeader.classList.add("selected");
            offerHeader.style.background = offer.offerColor;
            offerHeader.children[0].style.color = "white";
            offerHeader.children[1].style.color = "white";
            offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              if (index === 0) {
                offerItem.classList.add("firstItem");
                offerItemName.classList.add("firstItem");
                offerItemValue.classList.add("firstItem");
              }
              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
            if (offer.isSpatialAudio) {
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = "Spatial audio (immersive sound)";
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = "Included";
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");
              if (index === remainingItems.length - 1) {
                offerItem.classList.add("lastItem");
              }

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
          }
          if (selectedOfferIndex === index) {
            document
              .querySelectorAll(".offerHeader")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                  offerNode.style.background = "white";
                  offerNode.children[0].style.color = "black";
                  offerNode.children[1].style.color =
                    "rgba(128, 128, 128, 0.7)";
                  offerNode.children[2].innerHTML = "";
                  console.log(offerNode);
                }
              });
            offerHeader.classList.add("selected");
            offerHeader.style.background = offer.offerColor;
            offerHeader.children[0].style.color = "white";
            offerHeader.children[1].style.color = "white";
            offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
            offerBody.innerHTML = "";
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              if (index === 0) {
                offerItem.classList.add("firstItem");
                offerItemName.classList.add("firstItem");
                offerItemValue.classList.add("firstItem");
              }
              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
            if (offer.isSpatialAudio) {
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = "Spatial audio (immersive sound)";
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = "Included";
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");
              if (index === remainingItems.length - 1) {
                offerItem.classList.add("lastItem");
              }

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
          }
          offerHeader.addEventListener("click", () => {
            offerBody.innerHTML = "";
            console.log("Selected offer");
            console.log("Offer index: " + index);
            console.log("Offer element: ");
            console.log(offer);
            selectedOfferIndex = index;
            isSelectedIndexSet = true;

            document
              .querySelectorAll(".offerHeader")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                  offerNode.style.background = "white";
                  offerNode.children[0].style.color = "black";
                  offerNode.children[1].style.color =
                    "rgba(128, 128, 128, 0.7)";
                  offerNode.children[2].innerHTML = "";
                  offerBody.innerHTML = "";
                }
              });
            offerHeader.classList.add("selected");
            offerHeader.style.background = offer.offerColor;
            offerHeader.children[0].style.color = "white";
            offerHeader.children[1].style.color = "white";
            offerHeader.children[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m429.28-445.37-53.34-52.34q-12.37-12.38-26.79-12.38-14.41 0-26.85 12.44-12.43 12.43-12.31 27.35.12 14.91 12.38 27.17l79.35 79.35q12.08 12.17 27.52 12.17 15.43 0 27.61-12.17L636.26-543.2q12.44-12.43 12.44-27.22 0-14.8-12.44-27.23-12.43-12.44-26.85-12.44-14.41 0-26.71 12.31L429.28-445.37ZM480-97.87q-78.82 0-148.41-29.88T209.8-209.93q-52.19-52.29-82.06-121.81Q97.87-401.26 97.87-480q0-79.82 29.88-148.91t82.18-121.29q52.29-52.19 121.81-82.06 69.52-29.87 148.26-29.87 79.82 0 148.91 29.88t121.29 82.18q52.19 52.29 82.06 121.31 29.87 69.02 29.87 148.76 0 78.82-29.88 148.41T750.07-209.8q-52.29 52.19-121.31 82.06Q559.74-97.87 480-97.87Z"/></svg>`;
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              if (index === 0) {
                offerItem.classList.add("firstItem");
                offerItemName.classList.add("firstItem");
                offerItemValue.classList.add("firstItem");
              }

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
            if (offer.isSpatialAudio) {
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");

              const offerItemName = document.createElement("p");
              offerItemName.innerText = "Spatial audio (immersive sound)";
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = "Included";
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
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
              const offerItem = document.createElement("div");
              offerItem.classList.add("offerItem");
              if (index === remainingItems.length - 1) {
                offerItem.classList.add("lastItem");
              }

              const offerItemName = document.createElement("p");
              offerItemName.innerText = item.item;
              offerItemName.classList.add("offerItemName");

              const offerItemValue = document.createElement("p");
              offerItemValue.innerText = item.value;
              offerItemValue.classList.add("offerItemValue");

              offerItem.append(offerItemName, offerItemValue);
              offerBody.appendChild(offerItem);
            });
          });
          offerHeaderPanel.appendChild(offerHeader, offerBody);
        });
        offerPanel.append(offerHeaderPanel, offerBody);
      }
    });
  }

  document.querySelector(".nextSectionButton").addEventListener("click", () => {
    if (selectedOfferIndex !== null && storedOffers.length > 0) {
      console.log(
        "Offer selected is with id: " + storedOffers[selectedOfferIndex].offerId
      );
      localStorage.setItem(
        "selectedOfferId",
        `${storedOffers[selectedOfferIndex].offerId}`
      );
      localStorage.setItem(
        "offerValue",
        `${storedOffers[selectedOfferIndex].monthlyBillingAmount}`
      );
      localStorage.setItem("completedStage", "3");
      window.location.href =
        "http://localhost:5501/src/signup/paymentpicker.html";
    }
    if (selectedOfferIndex === null && storedOffers.length > 0) {
      document.querySelector(".warningArea").innerHTML = "";
      document.querySelector(
        ".warningArea"
      ).innerHTML = `<p>Please select one of the offers</p>`;
    }
  });
});
