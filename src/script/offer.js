document.addEventListener("DOMContentLoaded", () => {
  const completedStage = localStorage.getItem("completedStage");
  console.log(completedStage);
  if (completedStage !== null) {
    if (completedStage === "1") {
      window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
    }
  }
  if (window.innerWidth < 1050) {
    document.querySelector(".offerPanel").innerHTML = "";
    document.querySelector(".offerPanel").innerHTML = `
    <div class="offerHeaderPanel">
    <div class = "offerHeader">
        <p class = "offerHeaderTitle">    
            Offer 2
        </p>
        <p class = "offerHeaderSubtitle">
            4K + UHD
        </p>
        <span class = "selectedOffer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </span>
    </div>
    <div class = "offerHeader">
        <p class = "offerHeaderTitle">    
            Offer 2
        </p>
        <p class = "offerHeaderSubtitle">
            4K + UHD
        </p>
        <span class = "selectedOffer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </span>
    </div>
    <div class = "offerHeader">
        <p class = "offerHeaderTitle">    
            Offer 2
        </p>
        <p class = "offerHeaderSubtitle">
            4K + UHD
        </p>
        <span class = "selectedOffer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </span>
    </div>
</div>
<div class="selectedOfferBody">
    <div class="offerItem firstOfferItem">
        <p class = "offerItemTitle">
            Monthly price
        </p>
        <p class = "offerItemSubtitle">
            20$
        </p>
    </div>
    <div class="offerItem">
        <p class = "offerItemTitle">
            Video and sound quality
        </p>
        <p class = "offerItemSubtitle">
            Best
        </p>
    </div>
    <div class="offerItem">
        <p class = "offerItemTitle">
            Resolution
        </p>
        <p class = "offerItemSubtitle">
            4K (Ultra HD) + UHD
        </p>
    </div>
    <div class = "offerItem">
        <p class = "offerItemTitle">
            Spatial audio (immersive sound)
        </p>
        <p class = "offerItemSubtitle">
            Included
        </p>
    </div>
    <div class="offerItem">
        <p class = "offerItemTitle">
            Supported Devices
        </p>
        <p class = "offerItemSubtitle">
            TV, computer, mobile phone, tablet
        </p>
            
    </div>
    <div class="offerItem">
        <p class = "offerItemTitle">
            Devices your household can watch at the same time
        </p>
        <p class = "offerItemSubtitle">
            1
        </p>
    </div>
    <div class="offerItem lastOfferItem">
        <p class = "offerItemTitle">
            Download devices
        </p>
        <p class = "offerItemSubtitle">
            1
        </p>
    </div>
</div>
    `;
  }
  if (window.innerWidth > 1050) {
    document.querySelector(".offerPanel").innerHTML = "";
    document.querySelector(".offerPanel").innerHTML = `<div class="offer">
          
    <div class = "offerHeader">
        <p class = "offerHeaderTitle">    
            Offer 1
        </p>
        <p class = "offerHeaderSubtitle">
            4K + UHD
        </p>
        <span class = "selectedOffer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </span>
    </div>
    <div class = "offerBody">
        <div class="offerItem firstOfferItem">
            <p class = "offerItemTitle">
                Monthly price
            </p>
            <p class = "offerItemSubtitle">
                20$
            </p>
        </div>
        <div class="offerItem">
            <p class = "offerItemTitle">
                Video and sound quality
            </p>
            <p class = "offerItemSubtitle">
                Best
            </p>
        </div>
        <div class="offerItem">
            <p class = "offerItemTitle">
                Resolution
            </p>
            <p class = "offerItemSubtitle">
                4K (Ultra HD) + UHD
            </p>
        </div>
        <div class = "offerItem">
            <p class = "offerItemTitle">
                Spatial audio (immersive sound)
            </p>
            <p class = "offerItemSubtitle">
                Included
            </p>
        </div>
        <div class="offerItem">
            <p class = "offerItemTitle">
                Supported Devices
            </p>
            <p class = "offerItemSubtitle">
                TV, computer, mobile phone, tablet
            </p>
                
        </div>
        <div class="offerItem">
            <p class = "offerItemTitle">
                Devices your household can watch at the same time
            </p>
            <p class = "offerItemSubtitle">
                1
            </p>
        </div>
        <div class="offerItem lastOfferItem">
            <p class = "offerItemTitle">
                Download devices
            </p>
            <p class = "offerItemSubtitle">
                1
            </p>
        </div>

    </div>
   

</div>
<div class="offer">
          
          <div class = "offerHeader">
              <p class = "offerHeaderTitle">    
                  Offer 1
              </p>
              <p class = "offerHeaderSubtitle">
                  4K + UHD
              </p>
              <span class = "selectedOffer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
          </div>
          <div class = "offerBody">
              <div class="offerItem firstOfferItem">
                  <p class = "offerItemTitle">
                      Monthly price
                  </p>
                  <p class = "offerItemSubtitle">
                      20$
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Video and sound quality
                  </p>
                  <p class = "offerItemSubtitle">
                      Best
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Resolution
                  </p>
                  <p class = "offerItemSubtitle">
                      4K (Ultra HD) + UHD
                  </p>
              </div>
              <div class = "offerItem">
                  <p class = "offerItemTitle">
                      Spatial audio (immersive sound)
                  </p>
                  <p class = "offerItemSubtitle">
                      Included
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Supported Devices
                  </p>
                  <p class = "offerItemSubtitle">
                      TV, computer, mobile phone, tablet
                  </p>
                      
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Devices your household can watch at the same time
                  </p>
                  <p class = "offerItemSubtitle">
                      1
                  </p>
              </div>
              <div class="offerItem lastOfferItem">
                  <p class = "offerItemTitle">
                      Download devices
                  </p>
                  <p class = "offerItemSubtitle">
                      1
                  </p>
              </div>

          </div>
         

      </div>
      <div class="offer">
          
          <div class = "offerHeader">
              <p class = "offerHeaderTitle">    
                  Offer 1
              </p>
              <p class = "offerHeaderSubtitle">
                  4K + UHD
              </p>
              <span class = "selectedOffer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </span>
          </div>
          <div class = "offerBody">
              <div class="offerItem firstOfferItem">
                  <p class = "offerItemTitle">
                      Monthly price
                  </p>
                  <p class = "offerItemSubtitle">
                      20$
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Video and sound quality
                  </p>
                  <p class = "offerItemSubtitle">
                      Best
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Resolution
                  </p>
                  <p class = "offerItemSubtitle">
                      4K (Ultra HD) + UHD
                  </p>
              </div>
              <div class = "offerItem">
                  <p class = "offerItemTitle">
                      Spatial audio (immersive sound)
                  </p>
                  <p class = "offerItemSubtitle">
                      Included
                  </p>
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Supported Devices
                  </p>
                  <p class = "offerItemSubtitle">
                      TV, computer, mobile phone, tablet
                  </p>
                      
              </div>
              <div class="offerItem">
                  <p class = "offerItemTitle">
                      Devices your household can watch at the same time
                  </p>
                  <p class = "offerItemSubtitle">
                      1
                  </p>
              </div>
              <div class="offerItem lastOfferItem">
                  <p class = "offerItemTitle">
                      Download devices
                  </p>
                  <p class = "offerItemSubtitle">
                      1
                  </p>
              </div>

          </div>
         

      </div>`;
  }
  if (window.innerWidth > 840) {
    document.querySelector(".progressionTrackText").innerHTML =
      '<span class="currentProgressStage">Create account</span> > Select Offer > Payment device > Confirm subscription > Verify email';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
  }
  if (window.innerWidth < 840) {
    document.querySelector(".progressionTrackText").innerHTML =
      'Current stage: <span class="currentProgressStage">Create account</span>';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
  }
  if (window.innerWidth < 450) {
    document.querySelector(".progressionTrackText").innerHTML =
      '<span class="currentProgressStage">Create account</span>';
    document.querySelector(".goBackButtonElement").innerHTML = "Go back";
  }
  if (window.innerWidth < 310) {
    document.querySelector(".goBackButtonElement").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>';
  }
});
const offers = document.querySelectorAll(".offer");

// Add a click event listener to each offer
offers.forEach((offer) => {
  offer.addEventListener("click", function () {
    console.log("Clicked offer:", this); // 'this' refers to the clicked offer element
    console.log(this.children[0].children[0].innerText);

    document.querySelectorAll(".offer").forEach((item) => {
      console.log(item.classList.contains("selected"));
      if (item.classList.contains("selected")) {
        item.classList.remove("selected");
      }
    });
    this.classList.add("selected");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goBackButton = document.querySelector(".goBackButton");
  goBackButton.addEventListener("click", () => {
    localStorage.setItem("completedStage", "1");
    console.log(localStorage.getItem("completedStage"));
    const completedStage = localStorage.getItem("completedStage");
    if (completedStage !== null) {
      if (completedStage === "1") {
        window.location.href = "http://127.0.0.1:5501/src/signup/form.html";
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    console.log("Page was resized");
    console.log(window.innerWidth);
    if (window.innerWidth < 1050) {
      document.querySelector(".offerPanel").innerHTML = "";
      document.querySelector(".offerPanel").innerHTML = `
      <div class="offerHeaderPanel">
      <div class = "offerHeader">
          <p class = "offerHeaderTitle">    
              Offer 2
          </p>
          <p class = "offerHeaderSubtitle">
              4K + UHD
          </p>
          <span class = "selectedOffer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </span>
      </div>
      <div class = "offerHeader">
          <p class = "offerHeaderTitle">    
              Offer 2
          </p>
          <p class = "offerHeaderSubtitle">
              4K + UHD
          </p>
          <span class = "selectedOffer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </span>
      </div>
      <div class = "offerHeader">
          <p class = "offerHeaderTitle">    
              Offer 2
          </p>
          <p class = "offerHeaderSubtitle">
              4K + UHD
          </p>
          <span class = "selectedOffer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </span>
      </div>
  </div>
  <div class="selectedOfferBody">
      <div class="offerItem firstOfferItem">
          <p class = "offerItemTitle">
              Monthly price
          </p>
          <p class = "offerItemSubtitle">
              20$
          </p>
      </div>
      <div class="offerItem">
          <p class = "offerItemTitle">
              Video and sound quality
          </p>
          <p class = "offerItemSubtitle">
              Best
          </p>
      </div>
      <div class="offerItem">
          <p class = "offerItemTitle">
              Resolution
          </p>
          <p class = "offerItemSubtitle">
              4K (Ultra HD) + UHD
          </p>
      </div>
      <div class = "offerItem">
          <p class = "offerItemTitle">
              Spatial audio (immersive sound)
          </p>
          <p class = "offerItemSubtitle">
              Included
          </p>
      </div>
      <div class="offerItem">
          <p class = "offerItemTitle">
              Supported Devices
          </p>
          <p class = "offerItemSubtitle">
              TV, computer, mobile phone, tablet
          </p>
              
      </div>
      <div class="offerItem">
          <p class = "offerItemTitle">
              Devices your household can watch at the same time
          </p>
          <p class = "offerItemSubtitle">
              1
          </p>
      </div>
      <div class="offerItem lastOfferItem">
          <p class = "offerItemTitle">
              Download devices
          </p>
          <p class = "offerItemSubtitle">
              1
          </p>
      </div>
  </div>
      `;
    }
    if (window.innerWidth > 1050) {
      document.querySelector(".offerPanel").innerHTML = "";
      document.querySelector(".offerPanel").innerHTML = `<div class="offer">
            
      <div class = "offerHeader">
          <p class = "offerHeaderTitle">    
              Offer 1
          </p>
          <p class = "offerHeaderSubtitle">
              4K + UHD
          </p>
          <span class = "selectedOffer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </span>
      </div>
      <div class = "offerBody">
          <div class="offerItem firstOfferItem">
              <p class = "offerItemTitle">
                  Monthly price
              </p>
              <p class = "offerItemSubtitle">
                  20$
              </p>
          </div>
          <div class="offerItem">
              <p class = "offerItemTitle">
                  Video and sound quality
              </p>
              <p class = "offerItemSubtitle">
                  Best
              </p>
          </div>
          <div class="offerItem">
              <p class = "offerItemTitle">
                  Resolution
              </p>
              <p class = "offerItemSubtitle">
                  4K (Ultra HD) + UHD
              </p>
          </div>
          <div class = "offerItem">
              <p class = "offerItemTitle">
                  Spatial audio (immersive sound)
              </p>
              <p class = "offerItemSubtitle">
                  Included
              </p>
          </div>
          <div class="offerItem">
              <p class = "offerItemTitle">
                  Supported Devices
              </p>
              <p class = "offerItemSubtitle">
                  TV, computer, mobile phone, tablet
              </p>
                  
          </div>
          <div class="offerItem">
              <p class = "offerItemTitle">
                  Devices your household can watch at the same time
              </p>
              <p class = "offerItemSubtitle">
                  1
              </p>
          </div>
          <div class="offerItem lastOfferItem">
              <p class = "offerItemTitle">
                  Download devices
              </p>
              <p class = "offerItemSubtitle">
                  1
              </p>
          </div>

      </div>
     

  </div>
  <div class="offer">
            
            <div class = "offerHeader">
                <p class = "offerHeaderTitle">    
                    Offer 1
                </p>
                <p class = "offerHeaderSubtitle">
                    4K + UHD
                </p>
                <span class = "selectedOffer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </span>
            </div>
            <div class = "offerBody">
                <div class="offerItem firstOfferItem">
                    <p class = "offerItemTitle">
                        Monthly price
                    </p>
                    <p class = "offerItemSubtitle">
                        20$
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Video and sound quality
                    </p>
                    <p class = "offerItemSubtitle">
                        Best
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Resolution
                    </p>
                    <p class = "offerItemSubtitle">
                        4K (Ultra HD) + UHD
                    </p>
                </div>
                <div class = "offerItem">
                    <p class = "offerItemTitle">
                        Spatial audio (immersive sound)
                    </p>
                    <p class = "offerItemSubtitle">
                        Included
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Supported Devices
                    </p>
                    <p class = "offerItemSubtitle">
                        TV, computer, mobile phone, tablet
                    </p>
                        
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Devices your household can watch at the same time
                    </p>
                    <p class = "offerItemSubtitle">
                        1
                    </p>
                </div>
                <div class="offerItem lastOfferItem">
                    <p class = "offerItemTitle">
                        Download devices
                    </p>
                    <p class = "offerItemSubtitle">
                        1
                    </p>
                </div>

            </div>
           

        </div>
        <div class="offer">
            
            <div class = "offerHeader">
                <p class = "offerHeaderTitle">    
                    Offer 1
                </p>
                <p class = "offerHeaderSubtitle">
                    4K + UHD
                </p>
                <span class = "selectedOffer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </span>
            </div>
            <div class = "offerBody">
                <div class="offerItem firstOfferItem">
                    <p class = "offerItemTitle">
                        Monthly price
                    </p>
                    <p class = "offerItemSubtitle">
                        20$
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Video and sound quality
                    </p>
                    <p class = "offerItemSubtitle">
                        Best
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Resolution
                    </p>
                    <p class = "offerItemSubtitle">
                        4K (Ultra HD) + UHD
                    </p>
                </div>
                <div class = "offerItem">
                    <p class = "offerItemTitle">
                        Spatial audio (immersive sound)
                    </p>
                    <p class = "offerItemSubtitle">
                        Included
                    </p>
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Supported Devices
                    </p>
                    <p class = "offerItemSubtitle">
                        TV, computer, mobile phone, tablet
                    </p>
                        
                </div>
                <div class="offerItem">
                    <p class = "offerItemTitle">
                        Devices your household can watch at the same time
                    </p>
                    <p class = "offerItemSubtitle">
                        1
                    </p>
                </div>
                <div class="offerItem lastOfferItem">
                    <p class = "offerItemTitle">
                        Download devices
                    </p>
                    <p class = "offerItemSubtitle">
                        1
                    </p>
                </div>

            </div>
           

        </div>`;
    }
    if (window.innerWidth > 840) {
      document.querySelector(".progressionTrackText").innerHTML =
        '<span class="currentProgressStage">Create account</span> > Select Offer > Payment device > Confirm subscription > Verify email';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 840) {
      document.querySelector(".progressionTrackText").innerHTML =
        'Current stage: <span class="currentProgressStage">Create account</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 450) {
      document.querySelector(".progressionTrackText").innerHTML =
        '<span class="currentProgressStage">Create account</span>';
      document.querySelector(".goBackButtonElement").innerHTML = "Go back";
    }
    if (window.innerWidth < 310) {
      document.querySelector(".goBackButtonElement").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>';
    }
  });
});
