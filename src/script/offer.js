const apiUrl = "http://127.0.0.1:3000";
let storedOffers = [];
let selectedOfferIndex = null;
let isSelectedIndexSet = false;
document.addEventListener("DOMContentLoaded", async () => {
  const completedStage = localStorage.getItem("completedStage");
  console.log(completedStage);
  if (completedStage !== null) {
    if (completedStage === "1") {
      window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
    }
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
    document.querySelector(
      ".offerPanel"
    ).innerHTML = `<p>${error.message}</p>;`;
  }

  const offerPanel = document.querySelector(".offerPanel");

  if (storedOffers.length > 0) {
    document.querySelector(
      ".selectOfferText"
    ).innerText = `Selected offer index: ${selectedOfferIndex}`;
    offerPanel.innerHTML = "";
    if (window.innerWidth > 1049) {
      storedOffers.forEach((offer, index) => {
        const offerDiv = document.createElement("div");
        offerDiv.innerHTML = `<p>${index}</p>`;
        offerDiv.classList.add("offer");
        offerPanel.append(offerDiv);

        offerDiv.addEventListener("click", () => {
          console.log("Selected offer");
          console.log("Offer index: " + index);
          console.log("Offer element: ");
          console.log(offer);
          selectedOfferIndex = index;
          isSelectedIndexSet = true;
          document.querySelector(
            ".selectOfferText"
          ).innerText = `Selected offer index: ${selectedOfferIndex}`;
          document
            .querySelectorAll(".offer")
            .forEach((offerNode, offerNodeIndex) => {
              if (offerNode.classList.contains("selected")) {
                offerNode.classList.remove("selected");
              }
            });
          offerDiv.classList.add("selected");
        });
      });
    }
    if (window.innerWidth < 1050) {
      const offerHeaderPanel = document.createElement("div");
      offerHeaderPanel.classList.add("offerHeaderPanel");
      storedOffers.forEach((offer, index) => {
        const offerHeader = document.createElement("div");
        offerHeader.classList.add("offerHeader");
        offerHeader.innerHTML = `${index}`;
        offerHeader.addEventListener("click", () => {
          console.log("Selected offer");
          console.log("Offer index: " + index);
          console.log("Offer element: ");
          console.log(offer);
          selectedOfferIndex = index;
          isSelectedIndexSet = true;
          document.querySelector(
            ".selectOfferText"
          ).innerText = `Selected offer index: ${selectedOfferIndex}`;
          document
            .querySelectorAll(".offer")
            .forEach((offerNode, offerNodeIndex) => {
              if (offerNode.classList.contains("selected")) {
                offerNode.classList.remove("selected");
              }
            });
          offerHeader.classList.add("selected");
        });
        offerHeaderPanel.appendChild(offerHeader);
      });
      offerPanel.append(offerHeaderPanel);
    }

    window.addEventListener("resize", () => {
      offerPanel.innerHTML = "";
      if (window.innerWidth > 1050) {
        storedOffers.forEach((offer, index) => {
          const offerDiv = document.createElement("div");
          offerDiv.innerHTML = `<p>${index}</p>`;
          offerDiv.classList.add("offer");
          offerPanel.append(offerDiv);

          if (selectedOfferIndex === index) {
            document
              .querySelectorAll(".offer")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                }
              });
            offerDiv.classList.add("selected");
          }
          offerDiv.addEventListener("click", () => {
            console.log("Selected offer");
            console.log("Offer index: " + index);
            console.log("Offer element: ");
            console.log(offer);
            selectedOfferIndex = index;
            document.querySelector(
              ".selectOfferText"
            ).innerText = `Selected offer index: ${selectedOfferIndex}`;
            document
              .querySelectorAll(".offer")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                }
              });
            offerDiv.classList.add("selected");
          });
        });
      }
      if (window.innerWidth < 1050) {
        const offerHeaderPanel = document.createElement("div");
        offerHeaderPanel.classList.add("offerHeaderPanel");
        storedOffers.forEach((offer, index) => {
          const offerHeader = document.createElement("div");
          offerHeader.classList.add("offerHeader");
          offerHeader.innerHTML = `${index}`;
          if (selectedOfferIndex === index) {
            document
              .querySelectorAll(".offerHeader")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                }
              });
            offerHeader.classList.add("selected");
          }
          offerHeader.addEventListener("click", () => {
            console.log("Selected offer");
            console.log("Offer index: " + index);
            console.log("Offer element: ");
            console.log(offer);
            selectedOfferIndex = index;
            isSelectedIndexSet = true;
            document.querySelector(
              ".selectOfferText"
            ).innerText = `Selected offer index: ${selectedOfferIndex}`;
            document
              .querySelectorAll(".offer")
              .forEach((offerNode, offerNodeIndex) => {
                if (offerNode.classList.contains("selected")) {
                  offerNode.classList.remove("selected");
                }
              });
            offerHeader.classList.add("selected");
          });
          offerHeaderPanel.appendChild(offerHeader);
        });
        offerPanel.append(offerHeaderPanel);
      }
    });
  }
});
