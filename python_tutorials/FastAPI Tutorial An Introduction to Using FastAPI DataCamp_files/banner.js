!function(){var c=!1;function e(){var n,t,o,e,a;function i(){return window.location.hostname.split(".").slice(-2).join(".")}function r(){var e;e=(e=n)+"="+t+";path=/;domain=."+i()+';expires="'+new Date((new Date).setFullYear((new Date).getFullYear()+1)).toGMTString()+'"',"datacamp.test"!==i()&&(e+=";secure;"),o.cookie=e,o.querySelector(".dc-cookie-banner-wrapper").classList.add("dc-is-hidden"),window.dispatchEvent(new CustomEvent("dc:consent:updated")),void 0!==window.snowplow&&window.snowplow("trackStructEvent","cookie_banner","consent",t,"","")}c||(c=!0,n="dc_consent",t='{"version":"2.0.0","essential":1,"functional":1,"performance":1,"advertisement":1}',o=document,(e=o.getElementsByTagName("body"))[0].firstChild,a=o.createElement("div"),e[0].insertAdjacentElement("afterbegin",a),a.innerHTML=`<div class="dc-cookie-banner-wrapper">
          <div class="dc-cookie-banner">
            <p class="dc-cookie-banner-text">
                DataCamp and our partners use cookies and similar technologies to improve your learning experience, offer data science content relevant to your interests, improve the site and to show more relevant advertisements. You can change your mind at any time.
            </p>
            <a class="dc-cookie-banner-learn-more" target="_blank" href="https://www.datacamp.com/privacy-policy/cookie_table">
                Learn more &amp; configure
            </a>
            <button class="dc-cookie-banner-btn-accept" title="Accept" aria-label="Accept">
                Accept
            </button>
        </div>
      </div>`+`
        <style>
            @keyframes slideIn{
                to {
                    max-height: 500px;
                    opacity: 1;
                }
            }
            @keyframes slideOut{
                from {
                    max-height: 500px;
                    opacity: 1;
                } to {
                    max-height: 0;
                    opacity: .25;
                }
            }
            .dc-cookie-banner-wrapper {
                display: flex;
                justify-content: center;
                overflow: hidden;
                position: -webkit-sticky;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 2147483647;
                animation: 1s cubic-bezier(.77, 0, .175, 1) .5s forwards slideIn;
                max-height: 0;
                opacity: .25;
                transition: max-height .5s cubic-bezier(.77, 0, .175, 1);
                background: rgba(0, 0, 0, 0.6);
            }
            .dc-cookie-banner-text {
                color: #14243e;
            }
            .dc-cookie-banner {
                border: 0;
                background: white !important;
                text-decoration: none;
                text-align: center;
                display: flex;
                flex-direction: column;
                font-size: 14px;
                align-items: center;
                padding: 1rem;
                margin: 1rem;
                max-width: 1172px;
                height: 100%;
                border-radius: 4px;
            }
            .dc-cookie-banner-wrapper.dc-is-hidden {
                animation: .5s cubic-bezier(.77, 0, .175, 1) slideOut;
                padding: 0;
            }
            .dc-cookie-banner-learn-more {
                color: #14243e;
                white-space: nowrap;
                margin: 14px 0;
                border: 0;
            }
            .dc-cookie-banner-btn-accept {
                color: #05192d;
                background-image: linear-gradient(#03ef62, #03ef62);
                border: 0;
                border-radius: 4px;
                padding: 8px 16px;
                font-weight: 700;
                text-decoration: none;
                cursor: pointer;
                white-space: nowrap;
                height: 48px
            }
            .dc-cookie-banner-learn-more:active,
            .dc-cookie-banner-learn-more:focus,
            .dc-cookie-banner-learn-more:hover {
                color: #d9d9e2;
                white-space: nowrap;
                text-decoration: underline;
                border: 0;
            }
            @media screen and (min-width: 768px) {
              .dc-cookie-banner {
                  font-size: 16px;
                  flex-direction: row;
                  text-align: left;
                  justify-content: center
              }
              .dc-cookie-banner-learn-more {
                  margin-top: auto;
                  margin-bottom: auto;
                  margin-left: 32px;
              }
              .dc-cookie-banner-btn-accept {
                  margin-left: 16px;
              }
            } @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                .dc-cookie-banner-wrapper {
                  position: relative;
                }
            }
        </style>`,o.querySelector(".dc-cookie-banner-btn-accept").addEventListener("click",r),void 0!==window.snowplow&&window.snowplow("trackStructEvent","cookie_banner","open","","",""))}function n(){return"interactive"===document.readyState||"complete"===document.readyState}n()?e():document.onreadystatechange=function(){n()&&e()}}();